/* =========================================================
   MATH QUEST DUNGEON — GAME LOGIC
   Vanilla JavaScript murni, tanpa framework / game engine.
   Topik: Matematika Kelas 10 — Persamaan (PLSV, SPLDV, Kuadrat)
   ========================================================= */

/* ---------------------------------------------------------
   1. QUESTION DATABASE — Matematika Kelas 10: Persamaan
   Setiap soal: { question, options[4], answer(0-3), topic, floor, explanation }
   --------------------------------------------------------- */
const questionBank = {
  // ---- FLOOR 1: PLSV (Persamaan Linear Satu Variabel) ----
  1: [
    {
      question: "Jika 2x + 4 = 10, maka nilai x adalah ...",
      options: ["x = 2", "x = 3", "x = 4", "x = 7"],
      answer: 1,
      topic: "PLSV",
      explanation: "2x = 10 - 4 = 6, maka x = 3"
    },
    {
      question: "Selesaikan: 3x - 5 = 7",
      options: ["x = 2", "x = 3", "x = 4", "x = 5"],
      answer: 2,
      topic: "PLSV",
      explanation: "3x = 7 + 5 = 12, maka x = 4"
    },
    {
      question: "Nilai x yang memenuhi 5x + 3 = 18 adalah ...",
      options: ["x = 2", "x = 3", "x = 4", "x = 5"],
      answer: 1,
      topic: "PLSV",
      explanation: "5x = 18 - 3 = 15, maka x = 3"
    },
    {
      question: "Diketahui 4x - 8 = 0, maka x = ...",
      options: ["x = 0", "x = 1", "x = 2", "x = 4"],
      answer: 2,
      topic: "PLSV",
      explanation: "4x = 8, maka x = 2"
    },
    {
      question: "Jika 7 - 2x = 3, maka nilai x adalah ...",
      options: ["x = 1", "x = 2", "x = 3", "x = 5"],
      answer: 1,
      topic: "PLSV",
      explanation: "2x = 7 - 3 = 4, maka x = 2"
    },
    {
      question: "Selesaikan: 6x + 12 = 0",
      options: ["x = 0", "x = -1", "x = -2", "x = 2"],
      answer: 2,
      topic: "PLSV",
      explanation: "6x = -12, maka x = -2"
    },
    {
      question: "Jika (x + 3)/2 = 4, maka nilai x = ...",
      options: ["x = 2", "x = 5", "x = 8", "x = 11"],
      answer: 1,
      topic: "PLSV",
      explanation: "x + 3 = 8, maka x = 5"
    },
    {
      question: "Nilai x yang memenuhi 2(x - 1) = 8 adalah ...",
      options: ["x = 3", "x = 4", "x = 5", "x = 6"],
      answer: 2,
      topic: "PLSV",
      explanation: "2x - 2 = 8, 2x = 10, x = 5"
    },
    {
      question: "Persamaan 3(2x + 1) = 21 mempunyai penyelesaian x = ...",
      options: ["x = 3", "x = 4", "x = 7", "x = 10"],
      answer: 0,
      topic: "PLSV",
      explanation: "6x + 3 = 21, 6x = 18, x = 3"
    },
    {
      question: "Jika 10 - 3x = 1, maka x = ...",
      options: ["x = 2", "x = 3", "x = 4", "x = 5"],
      answer: 1,
      topic: "PLSV",
      explanation: "3x = 10 - 1 = 9, maka x = 3"
    },
    {
      question: "Selesaikan: x/3 + 2 = 5",
      options: ["x = 3", "x = 6", "x = 9", "x = 12"],
      answer: 2,
      topic: "PLSV",
      explanation: "x/3 = 3, maka x = 9"
    },
    {
      question: "Umur Ani 5 tahun lebih tua dari Budi. Jika umur Ani 17 tahun, umur Budi adalah ...",
      options: ["10 tahun", "11 tahun", "12 tahun", "13 tahun"],
      answer: 2,
      topic: "PLSV",
      explanation: "Budi = 17 - 5 = 12 tahun"
    }
  ],

  // ---- FLOOR 2: SPLDV (Sistem Persamaan Linear Dua Variabel) ----
  2: [
    {
      question: "Diketahui sistem:\nx + y = 5\nx - y = 1\nNilai x adalah ...",
      options: ["x = 2", "x = 3", "x = 4", "x = 5"],
      answer: 1,
      topic: "SPLDV",
      explanation: "Jumlahkan: 2x = 6, x = 3. Maka y = 2."
    },
    {
      question: "Dari sistem:\n2x + y = 7\nx + y = 4\nNilai x adalah ...",
      options: ["x = 1", "x = 2", "x = 3", "x = 4"],
      answer: 2,
      topic: "SPLDV",
      explanation: "Kurangi: x = 3. Maka y = 1."
    },
    {
      question: "Jika 3x + y = 10 dan x + y = 6, maka y = ...",
      options: ["y = 1", "y = 2", "y = 3", "y = 4"],
      answer: 3,
      topic: "SPLDV",
      explanation: "Kurangi: 2x = 4, x = 2. Maka y = 4."
    },
    {
      question: "Sistem: x + 2y = 8 dan x - y = 2. Nilai y = ...",
      options: ["y = 1", "y = 2", "y = 3", "y = 4"],
      answer: 1,
      topic: "SPLDV",
      explanation: "Kurangi: 3y = 6, y = 2. Maka x = 4."
    },
    {
      question: "Harga 2 buku + 1 pensil = Rp 9.000.\nHarga 1 buku + 1 pensil = Rp 6.000.\nHarga 1 buku = ...",
      options: ["Rp 2.000", "Rp 3.000", "Rp 4.000", "Rp 5.000"],
      answer: 1,
      topic: "SPLDV",
      explanation: "Kurangi: buku = 3.000, pensil = 3.000"
    },
    {
      question: "Dari 2x - y = 3 dan x + y = 6, maka x + y = ...",
      options: ["5", "6", "7", "8"],
      answer: 1,
      topic: "SPLDV",
      explanation: "Dari persamaan kedua: x + y = 6"
    },
    {
      question: "Sistem: 4x + 3y = 18 dan x = 3. Nilai y = ...",
      options: ["y = 1", "y = 2", "y = 3", "y = 6"],
      answer: 1,
      topic: "SPLDV",
      explanation: "4(3) + 3y = 18, 12 + 3y = 18, 3y = 6, y = 2"
    },
    {
      question: "Jika x = 2y dan x + y = 9, maka nilai y = ...",
      options: ["y = 2", "y = 3", "y = 4", "y = 6"],
      answer: 1,
      topic: "SPLDV",
      explanation: "2y + y = 9, 3y = 9, y = 3. Maka x = 6."
    },
    {
      question: "Sistem: 5x + 2y = 16 dan 3x + 2y = 12. Nilai x = ...",
      options: ["x = 1", "x = 2", "x = 3", "x = 4"],
      answer: 1,
      topic: "SPLDV",
      explanation: "Kurangi: 2x = 4, x = 2. Maka y = 3."
    },
    {
      question: "Dari sistem x - y = 1 dan 2x + y = 8, nilai x·y = ...",
      options: ["3", "6", "9", "12"],
      answer: 1,
      topic: "SPLDV",
      explanation: "Jumlah: 3x = 9, x = 3. y = 2. x·y = 6."
    },
    {
      question: "2 kg apel + 1 kg jeruk = Rp 24.000.\n1 kg apel + 3 kg jeruk = Rp 27.000.\nHarga 1 kg apel = ...",
      options: ["Rp 7.500", "Rp 9.000", "Rp 10.000", "Rp 12.000"],
      answer: 1,
      topic: "SPLDV",
      explanation: "Dengan eliminasi: apel = Rp 9.000, jeruk = Rp 6.000"
    },
    {
      question: "Dari y = 3x - 1 dan 2x + y = 13, nilai x = ...",
      options: ["x = 2", "x = 3", "x = 4", "x = 5"],
      answer: 1,
      topic: "SPLDV",
      explanation: "2x + (3x-1) = 13, 5x = 14... Coba: x=3, y=8, 6+8=14 ✗. x=2: y=5, 4+5=9 ✗. x=3: 2(3)+3(3)-1=5+9-1=13 ✓"
    }
  ],

  // ---- FLOOR 3: Persamaan Kuadrat ----
  3: [
    {
      question: "Akar-akar dari x² - 5x + 6 = 0 adalah ...",
      options: ["x = 1 dan x = 6", "x = 2 dan x = 3", "x = -2 dan x = -3", "x = -1 dan x = 6"],
      answer: 1,
      topic: "Kuadrat",
      explanation: "Faktorisasi: (x-2)(x-3)=0, jadi x=2 atau x=3"
    },
    {
      question: "Persamaan x² - 4 = 0 mempunyai akar ...",
      options: ["x = 2 saja", "x = ±2", "x = ±4", "x = 4 saja"],
      answer: 1,
      topic: "Kuadrat",
      explanation: "x² = 4, x = ±√4 = ±2"
    },
    {
      question: "Jika x² + 2x - 3 = 0, maka akar-akarnya adalah ...",
      options: ["x = 1 dan x = -3", "x = -1 dan x = 3", "x = 3 dan x = -1", "x = -3 dan x = 1"],
      answer: 0,
      topic: "Kuadrat",
      explanation: "Faktorisasi: (x+3)(x-1)=0, jadi x=1 atau x=-3"
    },
    {
      question: "Diskriminan dari x² - 4x + 4 = 0 adalah ...",
      options: ["D = 0", "D = 4", "D = 8", "D = 16"],
      answer: 0,
      topic: "Kuadrat",
      explanation: "D = b²-4ac = 16-16 = 0 (akar kembar)"
    },
    {
      question: "Nilai x yang memenuhi x² = 9 adalah ...",
      options: ["x = 3 saja", "x = -3 saja", "x = ±3", "x = ±9"],
      answer: 2,
      topic: "Kuadrat",
      explanation: "x = ±√9 = ±3"
    },
    {
      question: "Persamaan 2x² - 8 = 0, maka x = ...",
      options: ["x = ±1", "x = ±2", "x = ±4", "x = ±8"],
      answer: 1,
      topic: "Kuadrat",
      explanation: "x² = 4, maka x = ±2"
    },
    {
      question: "Jumlah akar-akar dari x² - 7x + 12 = 0 adalah ...",
      options: ["3", "4", "7", "12"],
      answer: 2,
      topic: "Kuadrat",
      explanation: "Jumlah akar = -b/a = 7/1 = 7"
    },
    {
      question: "Akar-akar dari x² + 5x + 6 = 0 adalah ...",
      options: ["x = 2 dan x = 3", "x = -2 dan x = -3", "x = 1 dan x = 6", "x = -1 dan x = -6"],
      answer: 1,
      topic: "Kuadrat",
      explanation: "Faktorisasi: (x+2)(x+3)=0, x=-2 atau x=-3"
    },
    {
      question: "Persamaan (x-3)(x+2) = 0 mempunyai akar ...",
      options: ["x = 3 dan x = 2", "x = -3 dan x = 2", "x = 3 dan x = -2", "x = -3 dan x = -2"],
      answer: 2,
      topic: "Kuadrat",
      explanation: "x-3=0 → x=3; x+2=0 → x=-2"
    },
    {
      question: "Perkalian akar-akar dari 2x² - 6x + 4 = 0 adalah ...",
      options: ["1", "2", "3", "4"],
      answer: 1,
      topic: "Kuadrat",
      explanation: "Hasil kali akar = c/a = 4/2 = 2"
    },
    {
      question: "Gunakan rumus kuadrat untuk x² - 3x - 4 = 0. Akar positifnya = ...",
      options: ["x = 1", "x = 2", "x = 4", "x = 5"],
      answer: 2,
      topic: "Kuadrat",
      explanation: "Faktorisasi: (x-4)(x+1)=0, akar positif = 4"
    },
    {
      question: "Jika satu akar dari x² - 5x + k = 0 adalah x = 2, nilai k = ...",
      options: ["k = 2", "k = 4", "k = 6", "k = 8"],
      answer: 2,
      topic: "Kuadrat",
      explanation: "Substitusi x=2: 4-10+k=0, k=6"
    }
  ]
};

