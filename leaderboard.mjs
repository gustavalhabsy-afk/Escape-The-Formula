
import { MongoClient } from "mongodb";

const MAX_SCORE = 1000;
const MAX_TIME = 24 * 60 * 60;

let colPromise;

function getCol() {
    if (!colPromise) {
        colPromise = (async () => {
            const client = await new MongoClient(
                process.env.MONGODB_URI
            ).connect();

            const col = client.db("mygame").collection("leaderboard");

            await col.createIndex({ nis: 1 }, { unique: true });
            await col.createIndex({ score: -1, timeSeconds: 1 });

            return col;
        })().catch((e) => {
            colPromise = undefined;
            throw e;
        });
    }

    return colPromise;
}

const json = (data, status = 200) =>
    new Response(JSON.stringify(data), {
        status,
        headers: { "Content-Type": "application/json" },
    });

const formatTime = (s) =>
    String(Math.floor(s / 60)).padStart(2, "0") +
    ":" +
    String(s % 60).padStart(2, "0");

const maskNis = (nis) =>
    nis.length > 2
        ? "*".repeat(nis.length - 2) + nis.slice(-2)
        : nis;

export default {
    async fetch(req) {
        try {
            const col = await getCol();

            if (req.method === "POST") {
                let body;

                try {
                    body = await req.json();
                } catch {
                    return json({ error: "Body tidak valid" }, 400);
                }

                const nama = String(body.nama || "").trim().slice(0, 50);
                const kelas = String(body.kelas || "").trim().slice(0, 30);
                const nis = String(body.nis || "").trim().slice(0, 20);
                const score = Number(body.score);
                const timeSeconds = Number(body.timeSeconds);

                if (!nama || !nis) {
                    return json({ error: "Nama dan NIS wajib diisi" }, 400);
                }

                if (
                    !Number.isInteger(score) ||
                    score < 0 ||
                    score > MAX_SCORE
                ) {
                    return json({ error: "Skor tidak valid" }, 400);
                }

                if (
                    !Number.isInteger(timeSeconds) ||
                    timeSeconds < 0 ||
                    timeSeconds > MAX_TIME
                ) {
                    return json({ error: "Waktu tidak valid" }, 400);
                }

                const data = {
                    nama,
                    kelas,
                    score,
                    timeSeconds,
                    timeLabel: formatTime(timeSeconds),
                    updatedAt: new Date(),
                };

                const updated = await col.updateOne(
                    {
                        nis,
                        $or: [
                            { score: { $lt: score } },
                            { score, timeSeconds: { $gt: timeSeconds } },
                        ],
                    },
                    { $set: data }
                );

                if (updated.matchedCount === 0) {
                    try {
                        await col.insertOne({ nis, ...data });
                    } catch (e) {
                        if (e.code !== 11000) throw e;
                    }
                }

                return json({ ok: true });
            }

            if (req.method === "GET") {
                const rows = await col
                    .find(
                        {},
                        {
                            projection: {
                                _id: 0,
                                nama: 1,
                                kelas: 1,
                                nis: 1,
                                score: 1,
                                timeSeconds: 1,
                                timeLabel: 1,
                            },
                        }
                    )
                    .sort({ score: -1, timeSeconds: 1 })
                    .limit(100)
                    .toArray();

                return json(
                    rows.map((r) => ({
                        ...r,
                        nis: maskNis(r.nis),
                    }))
                );
            }

            return json({ error: "Method tidak didukung" }, 405);
        } catch (e) {
            console.error(e);
            return json({ error: "Server error" }, 500);
        }
    },
};
