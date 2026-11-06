
import { MongoClient } from "mongodb";

let colPromise;

function getBusinessCol() {
    if (!colPromise) {
        colPromise = (async () => {
            const client = await new MongoClient(
                process.env.MONGODB_URI
            ).connect();

            const col = client
                .db("mygame")
                .collection("business_leaderboard");

            await col.createIndex({ nis: 1 }, { unique: true });
            await col.createIndex({ score: -1, completedAt: 1 });

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

export default {
    async fetch(req) {
        try {
            const col = await getBusinessCol();

            if (req.method !== "POST") {
                return json({ error: "Method tidak didukung" }, 405);
            }

            let body;

            try {
                body = await req.json();
            } catch {
                return json({ error: "Body tidak valid" }, 400);
            }

            const nis = String(body.nis || "").trim().slice(0, 20);

            if (!nis) {
                return json({ error: "NIS wajib diisi" }, 400);
            }

            if (body.action === "check") {
                const existing = await col.findOne(
                    { nis },
                    {
                        projection: {
                            _id: 0,
                            nama: 1,
                            kelas: 1,
                            score: 1,
                            completedAt: 1,
                        },
                    }
                );

                return json({
                    completed: Boolean(existing),
                    entry: existing || null,
                });
            }

            if (body.action === "submit") {
                const nama = String(body.nama || "").trim().slice(0, 50);
                const kelas = String(body.kelas || "").trim().slice(0, 30);
                const score = Number(body.score);

                if (!nama) {
                    return json({ error: "Nama wajib diisi" }, 400);
                }

                if (
                    !Number.isInteger(score) ||
                    score < 0 ||
                    score > 100
                ) {
                    return json({ error: "Skor tidak valid" }, 400);
                }

                try {
                    await col.insertOne({
                        nama,
                        kelas,
                        nis,
                        score,
                        completedAt: new Date(),
                    });
                } catch (e) {
                    if (e.code === 11000) {
                        return json(
                            { error: "Tantangan sudah pernah diselesaikan." },
                            409
                        );
                    }

                    throw e;
                }

                return json({ ok: true });
            }

            return json({ error: "Action tidak dikenal" }, 400);
        } catch (e) {
            console.error(e);
            return json({ error: "Server error" }, 500);
        }
    },
};