/* ---------------------------------------------------------
   2. CHARACTER / ENTITY DEFINITIONS
   --------------------------------------------------------- */
const CHARACTERS = {
  hero: {
    name: "Kamu",
    img: "assets/hero.png",
    color: "#4080ff"
  },
  npc1: {
    name: "Goblin Aritmetika",
    img: "assets/goblin.png",
    color: "#40c040",
    hp: 1,
    reward: 20,
    // Emoji projectile & color for attack FX
    fxEmoji: "📚",
    fxColor: "rgba(80,200,80,0.9)",
    dialogues: [
      "Hahaha! Kau berani masuk ke sini?! Aku Goblin Aritmetika, penjaga gerbang dungeon ini!",
      "Coba saja kalahkan aku dengan ilmu persamaanmu! Jika kau tak bisa menjawab soalku, kau akan kehabisan tenaga!",
      "Sudah siap? Aku tidak akan menahan diri! Bersiaplah untuk pertarungan!"
    ]
  },
  npc2: {
    name: "Penyihir Variabel",
    img: "assets/wizard.png",
    color: "#c040c0",
    hp: 2,
    reward: 20,
    fxEmoji: "🔮",
    fxColor: "rgba(180,80,220,0.9)",
    dialogues: [
      "Ssst... Kau sudah sejauh ini? Aku akui itu cukup mengesankan...",
      "Tapi aku, Penyihir Variabel, penguasa x dan y! Sihir persamaanku jauh lebih rumit!",
      "Kau harus menghadapi dua variabel sekarang. Bisakah otakmu menanganinya? Mari kita buktikan!"
    ]
  },
  npc3: {
    name: "Golem Persamaan",
    img: "assets/golem.png",
    color: "#4080c0",
    hp: 2,
    reward: 20,
    fxEmoji: "⚡",
    fxColor: "rgba(80,140,255,0.9)",
    dialogues: [
      "BZZZT... TERDETEKSI PENYUSUP... AKTIVASI PROTOKOL PERTAHANAN...",
      "AKU ADALAH GOLEM PERSAMAAN. TUBUHKU TERBUAT DARI BATU YANG DIUKIR DENGAN RUMUS MATEMATIKA.",
      "PERINGATAN: TINGKAT KESULITAN TINGGI. BERSIAPLAH MENGHADAPI SISTEM PERSAMAAN DUA VARIABEL!"
    ]
  },
  boss: {
    name: "Raja Aljabar",
    img: "assets/boss.png",
    color: "#c03030",
    hp: 3,
    reward: 40,
    fxEmoji: "💀",
    fxColor: "rgba(220,50,50,0.9)",
    dialogues: [
      "Hahahaha! Kau benar-benar berhasil mengalahkan semua penjagaku? Cukup mengagumkan untuk seorang pelajar...",
      "Tapi kau berhadapan dengan Raja Aljabar sekarang! Aku menguasai semua persamaan — linear, dua variabel, bahkan kuadrat!",
      "Hanya yang benar-benar memahami matematika yang bisa mengalahkanku. Apakah kau layak? BUKTIKAN!"
    ]
  }
};

/* ---------------------------------------------------------
   2b. ROSTER KARAKTER PLAYER (bisa diganti-ganti)
   --------------------------------------------------------- */
const CHARACTER_ROSTER = [
  {
    id: "fighter",
    name: "Great Fighter",
    desc: "Pejuang pemberani dengan pedang dan baju zirah.",
    img: "assets/fighter.png"
  },
  {
    id: "mage",
    name: "Genius Mage",
    desc: "Penyihir cerdik yang menguasai mantra dan ramuan.",
    img: "assets/mage.png"
  },
  {
    id: "archer",
    name: "Veteran Archer",
    desc: "Pemanah lincah yang jago membidik dari jarak jauh.",
    img: "assets/archer.png"
  }
];
const DEFAULT_CHARACTER_ID = CHARACTER_ROSTER[0].id;
const CHARACTER_STORAGE_KEY = "etf_character_v1";

function loadSavedCharacterId() {
  try {
    const raw = localStorage.getItem(CHARACTER_STORAGE_KEY);
    return raw && CHARACTER_ROSTER.some(c => c.id === raw) ? raw : DEFAULT_CHARACTER_ID;
  } catch (e) {
    return DEFAULT_CHARACTER_ID;
  }
}

function saveCharacterIdLocal(id) {
  try {
    localStorage.setItem(CHARACTER_STORAGE_KEY, id);
  } catch (e) {
    console.error("Gagal menyimpan pilihan karakter:", e);
  }
}

function getSelectedCharacter() {
  return CHARACTER_ROSTER.find(c => c.id === state.selectedCharacterId) || CHARACTER_ROSTER[0];
}

/** Terapkan gambar karakter yang dipilih ke semua tempat player ditampilkan. */
function applyPlayerCharacterSprites() {
  const char = getSelectedCharacter();
  CHARACTERS.hero.img = char.img;

  const menuImg = document.getElementById("menu-hero-img");
  if (menuImg) menuImg.src = char.img;

  const dialogImg = document.getElementById("dialog-player-img");
  if (dialogImg) dialogImg.src = char.img;

  const battleImg = document.getElementById("battle-player-sprite");
  if (battleImg) battleImg.src = char.img;

  const tokenImg = document.getElementById("player-token-img");
  if (tokenImg) tokenImg.src = char.img;
}

function renderCharacterSelectCards() {
  const wrap = document.getElementById("character-select-list");
  if (!wrap) return;

  wrap.innerHTML = CHARACTER_ROSTER.map(c => `
    <button type="button" class="character-card${c.id === state.selectedCharacterId ? " character-card-selected" : ""}" data-char-id="${c.id}">
      ${c.id === state.selectedCharacterId ? '<span class="character-card-badge">✓ DIPAKAI</span>' : ""}
      <img src="${c.img}" alt="${escapeHtml(c.name)}" class="character-card-img">
      <span class="character-card-name">${escapeHtml(c.name)}</span>
      <span class="character-card-desc">${escapeHtml(c.desc)}</span>
    </button>
  `).join("");

  wrap.querySelectorAll(".character-card").forEach(btn => {
    btn.addEventListener("click", () => selectCharacter(btn.dataset.charId));
  });
}

function selectCharacter(id) {
  if (!CHARACTER_ROSTER.some(c => c.id === id)) return;
  state.selectedCharacterId = id;
  saveCharacterIdLocal(id);
  applyPlayerCharacterSprites();
  renderCharacterSelectCards();
  showToast(`✅ Karakter diganti jadi ${getSelectedCharacter().name}!`, 1800);
}

function openCharacterSelectScreen() {
  renderCharacterSelectCards();
  showScreen("character-select-screen");
}

/* ---------------------------------------------------------
   3. DUNGEON MAP CONFIGURATION
   --------------------------------------------------------- */
const GRID_COLS = 12;
const GRID_ROWS = 8;

const FLOOR_TOPICS = { 1: "PLSV", 2: "SPLDV", 3: "Kuadrat" };
const FLOOR_THEMES = { 1: "ruins", 2: "cave", 3: "lava" }; // tema visual per lantai
const MAX_FLOOR = 3;

const PLAYER_START = { x: 1, y: 6 };

const NPC_LAYOUT = [
  { x: 2, y: 2, charKey: "npc1" },
  { x: 5, y: 5, charKey: "npc2" },
  { x: 9, y: 2, charKey: "npc3" }
];

const BOSS_LAYOUT = { x: 9, y: 6, charKey: "boss" };

function buildWalls() {
  const walls = new Set();
  // Outer border
  for (let x = 0; x < GRID_COLS; x++) {
    walls.add(`${x},0`);
    walls.add(`${x},${GRID_ROWS - 1}`);
  }
  for (let y = 0; y < GRID_ROWS; y++) {
    walls.add(`0,${y}`);
    walls.add(`${GRID_COLS - 1},${y}`);
  }
  // Vertical dividers with doorways
  [4, 7].forEach(x => {
    for (let y = 1; y < GRID_ROWS - 1; y++) {
      if (y === 3 || y === 5) continue; // door gaps
      walls.add(`${x},${y}`);
    }
  });
  return walls;
}

const WALLS = buildWalls();

/* ---------------------------------------------------------
   4. GAME STATE
   --------------------------------------------------------- */
const state = {
  currentFloor: 1,
  totalScore: 0,
  floorScore: 0,
  playerHP: 3,
  maxHP: 3,
  playerPos: { ...PLAYER_START },
  playerFacing: 1, // 1 = menghadap kanan, -1 = menghadap kiri
  playerVelocity: { x: 0, y: 0 }, // kecepatan saat ini (satuan sel/detik), untuk akselerasi halus
  selectedCharacterId: loadSavedCharacterId(),
  npcs: [],
  boss: null,
  inBattle: false,
  inDialog: false,
  battle: null,
  dialog: null,    // { entity, type, dialogIndex }
  currentQuestion: null,
  questionCount: 0,
  // --- Biodata pemain ---
  player: { nama: "", kelas: "", nis: "" },
  // --- Timer pengerjaan ---
  elapsedSeconds: 0,
  timerInterval: null,
  timerResumeAt: null
};

function createNpcs() {
  return NPC_LAYOUT.map((layout, idx) => {
    const char = CHARACTERS[layout.charKey];
    return {
      id: idx,
      x: layout.x,
      y: layout.y,
      charKey: layout.charKey,
      name: char.name,
      img: char.img,
      hp: char.hp,
      maxHp: char.hp,
      reward: char.reward,
      defeated: false
    };
  });
}

function createBoss() {
  const char = CHARACTERS.boss;
  return {
    x: BOSS_LAYOUT.x,
    y: BOSS_LAYOUT.y,
    charKey: "boss",
    name: char.name,
    img: char.img,
    hp: char.hp,
    maxHp: char.hp,
    reward: char.reward,
    defeated: false
  };
}

function allNpcsDefeated() {
  return state.npcs.every(n => n.defeated);
}

function resetFloorEntities() {
  pressedDirections.clear();
  state.playerHP = state.maxHP;
  state.playerPos = { ...PLAYER_START };
  state.playerFacing = 1;
  state.npcs = createNpcs();
  state.boss = createBoss();
  state.inBattle = false;
  state.inDialog = false;
  state.battle = null;
  state.dialog = null;
  state.questionCount = 0;
}

/* ---------------------------------------------------------
   4b. BIODATA PEMAIN
   Biodata (nama/kelas/NIS) disimpan sebentar di localStorage
   HANYA supaya form ter-prefill otomatis di device yang sama.
   Biodata yang dipakai untuk leaderboard tetap dikirim ke
   penyimpanan online (lihat bagian LEADERBOARD di bawah).
   --------------------------------------------------------- */
const BIODATA_STORAGE_KEY = "etf_biodata_v1";

function loadSavedBiodata() {
  try {
    const raw = localStorage.getItem(BIODATA_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function saveBiodataLocal(bio) {
  try {
    localStorage.setItem(BIODATA_STORAGE_KEY, JSON.stringify(bio));
  } catch (e) {
    console.error("Gagal menyimpan biodata lokal:", e);
  }
}

let biodataMode = "start"; // "start" (sebelum main) | "view" (cek/ubah biodata)

function openBiodataScreen(mode) {
  biodataMode = mode;
  const saved = loadSavedBiodata();

  document.getElementById("biodata-nama").value = saved?.nama || "";
  document.getElementById("biodata-kelas").value = saved?.kelas || "";
  document.getElementById("biodata-nis").value = saved?.nis || "";

  const errEl = document.getElementById("biodata-error");
  errEl.classList.add("hidden");
  errEl.textContent = "";

  const titleEl = document.getElementById("biodata-title");
  const descEl = document.getElementById("biodata-desc");
  const submitBtn = document.getElementById("btn-biodata-submit");

  if (mode === "start") {
    titleEl.textContent = "🪪 ISI BIODATA";
    descEl.textContent = "Isi biodatamu dulu sebelum memulai petualangan!";
    submitBtn.textContent = "⚔️ MULAI PETUALANGAN";
  } else {
    titleEl.textContent = "🪪 BIODATA SAYA";
    descEl.textContent = saved
      ? "Ini biodata yang tersimpan di device ini. Kamu bisa mengubahnya kapan saja."
      : "Kamu belum pernah mengisi biodata. Isi dulu sebelum bermain, ya!";
    submitBtn.textContent = "💾 SIMPAN BIODATA";
  }

  showScreen("biodata-screen");
}

function handleBiodataSubmit(e) {
  e.preventDefault();

  const nama = document.getElementById("biodata-nama").value.trim();
  const kelas = document.getElementById("biodata-kelas").value.trim();
  const nis = document.getElementById("biodata-nis").value.trim();
  const errEl = document.getElementById("biodata-error");

  if (!nama || !kelas || !nis) {
    errEl.textContent = "⚠️ Nama, Kelas, dan NIS wajib diisi semua.";
    errEl.classList.remove("hidden");
    return;
  }
  if (!/^[0-9A-Za-z.\-\/ ]+$/.test(nis)) {
    errEl.textContent = "⚠️ NIS hanya boleh berisi huruf, angka, spasi, - . atau /.";
    errEl.classList.remove("hidden");
    return;
  }

  errEl.classList.add("hidden");
  const bio = { nama, kelas, nis };
  state.player = bio;
  saveBiodataLocal(bio);

  if (biodataMode === "start") {
    startGame();
  } else {
    showToast("✅ Biodata tersimpan!", 2000);
    showScreen("main-menu-screen");
  }
}

/* ---------------------------------------------------------
   4c. TIMER PENGERJAAN
   Dijalankan selama sesi bermain (dari MULAI PETUALANGAN
   sampai dungeon selesai / dihentikan), dan dijeda saat
   Game Over / kembali ke menu. Nilai akhirnya dikirim
   bersama data leaderboard saat pemain menyelesaikan dungeon.
   --------------------------------------------------------- */
function formatTime(totalSeconds) {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const m = Math.floor(safe / 60).toString().padStart(2, "0");
  const s = (safe % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function updateTimerDisplay() {
  const el = document.getElementById("hud-timer");
  if (el) el.textContent = formatTime(state.elapsedSeconds);
}

function startTimer() {
  state.elapsedSeconds = 0;
  resumeTimer();
}

function resumeTimer() {
  state.timerResumeAt = Date.now();
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    const now = Date.now();
    state.elapsedSeconds += (now - state.timerResumeAt) / 1000;
    state.timerResumeAt = now;
    updateTimerDisplay();
  }, 1000);
}

function pauseTimer() {
  if (state.timerInterval) {
    const now = Date.now();
    state.elapsedSeconds += (now - state.timerResumeAt) / 1000;
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
  updateTimerDisplay();
}

/* ---------------------------------------------------------
   4d. LEADERBOARD (lintas device)
   Leaderboard disimpan online via Firebase Realtime Database
   REST API supaya BISA DILIHAT SEMUA PEMAIN dari device manapun.

   CARA SETUP (gratis, sekali saja, ±5 menit):
   1. Buka https://console.firebase.google.com → buat project baru.
   2. Menu kiri: "Build" → "Realtime Database" → "Create Database".
      Pilih lokasi server, lalu mulai dalam "Test mode".
   3. Salin URL database-nya, formatnya seperti:
      https://NAMA-PROJECT-default-rtdb.asia-southeast1.firebasedatabase.app
   4. Tempelkan URL tersebut ke FIREBASE_DB_URL di bawah ini.
   5. (Disarankan) Di tab "Rules" pada Realtime Database, ganti jadi:
      {
        "rules": {
          "leaderboard": { ".read": true, ".write": true }
        }
      }
      supaya bagian lain database (kalau ada) tetap terlindungi.

   Selama FIREBASE_DB_URL masih kosong, leaderboard otomatis
   berjalan dalam MODE LOKAL (localStorage) — hanya tersimpan
   di device yang dipakai bermain, dan ada keterangan di layar
   Leaderboard yang memberitahu ini.
   --------------------------------------------------------- */
const FIREBASE_DB_URL = ""; // <-- ISI DI SINI setelah setup Firebase, contoh: "https://etf-leaderboard-default-rtdb.asia-southeast1.firebasedatabase.app"

const LEADERBOARD_LOCAL_KEY = "etf_leaderboard_local_v1";

function isRemoteLeaderboardConfigured() {
  return typeof FIREBASE_DB_URL === "string" && FIREBASE_DB_URL.trim().length > 0;
}

function readLeaderboardLocal() {
  try {
    const raw = localStorage.getItem(LEADERBOARD_LOCAL_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveLeaderboardEntryLocal(entry) {
  try {
    const list = readLeaderboardLocal();
    list.push(entry);
    localStorage.setItem(LEADERBOARD_LOCAL_KEY, JSON.stringify(list));
  } catch (e) {
    console.error("Gagal menyimpan leaderboard lokal:", e);
  }
}

async function submitLeaderboardEntry(entry) {
  if (isRemoteLeaderboardConfigured()) {
    try {
      const res = await fetch(`${FIREBASE_DB_URL.replace(/\/$/, "")}/leaderboard.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry)
      });
      if (!res.ok) throw new Error("Response tidak OK: " + res.status);
      return { ok: true, mode: "remote" };
    } catch (err) {
      console.error("Gagal mengirim skor ke leaderboard online:", err);
      saveLeaderboardEntryLocal(entry);
      return { ok: false, mode: "local-fallback" };
    }
  }
  saveLeaderboardEntryLocal(entry);
  return { ok: true, mode: "local" };
}

async function fetchLeaderboardEntries() {
  if (isRemoteLeaderboardConfigured()) {
    try {
      const res = await fetch(`${FIREBASE_DB_URL.replace(/\/$/, "")}/leaderboard.json`);
      if (!res.ok) throw new Error("Response tidak OK: " + res.status);
      const data = await res.json();
      const entries = data ? Object.values(data) : [];
      return { ok: true, mode: "remote", entries };
    } catch (err) {
      console.error("Gagal memuat leaderboard online:", err);
      return { ok: false, mode: "remote-error", entries: readLeaderboardLocal() };
    }
  }
  return { ok: true, mode: "local", entries: readLeaderboardLocal() };
}

/** Skor tertinggi dulu; jika skor sama, waktu tercepat menang. */
function sortLeaderboard(entries) {
  return [...entries].sort((a, b) => {
    if ((b.score || 0) !== (a.score || 0)) return (b.score || 0) - (a.score || 0);
    return (a.timeSeconds || 0) - (b.timeSeconds || 0);
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

async function openLeaderboardScreen() {
  showScreen("leaderboard-screen");
  const statusEl = document.getElementById("leaderboard-status");
  const bodyEl = document.getElementById("leaderboard-body");

  statusEl.classList.add("hidden");
  bodyEl.innerHTML = `<tr><td colspan="6" class="leaderboard-empty">Memuat data...</td></tr>`;

  const result = await fetchLeaderboardEntries();
  const sorted = sortLeaderboard(result.entries || []);

  if (result.mode === "local") {
    statusEl.textContent = "💾 Menampilkan leaderboard lokal (device ini saja) — leaderboard online belum dikonfigurasi.";
    statusEl.classList.remove("hidden");
  } else if (result.mode === "remote-error") {
    statusEl.textContent = "⚠️ Gagal memuat leaderboard online. Menampilkan data lokal yang tersimpan (jika ada).";
    statusEl.classList.remove("hidden");
  }

  if (sorted.length === 0) {
    bodyEl.innerHTML = `<tr><td colspan="6" class="leaderboard-empty">Belum ada data. Jadilah yang pertama menyelesaikan dungeon! 🏆</td></tr>`;
    return;
  }

  bodyEl.innerHTML = sorted.slice(0, 100).map((e, idx) => `
    <tr class="${idx === 0 ? "leaderboard-first" : ""}">
      <td>${idx + 1}</td>
      <td>${escapeHtml(e.nama)}</td>
      <td>${escapeHtml(e.kelas)}</td>
      <td>${escapeHtml(e.nis)}</td>
      <td>${e.score ?? 0}</td>
      <td>${e.timeLabel || formatTime(e.timeSeconds || 0)}</td>
    </tr>
  `).join("");
}

/* ---------------------------------------------------------
   5. SCREEN NAVIGATION
   --------------------------------------------------------- */
const TOP_LEVEL_SCREENS = [
  "main-menu-screen",
  "how-to-play-screen",
  "about-screen",
  "biodata-screen",
  "character-select-screen",
  "leaderboard-screen",
  "game-screen"
];

function showScreen(id) {
  TOP_LEVEL_SCREENS.forEach(sid => {
    document.getElementById(sid).classList.toggle("active-screen", sid === id);
  });
}

function hideAllModals() {
  ["dialog-modal", "battle-modal", "floor-complete-screen", "game-over-screen", "game-clear-screen"]
    .forEach(id => document.getElementById(id).classList.add("hidden"));
}

/* ---------------------------------------------------------
   6. HUD
   --------------------------------------------------------- */
function updateHUD() {
  const topic = FLOOR_TOPICS[state.currentFloor] || "?";
  document.getElementById("hud-floor").textContent = state.currentFloor;
  document.getElementById("hud-topic").textContent = topic;
  document.getElementById("hud-floor-score").textContent = `${state.floorScore} / 100`;
  document.getElementById("hud-total-score").textContent = state.totalScore;
  updateTimerDisplay();

  const hp = Math.max(state.playerHP, 0);
  document.getElementById("hud-player-hp").textContent =
    "❤️".repeat(hp) + "🖤".repeat(state.maxHP - hp);

  const npcCount = state.npcs.filter(n => n.defeated).length;
  document.getElementById("hud-npc-progress").textContent = `${npcCount} / 3`;

  const bossEl = document.getElementById("hud-boss-status");
  if (state.boss && state.boss.defeated) {
    bossEl.textContent = "✓ DIKALAHKAN";
    bossEl.className = "hud-value hud-open";
  } else if (allNpcsDefeated()) {
    bossEl.textContent = "🔓 TERBUKA";
    bossEl.className = "hud-value hud-open";
  } else {
    bossEl.textContent = "🔒 TERKUNCI";
    bossEl.className = "hud-value hud-locked";
  }
}

/* ---------------------------------------------------------
   7. DUNGEON RENDERING
   --------------------------------------------------------- */
function renderDungeonGrid() {
  const grid = document.getElementById("dungeon-grid");

  // Terapkan tema visual lantai (ruins/cave/lava) lewat data-theme di
  // #game-screen — CSS-nya baca atribut ini untuk ganti palet tile.
  const gameScreen = document.getElementById("game-screen");
  gameScreen.dataset.theme = FLOOR_THEMES[state.currentFloor] || "ruins";

  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${GRID_COLS}, var(--cell-size))`;
  grid.style.gridTemplateRows = `repeat(${GRID_ROWS}, var(--cell-size))`;

  for (let y = 0; y < GRID_ROWS; y++) {
    for (let x = 0; x < GRID_COLS; x++) {
      const cell = document.createElement("div");
      const isWall = WALLS.has(`${x},${y}`);
      if (isWall) {
        cell.className = "cell cell-wall";
      } else {
        // Alternating dark tile for pixel art variety (checkerboard-ish pattern)
        const isDark = (x + y) % 3 === 0 || (x * 7 + y * 3) % 5 === 0;
        cell.className = isDark ? "cell cell-floor dark-tile" : "cell cell-floor";
      }
      grid.appendChild(cell);
    }
  }
}

function getCellSizePx() {
  if (cachedCellSizePx === null) refreshCellSizeCache();
  return cachedCellSizePx;
}

let cachedCellSizePx = null;
function refreshCellSizeCache() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--cell-size");
  cachedCellSizePx = parseFloat(raw);
}

function renderEntities() {
  const grid = document.getElementById("dungeon-grid");
  grid.querySelectorAll(".entity-token").forEach(el => el.remove());
  const cs = getCellSizePx();

  // NPCs
  state.npcs.forEach(npc => {
    const el = document.createElement("div");
    el.className = "entity-token entity-npc" + (npc.defeated ? " defeated" : "");
    el.style.transform = `translate(${npc.x * cs}px, ${npc.y * cs}px)`;
    el.title = npc.name;

    const img = document.createElement("img");
    img.src = npc.img;
    img.alt = npc.name;
    el.appendChild(img);

    if (npc.defeated) {
      const skull = document.createElement("div");
      skull.style.cssText = `
        position:absolute; top:2px; left:2px; right:2px;
        font-size:1.2rem; text-align:center; text-shadow:0 2px 4px black;
      `;
      skull.textContent = "💀";
      el.appendChild(skull);
    }

    grid.appendChild(el);
  });

  // Boss
  const bossLocked = !allNpcsDefeated() && !state.boss.defeated;
  const bossEl = document.createElement("div");
  bossEl.className = "entity-token entity-boss" +
    (state.boss.defeated ? " defeated" : "") +
    (bossLocked ? " locked-marker" : "");
  bossEl.style.transform = `translate(${state.boss.x * cs}px, ${state.boss.y * cs}px)`;
  bossEl.title = state.boss.name;

  const bossImg = document.createElement("img");
  bossImg.src = state.boss.img;
  bossImg.alt = state.boss.name;
  bossEl.appendChild(bossImg);

  if (state.boss.defeated) {
    const skull = document.createElement("div");
    skull.style.cssText = `
      position:absolute; top:2px; left:2px; right:2px;
      font-size:1.2rem; text-align:center; text-shadow:0 2px 4px black;
    `;
    skull.textContent = "💀";
    bossEl.appendChild(skull);
  }

  grid.appendChild(bossEl);

  // Player
  const playerEl = document.createElement("div");
  playerEl.className = "entity-token entity-player";
  playerEl.id = "player-token";
  playerEl.style.transform = `translate(${state.playerPos.x * cs}px, ${state.playerPos.y * cs}px)`;
  playerEl.title = "Kamu";

  const heroImg = document.createElement("img");
  heroImg.src = CHARACTERS.hero.img;
  heroImg.alt = "Hero";
  heroImg.id = "player-token-img";
  playerEl.appendChild(heroImg);

  grid.appendChild(playerEl);
}

/**
 * Update hanya posisi (transform) token player yang sudah ada di DOM,
 * tanpa membuat ulang elemennya — supaya transisi CSS (transition:
 * transform) benar-benar terlihat sebagai gerakan yang meluncur halus
 * dari satu kotak ke kotak berikutnya, bukan "loncat" (teleport).
 */
function updatePlayerToken() {
  const playerEl = document.getElementById("player-token");
  if (!playerEl) return;
  const cs = getCellSizePx();
  const flip = state.playerFacing === -1 ? " scaleX(-1)" : "";
  playerEl.style.transform =
    `translate(${state.playerPos.x * cs}px, ${state.playerPos.y * cs}px)${flip}`;
}

/* ---------------------------------------------------------
   8. TOAST MESSAGE
   --------------------------------------------------------- */
let toastTimer = null;
function showToast(message, duration = 2500) {
  const el = document.getElementById("toast-message");
  el.textContent = message;
  el.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.add("hidden"), duration);
}

/* ---------------------------------------------------------
   9. PLAYER MOVEMENT & INTERACTION
   Gerakan bebas (free movement) — bukan lompat per kotak.
   Posisi player disimpan sebagai koordinat pecahan (float)
   dalam satuan sel, digerakkan tiap frame lewat game loop
   (requestAnimationFrame) selama tombol arah ditekan.
   Tabrakan (collision) dicek berbasis area kotak kecil di
   sekitar player, bukan kecocokan koordinat bulat.
   --------------------------------------------------------- */

const PLAYER_SPEED = 4.2;           // kecepatan gerak, dalam satuan sel/detik
const PLAYER_COLLIDE_INSET = 0.16;  // "bantalan" collision box player dari tepi sel (0..0.5)

function isAnyModalOpen() {
  return (
    !document.getElementById("dialog-modal").classList.contains("hidden") ||
    !document.getElementById("battle-modal").classList.contains("hidden") ||
    !document.getElementById("floor-complete-screen").classList.contains("hidden") ||
    !document.getElementById("game-over-screen").classList.contains("hidden") ||
    !document.getElementById("game-clear-screen").classList.contains("hidden")
  );
}

function isMovementActive() {
  return (
    document.getElementById("game-screen").classList.contains("active-screen") &&
    !state.inBattle && !state.inDialog && !isAnyModalOpen()
  );
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

/** Apakah kotak player (di posisi x,y satuan sel) menabrak dinding? */
function collidesWithWalls(x, y) {
  const left = x + PLAYER_COLLIDE_INSET;
  const top = y + PLAYER_COLLIDE_INSET;
  const right = x + 1 - PLAYER_COLLIDE_INSET;
  const bottom = y + 1 - PLAYER_COLLIDE_INSET;

  const minCellX = Math.floor(left);
  const maxCellX = Math.floor(right - 0.001);
  const minCellY = Math.floor(top);
  const maxCellY = Math.floor(bottom - 0.001);

  for (let cy = minCellY; cy <= maxCellY; cy++) {
    for (let cx = minCellX; cx <= maxCellX; cx++) {
      if (WALLS.has(`${cx},${cy}`)) return true;
    }
  }
  return false;
}

/** Apakah kotak player (di posisi x,y) menabrak sel (cellX,cellY)? */
function boxOverlapsCell(x, y, cellX, cellY) {
  const left = x + PLAYER_COLLIDE_INSET;
  const top = y + PLAYER_COLLIDE_INSET;
  const right = x + 1 - PLAYER_COLLIDE_INSET;
  const bottom = y + 1 - PLAYER_COLLIDE_INSET;
  return right > cellX && left < cellX + 1 && bottom > cellY && top < cellY + 1;
}

/** Cari NPC/boss hidup yang bertabrakan dengan kotak player di posisi x,y. */
function findBlockingEntity(x, y) {
  for (const npc of state.npcs) {
    if (!npc.defeated && boxOverlapsCell(x, y, npc.x, npc.y)) {
      return { type: "npc", entity: npc };
    }
  }
  if (state.boss && !state.boss.defeated && boxOverlapsCell(x, y, state.boss.x, state.boss.y)) {
    return { type: "boss", entity: state.boss };
  }
  return null;
}

let lastBossLockedToastAt = 0;
function notifyBossLocked() {
  const now = Date.now();
  if (now - lastBossLockedToastAt > 2500) {
    showToast("🔒 Boss Room masih terkunci! Kalahkan semua monster dulu.");
    lastBossLockedToastAt = now;
  }
}

/** Ditabrak/didekati player: buka dialog, atau tolak kalau boss masih terkunci. */
function triggerEntityBump(hit) {
  if (hit.type === "npc") {
    startDialog(hit.entity, "npc");
  } else if (hit.type === "boss") {
    if (!allNpcsDefeated()) {
      notifyBossLocked();
    } else {
      startDialog(hit.entity, "boss");
    }
  }
}

/**
 * Gerakkan player secara kontinu sejauh (dx, dy) satuan sel.
 * Sumbu X dan Y diselesaikan terpisah supaya player bisa
 * "meluncur" menyusuri dinding, bukan langsung berhenti total
 * saat menabrak di salah satu sumbu.
 */
function moveContinuous(dx, dy) {
  if (dx !== 0) {
    const nx = clamp(state.playerPos.x + dx, 0, GRID_COLS - 1);
    if (!collidesWithWalls(nx, state.playerPos.y)) {
      const hit = findBlockingEntity(nx, state.playerPos.y);
      if (hit) {
        triggerEntityBump(hit);
      } else {
        state.playerPos.x = nx;
      }
    }
    state.playerFacing = dx > 0 ? 1 : -1;
  }

  if (dy !== 0 && !state.inDialog && !state.inBattle) {
    const ny = clamp(state.playerPos.y + dy, 0, GRID_ROWS - 1);
    if (!collidesWithWalls(state.playerPos.x, ny)) {
      const hit = findBlockingEntity(state.playerPos.x, ny);
      if (hit) {
        triggerEntityBump(hit);
      } else {
        state.playerPos.y = ny;
      }
    }
  }

  updatePlayerToken();
}

/* ---- Input: tombol yang sedang ditekan (keyboard & D-pad) ---- */
const pressedDirections = new Set(); // isi: "up" | "down" | "left" | "right"

function setDirectionActive(dir, active) {
  if (active) pressedDirections.add(dir);
  else pressedDirections.delete(dir);
}

// Keyboard controls (tekan & tahan = jalan terus, seperti game pada umumnya)
document.addEventListener("keydown", e => {
  const gameActive = document.getElementById("game-screen").classList.contains("active-screen");
  if (!gameActive) return;

  switch (e.key) {
    case "w": case "W": case "ArrowUp":    e.preventDefault(); setDirectionActive("up", true);    break;
    case "s": case "S": case "ArrowDown":  e.preventDefault(); setDirectionActive("down", true);  break;
    case "a": case "A": case "ArrowLeft":  e.preventDefault(); setDirectionActive("left", true);   break;
    case "d": case "D": case "ArrowRight": e.preventDefault(); setDirectionActive("right", true);  break;
    case " ": case "Enter":
      if (!e.repeat) { e.preventDefault(); tryInteractNearest(); }
      break;
  }
});

document.addEventListener("keyup", e => {
  switch (e.key) {
    case "w": case "W": case "ArrowUp":    setDirectionActive("up", false);    break;
    case "s": case "S": case "ArrowDown":  setDirectionActive("down", false);  break;
    case "a": case "A": case "ArrowLeft":  setDirectionActive("left", false);  break;
    case "d": case "D": case "ArrowRight": setDirectionActive("right", false); break;
  }
});

// Kalau window/tab kehilangan fokus, lepas semua tombol arah biar player tidak "nyangkut" jalan terus.
window.addEventListener("blur", () => pressedDirections.clear());

/** Pasang tombol D-pad supaya bisa ditekan-tahan (mouse & sentuhan), bukan cuma sekali klik. */
function wireHoldButton(elId, onPress, onRelease) {
  const el = document.getElementById(elId);
  if (!el) return;
  const start = e => { e.preventDefault(); onPress(); };
  const end = e => { e.preventDefault(); onRelease(); };
  el.addEventListener("mousedown", start);
  el.addEventListener("touchstart", start, { passive: false });
  el.addEventListener("mouseup", end);
  el.addEventListener("mouseleave", end);
  el.addEventListener("touchend", end);
  el.addEventListener("touchcancel", end);
}

/* ---- Game loop: dijalankan terus-menerus lewat requestAnimationFrame ---- */
// Waktu akselerasi & deselerasi DIPISAH sengaja:
// - ACCEL agak "empuk" biar start tidak nyentak (masih terasa smooth).
// - DECEL jauh lebih cepat, supaya begitu tombol dilepas, karakter langsung
//   berhenti (tidak "meluncur"/nge-drag) — ini yang bikin gerakan terasa
//   RINGAN, bukan berat, sambil tetap smooth karena tetap diinterpolasi.
const PLAYER_ACCEL_TIME = 0.07; // makin kecil, makin cepat "ngebut" ke top speed
const PLAYER_DECEL_TIME = 0.035; // makin kecil, makin cepat berhenti pas tombol dilepas

let lastFrameTime = null;
function gameLoopStep(timestamp) {
  if (lastFrameTime === null) lastFrameTime = timestamp;
  const dt = Math.min((timestamp - lastFrameTime) / 1000, 0.05); // cap dt biar tidak "loncat" saat tab sempat freeze
  lastFrameTime = timestamp;

  let targetVX = 0, targetVY = 0;

  if (isMovementActive()) {
    let dx = 0, dy = 0;
    if (pressedDirections.has("up")) dy -= 1;
    if (pressedDirections.has("down")) dy += 1;
    if (pressedDirections.has("left")) dx -= 1;
    if (pressedDirections.has("right")) dx += 1;

    if (dx !== 0 || dy !== 0) {
      const len = Math.hypot(dx, dy) || 1;
      targetVX = (dx / len) * PLAYER_SPEED;
      targetVY = (dy / len) * PLAYER_SPEED;
    }
  }

  // Interpolasi eksponensial menuju kecepatan target — hasilnya percepatan
  // & perlambatan yang halus (bukan langsung penuh/berhenti mendadak),
  // dan tetap konsisten di frame rate berapa pun (tidak "gopoh" di device lemot).
  // Tiap sumbu (x/y) pakai tau sendiri: accel kalau makin menjauh dari 0,
  // decel kalau makin mendekati 0 (termasuk saat tombol dilepas).
  const tauX = Math.abs(targetVX) > Math.abs(state.playerVelocity.x) ? PLAYER_ACCEL_TIME : PLAYER_DECEL_TIME;
  const tauY = Math.abs(targetVY) > Math.abs(state.playerVelocity.y) ? PLAYER_ACCEL_TIME : PLAYER_DECEL_TIME;
  const smoothingX = 1 - Math.exp(-dt / tauX);
  const smoothingY = 1 - Math.exp(-dt / tauY);
  state.playerVelocity.x += (targetVX - state.playerVelocity.x) * smoothingX;
  state.playerVelocity.y += (targetVY - state.playerVelocity.y) * smoothingY;

  // Bulatkan kecepatan sangat kecil jadi 0 biar tidak "merayap" terus-menerus.
  if (Math.abs(state.playerVelocity.x) < 0.001) state.playerVelocity.x = 0;
  if (Math.abs(state.playerVelocity.y) < 0.001) state.playerVelocity.y = 0;

  if (state.playerVelocity.x !== 0 || state.playerVelocity.y !== 0) {
    moveContinuous(state.playerVelocity.x * dt, state.playerVelocity.y * dt);
  }

  requestAnimationFrame(gameLoopStep);
}
requestAnimationFrame(gameLoopStep);

function tryInteractNearest() {
  if (state.inBattle || state.inDialog || isAnyModalOpen()) return;

  const centerX = state.playerPos.x + 0.5;
  const centerY = state.playerPos.y + 0.5;
  const RANGE = 0.95; // jangkauan interaksi, dalam satuan sel

  let nearest = null;
  let nearestDist = Infinity;

  state.npcs.forEach(npc => {
    if (npc.defeated) return;
    const d = Math.hypot((npc.x + 0.5) - centerX, (npc.y + 0.5) - centerY);
    if (d <= RANGE && d < nearestDist) { nearestDist = d; nearest = { type: "npc", entity: npc }; }
  });

  if (state.boss && !state.boss.defeated) {
    const d = Math.hypot((state.boss.x + 0.5) - centerX, (state.boss.y + 0.5) - centerY);
    if (d <= RANGE && d < nearestDist) { nearestDist = d; nearest = { type: "boss", entity: state.boss }; }
  }

  if (!nearest) return;
  triggerEntityBump(nearest);
}

// D-Pad mobile
window.addEventListener("resize", () => {
  refreshCellSizeCache();
  if (document.getElementById("game-screen").classList.contains("active-screen")) {
    renderEntities();
  }
});

/* ---------------------------------------------------------
   10. DIALOG SYSTEM
   --------------------------------------------------------- */
function startDialog(entity, type) {
  pressedDirections.clear();
  state.inDialog = true;
  state.dialog = { entity, type, dialogIndex: 0 };

  const char = CHARACTERS[entity.charKey];
  const dialogues = char.dialogues;

  // Setup dialog UI
  document.getElementById("dialog-enemy-img").src = entity.img;
  document.getElementById("dialog-enemy-img").alt = entity.name;
  document.getElementById("dialog-enemy-name").textContent = entity.name;
  document.getElementById("dialog-text").textContent = dialogues[0];

  // Update HP bars in dialog
  updateDialogHpBars();

  // Show first dialogue
  const nextBtn = document.getElementById("btn-dialog-next");
  const fightBtn = document.getElementById("btn-dialog-fight");

  if (dialogues.length <= 1) {
    nextBtn.classList.add("hidden");
    fightBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.remove("hidden");
    fightBtn.classList.add("hidden");
  }

  document.getElementById("dialog-modal").classList.remove("hidden");
}

function updateDialogHpBars() {
  const entity = state.dialog.entity;
  const playerPct = (Math.max(state.playerHP, 0) / state.maxHP) * 100;
  document.getElementById("dialog-player-hp-bar").style.width = `${playerPct}%`;

  const enemyPct = (Math.max(entity.hp, 0) / entity.maxHp) * 100;
  document.getElementById("dialog-enemy-hp-bar").style.width = `${enemyPct}%`;
}

function advanceDialog() {
  const { entity, type } = state.dialog;
  const char = CHARACTERS[entity.charKey];
  const dialogues = char.dialogues;

  state.dialog.dialogIndex++;

  const nextBtn = document.getElementById("btn-dialog-next");
  const fightBtn = document.getElementById("btn-dialog-fight");

  if (state.dialog.dialogIndex >= dialogues.length - 1) {
    // Last dialogue
    document.getElementById("dialog-text").textContent = dialogues[state.dialog.dialogIndex];
    nextBtn.classList.add("hidden");
    fightBtn.classList.remove("hidden");
  } else {
    document.getElementById("dialog-text").textContent = dialogues[state.dialog.dialogIndex];
  }
}

function startFight() {
  const { entity, type } = state.dialog;
  document.getElementById("dialog-modal").classList.add("hidden");
  state.inDialog = false;
  startBattle(entity, type);
}

/* ---------------------------------------------------------
   11. BATTLE SYSTEM
   --------------------------------------------------------- */
function getFloorQuestions() {
  return questionBank[state.currentFloor] || questionBank[1];
}

function startBattle(entity, type) {
  state.inBattle = true;
  state.battle = { entity, type };
  state.questionCount = 0;

  const topic = FLOOR_TOPICS[state.currentFloor] || "PLSV";

  // Setup battle UI
  document.getElementById("battle-topic-label").textContent = `📐 ${topic}`;
  document.getElementById("battle-vs-title").textContent = entity.name;
  document.getElementById("battle-floor-label").textContent = `Lantai ${state.currentFloor}`;

  document.getElementById("battle-enemy-sprite").src = entity.img;
  document.getElementById("battle-enemy-sprite").alt = entity.name;
  document.getElementById("battle-enemy-name-under").textContent = entity.name;

  document.getElementById("battle-feedback").textContent = "";
  document.getElementById("battle-feedback").className = "battle-feedback";
  document.getElementById("battle-explanation").classList.add("hidden");
  document.getElementById("battle-explanation").textContent = "";

  updateBattleHpBars();
  document.getElementById("battle-modal").classList.remove("hidden");
  loadQuestion();
}

function updateBattleHpBars() {
  const { entity } = state.battle;

  const playerPct = (Math.max(state.playerHP, 0) / state.maxHP) * 100;
  document.getElementById("battle-player-hp-fill").style.width = `${playerPct}%`;
  document.getElementById("battle-player-hp-text").textContent =
    `${Math.max(state.playerHP, 0)} / ${state.maxHP}`;

  const enemyPct = (Math.max(entity.hp, 0) / entity.maxHp) * 100;
  document.getElementById("battle-enemy-hp-fill").style.width = `${enemyPct}%`;
  document.getElementById("battle-enemy-hp-text").textContent =
    `${Math.max(entity.hp, 0)} / ${entity.maxHp}`;
}

function loadQuestion() {
  const feedbackEl = document.getElementById("battle-feedback");
  feedbackEl.textContent = "";
  feedbackEl.className = "battle-feedback";
  document.getElementById("battle-explanation").classList.add("hidden");

  state.questionCount++;
  document.getElementById("question-number-badge").textContent = `Soal ${state.questionCount}`;

  const pool = getFloorQuestions();
  const q = pool[Math.floor(Math.random() * pool.length)];
  state.currentQuestion = q;

  document.getElementById("question-text").textContent = q.question;

  const optionsContainer = document.getElementById("answer-options");
  optionsContainer.innerHTML = "";

  const labels = ["A", "B", "C", "D"];
  const colorClasses = ["answer-btn-a", "answer-btn-b", "answer-btn-c", "answer-btn-d"];

  q.options.forEach((optionText, idx) => {
    const btn = document.createElement("button");
    btn.className = `answer-btn ${colorClasses[idx]}`;
    btn.id = `answer-btn-${idx}`;

    const labelSpan = document.createElement("span");
    labelSpan.className = "option-label";
    labelSpan.textContent = labels[idx] + ".";

    const textSpan = document.createElement("span");
    textSpan.textContent = optionText;

    btn.appendChild(labelSpan);
    btn.appendChild(textSpan);
    btn.addEventListener("click", () => handleAnswer(idx, btn));
    optionsContainer.appendChild(btn);
  });
}

function handleAnswer(selectedIdx, btnEl) {
  if (!state.inBattle) return;

  const q = state.currentQuestion;
  const { entity } = state.battle;
  const allButtons = document.querySelectorAll(".answer-btn");
  allButtons.forEach(b => (b.disabled = true));

  const feedbackEl = document.getElementById("battle-feedback");
  const explanationEl = document.getElementById("battle-explanation");
  const enemyFrame = document.getElementById("battle-enemy-sprite").parentElement;
  const playerFrame = document.getElementById("battle-player-sprite").parentElement;

  if (selectedIdx === q.answer) {
    // ---- Jawaban BENAR ----
    btnEl.classList.add("correct-choice");
    feedbackEl.textContent = "✓ Benar!";
    feedbackEl.className = "battle-feedback feedback-correct";

    if (q.explanation) {
      explanationEl.textContent = q.explanation;
      explanationEl.classList.remove("hidden");
    }

    entity.hp -= 1;

    // --- Pokémon-style: Player attacks ---
    // 1. Player sprite lunges forward
    playerFrame.classList.add("attacked");
    setTimeout(() => playerFrame.classList.remove("attacked"), 450);

    // 2. Projectile fires after short delay
    setTimeout(() => triggerPlayerAttackFX(entity), 150);

    // 3. Enemy takes hit
    setTimeout(() => {
      enemyFrame.classList.add("hit");
      setTimeout(() => enemyFrame.classList.remove("hit"), 400);
    }, 420);

    // 4. Screen green flash on correct
    triggerCorrectFlash();

    updateBattleHpBars();

    if (entity.hp <= 0) {
      entity.defeated = true;
      state.floorScore += entity.reward;
      state.totalScore += entity.reward;
      updateHUD();
      setTimeout(() => finishBattle(), 1200);
    } else {
      setTimeout(() => loadQuestion(), 1500);
    }

  } else {
    // ---- Jawaban SALAH ----
    btnEl.classList.add("wrong-choice");
    const correctBtn = document.getElementById(`answer-btn-${q.answer}`);
    if (correctBtn) correctBtn.classList.add("correct-choice");
    feedbackEl.textContent = "✗ Salah!";
    feedbackEl.className = "battle-feedback feedback-wrong";

    if (q.explanation) {
      explanationEl.textContent = "Jawaban: " + q.explanation;
      explanationEl.classList.remove("hidden");
    }

    state.playerHP -= 1;

    // --- Pokémon-style: Enemy attacks ---
    // 1. Enemy projectile fires at player
    setTimeout(() => triggerEnemyAttackFX(entity), 100);

    // 2. Player takes hit with shake
    setTimeout(() => {
      playerFrame.classList.add("hit");
      setTimeout(() => playerFrame.classList.remove("hit"), 400);
    }, 380);

    // 3. Screen red flash on damage
    triggerDamageFlash();

    updateBattleHpBars();
    updateHUD();

    if (state.playerHP <= 0) {
      setTimeout(() => finishBattle(), 1300);
    } else {
      setTimeout(() => loadQuestion(), 1700);
    }
  }
}

/* ---------------------------------------------------------
   11b. POKÉMON-STYLE ATTACK EFFECTS
   --------------------------------------------------------- */

/**
 * Trigger player-attacks-enemy FX:
 * A projectile emoji flies from player side to enemy side,
 * then a burst explosion appears on impact.
 */
function triggerPlayerAttackFX(entity) {
  const overlay = document.getElementById("attack-fx-overlay");
  if (!overlay) return;

  const char = CHARACTERS[entity.charKey];
  const emoji = char.fxEmoji || "📖";

  // Projectile
  const proj = document.createElement("div");
  proj.className = "fx-player-attack";
  proj.textContent = emoji;
  proj.style.filter = `drop-shadow(0 0 12px ${char.fxColor || 'rgba(100,200,255,0.9)'})`;
  overlay.appendChild(proj);

  // Impact burst
  const burst = document.createElement("div");
  burst.className = "fx-impact-burst";
  burst.textContent = "✨";
  burst.style.animationDelay = "0.35s";
  overlay.appendChild(burst);

  // Cleanup
  setTimeout(() => {
    proj.remove();
    burst.remove();
  }, 750);
}

/**
 * Trigger enemy-attacks-player FX:
 * An enemy projectile flies from right to left,
 * then a red flash covers the player side.
 */
function triggerEnemyAttackFX(entity) {
  const overlay = document.getElementById("attack-fx-overlay");
  if (!overlay) return;

  const char = CHARACTERS[entity.charKey];
  // Enemy bolt (reverse direction)
  const bolt = document.createElement("div");
  bolt.className = "fx-enemy-attack";
  // Pick a menacing emoji based on enemy
  const enemyEmojis = { npc1: "💢", npc2: "🌀", npc3: "⚡", boss: "💀" };
  bolt.textContent = enemyEmojis[entity.charKey] || "💢";
  bolt.style.filter = `drop-shadow(0 0 10px ${char.fxColor || 'rgba(255,60,60,0.9)'})`;
  overlay.appendChild(bolt);

  // Player-side hit flash
  const flash = document.createElement("div");
  flash.className = "fx-player-hit-flash";
  flash.style.animationDelay = "0.3s";
  overlay.appendChild(flash);

  // Cleanup
  setTimeout(() => {
    bolt.remove();
    flash.remove();
  }, 750);
}

/** Brief green screen flash on correct answer */
function triggerCorrectFlash() {
  const el = document.createElement("div");
  el.className = "fx-correct-flash";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 500);
}

/** Brief red screen flash on taking damage */
function triggerDamageFlash() {
  const el = document.createElement("div");
  el.className = "fx-screen-flash";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 450);
}

function finishBattle() {
  const { type, entity } = state.battle;

  if (state.playerHP <= 0) {
    state.inBattle = false;
    document.getElementById("battle-modal").classList.add("hidden");
    triggerGameOver();
    return;
  }

  state.inBattle = false;
  document.getElementById("battle-modal").classList.add("hidden");
  renderEntities();
  updateHUD();

  if (type === "boss" && entity.defeated) {
    // Check if this is the last floor
    if (state.currentFloor >= MAX_FLOOR) {
      setTimeout(() => showGameClear(), 400);
    } else {
      setTimeout(() => showFloorComplete(), 400);
    }
  } else if (type === "npc" && allNpcsDefeated()) {
    showToast("🔓 Semua monster dikalahkan! Boss Room telah terbuka!", 3000);
  } else if (type === "npc") {
    const remaining = state.npcs.filter(n => !n.defeated).length;
    showToast(`⚔️ ${entity.name} dikalahkan! Tersisa ${remaining} monster lagi.`);
  }
}

/* ---------------------------------------------------------
   12. FLOOR COMPLETE
   --------------------------------------------------------- */
function showFloorComplete() {
  const topic = FLOOR_TOPICS[state.currentFloor] || "?  ";
  document.getElementById("result-floor-num").textContent = state.currentFloor;
  document.getElementById("result-topic").textContent = topic;
  document.getElementById("result-floor-score").textContent = `${state.floorScore} / 100`;
  document.getElementById("result-total-score").textContent = state.totalScore;
  document.getElementById("result-npc-progress").textContent =
    `${state.npcs.filter(n => n.defeated).length} / 3`;
  document.getElementById("result-boss-status").textContent =
    state.boss.defeated ? "DIKALAHKAN ✓" : "BELUM";
  document.getElementById("floor-complete-screen").classList.remove("hidden");
}

function goToNextFloor() {
  document.getElementById("floor-complete-screen").classList.add("hidden");
  state.currentFloor += 1;
  state.floorScore = 0;
  resetFloorEntities();
  renderDungeonGrid();
  renderEntities();
  updateHUD();
  showToast(`🗺️ Lantai ${state.currentFloor}: ${FLOOR_TOPICS[state.currentFloor]} — Selamat datang!`, 3000);
}

/* ---------------------------------------------------------
   13. GAME CLEAR
   --------------------------------------------------------- */
async function showGameClear() {
  pauseTimer();

  document.getElementById("clear-total-score").textContent = state.totalScore;
  document.getElementById("clear-total-time").textContent = formatTime(state.elapsedSeconds);
  document.getElementById("game-clear-screen").classList.remove("hidden");

  const statusEl = document.getElementById("clear-leaderboard-status");
  statusEl.textContent = "⏳ Menyimpan skor ke leaderboard...";
  statusEl.className = "clear-leaderboard-status";

  const entry = {
    nama: state.player.nama || "Tanpa Nama",
    kelas: state.player.kelas || "-",
    nis: state.player.nis || "-",
    score: state.totalScore,
    timeSeconds: Math.floor(state.elapsedSeconds),
    timeLabel: formatTime(state.elapsedSeconds),
    playedAt: Date.now()
  };

  const result = await submitLeaderboardEntry(entry);
  if (result.mode === "remote") {
    statusEl.textContent = "✅ Skor kamu tersimpan di leaderboard!";
    statusEl.classList.add("status-ok");
  } else if (result.mode === "local" || result.mode === "local-fallback") {
    statusEl.textContent = "💾 Skor tersimpan di device ini (leaderboard online belum aktif).";
    statusEl.classList.add("status-warn");
  } else {
    statusEl.textContent = "⚠️ Gagal menyimpan skor. Periksa koneksi internetmu.";
    statusEl.classList.add("status-warn");
  }
}

/* ---------------------------------------------------------
   14. GAME OVER / RETRY / MAIN MENU
   --------------------------------------------------------- */
function triggerGameOver() {
  pauseTimer();
  document.getElementById("gameover-floor-num").textContent = state.currentFloor;
  document.getElementById("gameover-floor-score").textContent = `${state.floorScore} / 100`;
  document.getElementById("gameover-total-score").textContent = state.totalScore;
  document.getElementById("game-over-screen").classList.remove("hidden");
}

function retryFloor() {
  document.getElementById("game-over-screen").classList.add("hidden");
  state.totalScore = Math.max(0, state.totalScore - state.floorScore);
  state.floorScore = 0;
  resetFloorEntities();
  renderDungeonGrid();
  renderEntities();
  updateHUD();
  resumeTimer();
  showToast("🔄 Lantai diulang. Semangat!", 2000);
}

function resetGame() {
  pauseTimer();
  hideAllModals();
  state.currentFloor = 1;
  state.totalScore = 0;
  state.floorScore = 0;
  resetFloorEntities();
  showScreen("main-menu-screen");
}

function startGame() {
  state.currentFloor = 1;
  state.totalScore = 0;
  state.floorScore = 0;
  resetFloorEntities();
  showScreen("game-screen");
  renderDungeonGrid();
  renderEntities();
  updateHUD();
  startTimer();
  setTimeout(() => {
    showToast(`🗺️ Lantai 1: ${FLOOR_TOPICS[1]} — Kalahkan 3 monster untuk membuka Boss Room!`, 3500);
  }, 300);
}

/* ---------------------------------------------------------
   15. EVENT WIRING
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // Terapkan sprite karakter yang tersimpan (atau default) sejak awal
  applyPlayerCharacterSprites();

  // Main menu
  document.getElementById("btn-start-game").addEventListener("click", () => openBiodataScreen("start"));
  document.getElementById("btn-how-to-play").addEventListener("click", () => showScreen("how-to-play-screen"));
  document.getElementById("btn-about").addEventListener("click", () => showScreen("about-screen"));
  document.getElementById("btn-biodata").addEventListener("click", () => openBiodataScreen("view"));
  document.getElementById("btn-character-select").addEventListener("click", openCharacterSelectScreen);
  document.getElementById("btn-leaderboard").addEventListener("click", openLeaderboardScreen);
  document.getElementById("btn-leaderboard-refresh").addEventListener("click", openLeaderboardScreen);

  // Biodata form
  document.getElementById("biodata-form").addEventListener("submit", handleBiodataSubmit);

  // Back buttons
  document.querySelectorAll(".btn-back").forEach(btn => {
    btn.addEventListener("click", () => showScreen(btn.dataset.back || "main-menu-screen"));
  });

  // HUD quit
  document.getElementById("btn-quit-to-menu").addEventListener("click", () => {
    pressedDirections.clear();
    if (confirm("Kembali ke Menu Utama? Progress lantai ini akan hilang.")) {
      resetGame();
    }
  });

  // Dialog
  document.getElementById("btn-dialog-next").addEventListener("click", advanceDialog);
  document.getElementById("btn-dialog-fight").addEventListener("click", startFight);

  // Floor complete
  document.getElementById("btn-next-floor").addEventListener("click", goToNextFloor);

  // Game clear
  document.getElementById("btn-play-again").addEventListener("click", () => {
    document.getElementById("game-clear-screen").classList.add("hidden");
    startGame();
  });
  document.getElementById("btn-clear-menu").addEventListener("click", resetGame);

  // Game over
  document.getElementById("btn-retry").addEventListener("click", retryFloor);
  document.getElementById("btn-gameover-menu").addEventListener("click", resetGame);

  // D-Pad
  wireHoldButton("dpad-up", () => setDirectionActive("up", true), () => setDirectionActive("up", false));
  wireHoldButton("dpad-down", () => setDirectionActive("down", true), () => setDirectionActive("down", false));
  wireHoldButton("dpad-left", () => setDirectionActive("left", true), () => setDirectionActive("left", false));
  wireHoldButton("dpad-right", () => setDirectionActive("right", true), () => setDirectionActive("right", false));
  document.getElementById("dpad-center").addEventListener("click", tryInteractNearest);

  /* ---------------------------------------------------------
   9b. VIRTUAL JOYSTICK (Mobile Touch Controls)
   Menggerakkan player dengan analog stick. Arah stick
   dikonversi menjadi pressedDirections (up/down/left/right)
   supaya terintegrasi dengan sistem gerak yang sudah ada
   (game loop di section 9).
   --------------------------------------------------------- */

const JOYSTICK_DEADZONE = 0.28;    // zona mati (0..1) agar tidak goyang saat jari diam
const JOYSTICK_MAX_RADIUS = 56;    // radius maksimum knob dari titik tengah (px)

let joystickTouchId = null;        // lacak ID sentuhan (biar multi-touch aman)
let joystickCenter = { x: 0, y: 0 };
let joystickActive = false;

function setupJoystick() {
  const zone = document.getElementById("joystick-zone");
  const base = document.getElementById("joystick-base");
  const knob = document.getElementById("joystick-knob");
  if (!zone || !base || !knob) return;

  /** Hitung posisi tengah base (di-cache saat mulai sentuh) */
  function computeCenter() {
    const rect = base.getBoundingClientRect();
    joystickCenter.x = rect.left + rect.width / 2;
    joystickCenter.y = rect.top + rect.height / 2;
  }

  /** Reset knob ke tengah & lepas semua arah */
  function releaseJoystick() {
    joystickActive = false;
    joystickTouchId = null;
    knob.style.transform = "translate(-50%, -50%)";
    base.classList.remove("active");
    pressedDirections.clear();   // lepas semua arah
  }

  /** Update arah berdasarkan posisi jari relatif ke center */
  function updateJoystick(clientX, clientY) {
    let dx = clientX - joystickCenter.x;
    let dy = clientY - joystickCenter.y;

    const dist = Math.hypot(dx, dy);
    const clampedDist = Math.min(dist, JOYSTICK_MAX_RADIUS);
    const angle = Math.atan2(dy, dx);

    // Posisi knob (dibatasi radius)
    const kx = Math.cos(angle) * clampedDist;
    const ky = Math.sin(angle) * clampedDist;
    knob.style.transform =
      `translate(calc(-50% + ${kx}px), calc(-50% + ${ky}px))`;

    // Normalisasi -1..1
    const normX = clampedDist === 0 ? 0 : (Math.cos(angle) * clampedDist) / JOYSTICK_MAX_RADIUS;
    const normY = clampedDist === 0 ? 0 : (Math.sin(angle) * clampedDist) / JOYSTICK_MAX_RADIUS;

    // Terapkan deadzone
    const magnitude = Math.hypot(normX, normY);
    pressedDirections.clear();

    if (magnitude < JOYSTICK_DEADZONE) return; // di zona mati, tidak gerak

    // Konversi analog → 4 arah digital (8 arah dengan diagonal).
    // Gunakan threshold lebih kecil dari deadzone agar diagonal lancar.
    const threshold = 0.35;
    if (normY < -threshold) pressedDirections.add("up");
    if (normY >  threshold) pressedDirections.add("down");
    if (normX < -threshold) pressedDirections.add("left");
    if (normX >  threshold) pressedDirections.add("right");
  }

  /* --- Touch events --- */
  zone.addEventListener("touchstart", e => {
    if (joystickActive) return;       // sudah ada jari yang pegang
    const t = e.changedTouches[0];
    if (!t) return;
    e.preventDefault();

    joystickTouchId = t.identifier;
    joystickActive = true;
    computeCenter();
    base.classList.add("active");
    updateJoystick(t.clientX, t.clientY);
  }, { passive: false });

  zone.addEventListener("touchmove", e => {
    if (!joystickActive) return;
    e.preventDefault();
    for (const t of e.changedTouches) {
      if (t.identifier === joystickTouchId) {
        updateJoystick(t.clientX, t.clientY);
        break;
      }
    }
  }, { passive: false });

  const endTouch = e => {
    if (!joystickActive) return;
    for (const t of e.changedTouches) {
      if (t.identifier === joystickTouchId) {
        releaseJoystick();
        break;
      }
    }
  };
  zone.addEventListener("touchend", endTouch);
  zone.addEventListener("touchcancel", endTouch);

  /* --- Mouse fallback (untuk testing di desktop / device hybrid) --- */
  zone.addEventListener("mousedown", e => {
    if (joystickActive) return;
    e.preventDefault();
    joystickActive = true;
    computeCenter();
    base.classList.add("active");
    updateJoystick(e.clientX, e.clientY);
  });

  document.addEventListener("mousemove", e => {
    if (!joystickActive || joystickTouchId !== null) return; // jangan campur touch & mouse
    updateJoystick(e.clientX, e.clientY);
  });

  document.addEventListener("mouseup", () => {
    if (!joystickActive || joystickTouchId !== null) return;
    releaseJoystick();
  });

  /* --- Update center saat window resize / scroll (biar akurat) --- */
  window.addEventListener("resize", () => {
    if (joystickActive) computeCenter();
  });

  /* --- Tombol Interaksi (SPACE) mobile --- */
  const btnInteract = document.getElementById("btn-interact-mobile");
  if (btnInteract) {
    btnInteract.addEventListener("click", e => {
      e.preventDefault();
      tryInteractNearest();
    });
    // Cegah double-tap zoom di iOS
    btnInteract.addEventListener("touchstart", e => e.preventDefault(), { passive: false });
  }
}

// Panggil saat DOM siap — gabungkan dengan listener DOMContentLoaded yang sudah ada
document.addEventListener("DOMContentLoaded", setupJoystick);

  // Init
  resetFloorEntities();
  updateHUD();
});
