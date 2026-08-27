/* =========================================================
   ULAR TANGGA BAHASA INDONESIA
   SCRIPT.JS — FINAL
========================================================= */


/* =========================================================
   KONFIGURASI PERMAINAN
========================================================= */

const GAME_CONFIG = {

  MIN_PLAYERS: 2,
  MAX_PLAYERS: 7,

  START_POSITION: 1,
  FINISH_POSITION: 100,

  COLLISION_BACK: 3,

  /* Posisi tangga.
     key   = posisi bawah
     value = posisi atas
  */

  LADDERS: {
    3: 22,
    8: 30,
    15: 44,
    21: 42,
    28: 55,
    36: 57,
    43: 76,
    50: 69,
    61: 82,
    71: 92,
    78: 97
  },

  /* Posisi ular.
     key   = kepala ular
     value = ekor ular
  */

  SNAKES: {
    98: 79,
    95: 75,
    91: 52,
    87: 66,
    83: 58,
    74: 53,
    67: 45,
    63: 39,
    49: 18,
    32: 10,
    27: 5
  },

  /* Petak bintang.
     Pemain yang berdiri di sini aman
     dari aturan tabrakan.
  */

  STARS: [
    6,
    19,
    34,
    47,
    60,
    73,
    86,
    99
  ],

  /* Petak tantangan lucu */

  FUN_TILES: [
    11,
    17,
    25,
    38,
    46,
    56,
    64,
    72,
    81,
    89
  ],

  /* Emoji pion */

  PLAYER_EMOJIS: [
    "🔴",
    "🔵",
    "🟢",
    "🟡",
    "🟣",
    "🟠",
    "🩷"
  ],

  /* Emoji tambahan */

  PLAYER_ICONS: [
    "🚀",
    "🐼",
    "🐸",
    "🦊",
    "🐯",
    "🐨",
    "🐰"
  ]

};


/* =========================================================
   BANK SOAL
   Materi:
   - Fungsi kalimat
   - Kalimat utama
   - Kalimat penjelas
   - Paragraf deduktif
   - Paragraf induktif
   - Paragraf campuran
========================================================= */

const QUESTIONS = [

  {
    question:
      "Apa yang dimaksud dengan fungsi kalimat dalam sebuah paragraf?",
    options: [
      "Peran sebuah kalimat dalam menyampaikan gagasan paragraf",
      "Jumlah kata yang terdapat dalam kalimat",
      "Panjang pendeknya sebuah paragraf",
      "Jumlah tanda baca dalam paragraf"
    ],
    answer: 0,
    explanation:
      "Fungsi kalimat berkaitan dengan peran kalimat dalam membangun dan menyampaikan gagasan sebuah paragraf."
  },

  {
    question:
      "Kalimat yang menjadi inti pembahasan sebuah paragraf disebut ...",
    options: [
      "Kalimat tanya",
      "Kalimat utama",
      "Kalimat perintah",
      "Kalimat seru"
    ],
    answer: 1,
    explanation:
      "Kalimat utama memuat gagasan pokok atau inti pembahasan paragraf."
  },

  {
    question:
      "Kalimat yang berfungsi menjelaskan atau mendukung kalimat utama disebut ...",
    options: [
      "Kalimat penjelas",
      "Kalimat utama",
      "Kalimat judul",
      "Kalimat pembuka"
    ],
    answer: 0,
    explanation:
      "Kalimat penjelas memberikan rincian, contoh, alasan, data, atau keterangan yang mendukung kalimat utama."
  },

  {
    question:
      "Ciri utama paragraf deduktif adalah ...",
    options: [
      "Gagasan utama berada di akhir paragraf",
      "Gagasan utama berada di tengah paragraf",
      "Gagasan utama berada di awal paragraf",
      "Tidak memiliki gagasan utama"
    ],
    answer: 2,
    explanation:
      "Paragraf deduktif menempatkan gagasan utama pada awal paragraf kemudian diikuti kalimat penjelas."
  },

  {
    question:
      "Ciri utama paragraf induktif adalah ...",
    options: [
      "Gagasan utama berada di awal",
      "Gagasan utama berada di akhir",
      "Semua kalimat merupakan gagasan utama",
      "Gagasan utama tidak dapat ditemukan"
    ],
    answer: 1,
    explanation:
      "Paragraf induktif menyajikan kalimat-kalimat penjelas terlebih dahulu kemudian diakhiri gagasan utama atau kesimpulan."
  },

  {
    question:
      "Paragraf campuran merupakan paragraf yang gagasan utamanya ...",
    options: [
      "Hanya berada di tengah",
      "Berada di awal dan ditegaskan kembali di akhir",
      "Hanya berada di akhir",
      "Tidak memiliki kalimat utama"
    ],
    answer: 1,
    explanation:
      "Paragraf campuran biasanya menyampaikan gagasan utama di awal dan menegaskannya kembali pada akhir paragraf."
  },

  {
    question:
      "Perhatikan paragraf berikut!\n\n'Olahraga secara teratur sangat bermanfaat bagi kesehatan tubuh. Olahraga dapat meningkatkan kebugaran. Selain itu, olahraga membantu menjaga berat badan dan memperkuat otot. Oleh karena itu, olahraga teratur perlu menjadi kebiasaan.'\n\nParagraf tersebut termasuk ...",
    options: [
      "Deduktif",
      "Induktif",
      "Naratif",
      "Deskriptif"
    ],
    answer: 0,
    explanation:
      "Gagasan utama terdapat pada awal paragraf dan ditegaskan dengan penjelasan setelahnya. Jadi, paragraf tersebut bersifat deduktif."
  },

  {
    question:
      "Perhatikan paragraf berikut!\n\n'Udara pagi terasa sejuk. Pepohonan menghasilkan oksigen dan membuat lingkungan terasa nyaman. Sinar matahari pagi juga membantu tubuh mendapatkan vitamin D. Jadi, suasana pagi memberikan banyak manfaat bagi kesehatan.'\n\nJenis paragraf tersebut adalah ...",
    options: [
      "Deduktif",
      "Induktif",
      "Campuran",
      "Persuasif"
    ],
    answer: 1,
    explanation:
      "Penjelasan diberikan terlebih dahulu dan kesimpulan atau gagasan utama berada di akhir."
  },

  {
    question:
      "Kalimat utama pada paragraf deduktif biasanya terletak ...",
    options: [
      "Pada awal paragraf",
      "Pada akhir paragraf",
      "Di antara dua paragraf",
      "Hanya dalam judul"
    ],
    answer: 0,
    explanation:
      "Paragraf deduktif dimulai dengan gagasan umum yang kemudian dijelaskan oleh kalimat-kalimat berikutnya."
  },

  {
    question:
      "Kalimat utama pada paragraf induktif biasanya terletak ...",
    options: [
      "Pada awal paragraf",
      "Pada akhir paragraf",
      "Pada judul",
      "Di luar paragraf"
    ],
    answer: 1,
    explanation:
      "Pada paragraf induktif, gagasan utama atau kesimpulan biasanya muncul pada bagian akhir."
  },

  {
    question:
      "Manakah yang merupakan contoh gagasan utama?",
    options: [
      "Banyak siswa membawa botol minum dari rumah.",
      "Membawa botol minum sendiri dapat mengurangi sampah plastik.",
      "Botol tersebut berwarna biru.",
      "Sebagian siswa memiliki botol berukuran besar."
    ],
    answer: 1,
    explanation:
      "Kalimat tersebut merupakan gagasan umum yang dapat dikembangkan dengan beberapa kalimat penjelas."
  },

  {
    question:
      "Perhatikan kalimat berikut: 'Membaca buku dapat menambah wawasan.' Fungsi kalimat tersebut dalam paragraf yang dikembangkan dengan beberapa contoh manfaat membaca adalah ...",
    options: [
      "Kalimat utama",
      "Kalimat penjelas",
      "Kalimat penghubung",
      "Kalimat seru"
    ],
    answer: 0,
    explanation:
      "Kalimat tersebut menyatakan gagasan umum yang dapat dijelaskan melalui beberapa contoh."
  },

  {
    question:
      "Manakah susunan yang tepat untuk paragraf deduktif?",
    options: [
      "Kalimat penjelas → kalimat penjelas → gagasan utama",
      "Gagasan utama → kalimat penjelas → kalimat penjelas",
      "Kalimat penjelas → gagasan utama → judul",
      "Judul → kesimpulan → gagasan utama"
    ],
    answer: 1,
    explanation:
      "Paragraf deduktif bergerak dari gagasan umum menuju penjelasan khusus."
  },

  {
    question:
      "Manakah susunan yang tepat untuk paragraf induktif?",
    options: [
      "Gagasan utama → penjelasan → penjelasan",
      "Penjelasan → penjelasan → gagasan utama",
      "Judul → gagasan utama → judul",
      "Gagasan utama → gagasan utama → penjelasan"
    ],
    answer: 1,
    explanation:
      "Paragraf induktif bergerak dari berbagai fakta atau penjelasan menuju kesimpulan atau gagasan utama."
  },

  {
    question:
      "Manakah yang paling tepat menggambarkan paragraf campuran?",
    options: [
      "Gagasan utama hanya muncul di awal",
      "Gagasan utama hanya muncul di akhir",
      "Gagasan utama di awal kemudian ditegaskan kembali di akhir",
      "Tidak terdapat kalimat penjelas"
    ],
    answer: 2,
    explanation:
      "Paragraf campuran memiliki gagasan utama pada awal dan ditegaskan kembali pada akhir paragraf."
  },

  {
    question:
      "Perhatikan paragraf berikut!\n\n'Kebersihan sekolah merupakan tanggung jawab seluruh warga sekolah. Siswa harus membuang sampah pada tempatnya. Guru juga dapat memberikan contoh menjaga kebersihan. Petugas sekolah membantu merawat lingkungan. Jadi, kebersihan sekolah memang menjadi tanggung jawab bersama.'\n\nParagraf tersebut termasuk ...",
    options: [
      "Deduktif",
      "Induktif",
      "Campuran",
      "Naratif"
    ],
    answer: 2,
    explanation:
      "Gagasan utama muncul pada awal dan ditegaskan kembali pada akhir paragraf."
  },

  {
    question:
      "Kalimat penjelas dapat berupa ...",
    options: [
      "Contoh, alasan, rincian, atau data pendukung",
      "Judul buku saja",
      "Nama penulis saja",
      "Nomor halaman"
    ],
    answer: 0,
    explanation:
      "Kalimat penjelas berfungsi mendukung dan memperjelas gagasan utama."
  },

  {
    question:
      "Jika sebuah paragraf diawali dengan gagasan umum lalu diikuti contoh-contoh khusus, pola pengembangannya adalah ...",
    options: [
      "Induktif",
      "Deduktif",
      "Campuran",
      "Dialog"
    ],
    answer: 1,
    explanation:
      "Gagasan umum yang diikuti contoh atau rincian khusus merupakan pola deduktif."
  },

  {
    question:
      "Jika sebuah paragraf dimulai dengan beberapa fakta kemudian diakhiri kesimpulan umum, pola tersebut disebut ...",
    options: [
      "Deduktif",
      "Induktif",
      "Campuran",
      "Deskriptif"
    ],
    answer: 1,
    explanation:
      "Pola induktif bergerak dari fakta-fakta khusus menuju kesimpulan umum."
  },

  {
    question:
      "Apa fungsi kalimat penjelas?",
    options: [
      "Menghapus gagasan utama",
      "Memperjelas dan mendukung gagasan utama",
      "Menggantikan judul",
      "Menentukan jumlah paragraf"
    ],
    answer: 1,
    explanation:
      "Kalimat penjelas membuat gagasan utama menjadi lebih jelas melalui rincian, contoh, alasan, atau informasi pendukung."
  },

  {
    question:
      "Perhatikan kalimat berikut: 'Sampah plastik sulit terurai secara alami.' Jika kalimat tersebut menjadi gagasan utama, kalimat berikut yang paling tepat menjadi penjelas adalah ...",
    options: [
      "Plastik sering digunakan untuk berbagai keperluan.",
      "Botol plastik dapat membutuhkan waktu sangat lama untuk terurai.",
      "Saya membeli makanan tadi pagi.",
      "Sekolah memiliki lapangan olahraga."
    ],
    answer: 1,
    explanation:
      "Kalimat tersebut memberikan contoh khusus yang mendukung gagasan tentang sulitnya sampah plastik terurai."
  },

  {
    question:
      "Sebuah paragraf yang memiliki gagasan utama pada awal dan akhir disebut ...",
    options: [
      "Deduktif",
      "Induktif",
      "Campuran",
      "Eksposisi"
    ],
    answer: 2,
    explanation:
      "Gagasan utama yang muncul di awal dan ditegaskan kembali di akhir merupakan ciri paragraf campuran."
  },

  {
    question:
      "Dalam paragraf deduktif, kalimat setelah kalimat utama biasanya berfungsi sebagai ...",
    options: [
      "Kalimat penjelas",
      "Judul",
      "Kata pengantar",
      "Nomor paragraf"
    ],
    answer: 0,
    explanation:
      "Kalimat berikutnya memberikan penjelasan atau rincian terhadap gagasan utama."
  },

  {
    question:
      "Dalam paragraf induktif, kalimat terakhir biasanya berfungsi sebagai ...",
    options: [
      "Contoh pertama",
      "Gagasan utama atau kesimpulan",
      "Judul",
      "Keterangan tempat"
    ],
    answer: 1,
    explanation:
      "Pada paragraf induktif, informasi khusus biasanya mengarah kepada kesimpulan umum di akhir."
  },

  {
    question:
      "Perhatikan paragraf berikut!\n\n'Air sangat penting bagi kehidupan manusia. Tubuh membutuhkan air agar dapat berfungsi dengan baik. Air juga membantu menjaga suhu tubuh. Selain itu, air diperlukan dalam berbagai kegiatan sehari-hari.'\n\nKalimat utama paragraf tersebut adalah ...",
    options: [
      "Air sangat penting bagi kehidupan manusia.",
      "Tubuh membutuhkan air.",
      "Air membantu menjaga suhu tubuh.",
      "Air diperlukan dalam kegiatan sehari-hari."
    ],
    answer: 0,
    explanation:
      "Kalimat pertama merupakan gagasan umum yang kemudian dijelaskan oleh kalimat-kalimat berikutnya."
  },

  {
    question:
      "Perhatikan paragraf berikut!\n\n'Banyak siswa membaca buku sebelum pelajaran dimulai. Beberapa siswa berdiskusi tentang isi buku. Ada pula yang mencatat informasi penting. Kegiatan tersebut menunjukkan bahwa membaca dapat menjadi kebiasaan belajar yang baik.'\n\nKalimat utama terdapat pada ...",
    options: [
      "Kalimat pertama",
      "Kalimat kedua",
      "Kalimat ketiga",
      "Kalimat terakhir"
    ],
    answer: 3,
    explanation:
      "Kalimat terakhir merupakan kesimpulan umum berdasarkan fakta-fakta yang disampaikan sebelumnya."
  },

  {
    question:
      "Kalimat utama harus memiliki hubungan yang erat dengan ...",
    options: [
      "Gagasan penjelas",
      "Jumlah halaman",
      "Nama pengarang",
      "Ukuran huruf"
    ],
    answer: 0,
    explanation:
      "Kalimat penjelas harus mendukung dan mengembangkan gagasan yang terdapat dalam kalimat utama."
  },

  {
    question:
      "Pola deduktif dapat disebut juga pola berpikir ...",
    options: [
      "Khusus ke umum",
      "Umum ke khusus",
      "Acak",
      "Tidak beraturan"
    ],
    answer: 1,
    explanation:
      "Deduktif bergerak dari gagasan umum menuju fakta atau rincian khusus."
  },

  {
    question:
      "Pola induktif dapat disebut juga pola berpikir ...",
    options: [
      "Umum ke khusus",
      "Khusus ke umum",
      "Umum ke umum",
      "Acak"
    ],
    answer: 1,
    explanation:
      "Induktif bergerak dari fakta atau informasi khusus menuju kesimpulan umum."
  },

  {
    question:
      "Apa tujuan adanya kalimat penjelas dalam paragraf?",
    options: [
      "Agar paragraf menjadi lebih jelas dan lengkap",
      "Agar paragraf tidak mempunyai topik",
      "Agar kalimat utama hilang",
      "Agar paragraf hanya terdiri dari satu kalimat"
    ],
    answer: 0,
    explanation:
      "Kalimat penjelas memberikan informasi tambahan yang memperkuat dan memperjelas gagasan utama."
  },

  {
    question:
      "Kalimat berikut yang paling tepat menjadi kalimat penjelas untuk 'Lingkungan sekolah harus dijaga kebersihannya' adalah ...",
    options: [
      "Kebersihan merupakan tanggung jawab bersama.",
      "Siswa dapat membuang sampah sesuai jenisnya.",
      "Sekolah itu berada di dekat jalan.",
      "Hari ini cuaca cukup cerah."
    ],
    answer: 1,
    explanation:
      "Membuang sampah sesuai jenisnya merupakan tindakan konkret yang menjelaskan cara menjaga kebersihan sekolah."
  },

  {
    question:
      "Jika kalimat utama terletak di awal dan kemudian diulang dengan bentuk berbeda pada akhir paragraf, paragraf tersebut disebut ...",
    options: [
      "Deduktif",
      "Induktif",
      "Campuran",
      "Deskripsi"
    ],
    answer: 2,
    explanation:
      "Pengulangan atau penegasan kembali gagasan utama pada akhir merupakan ciri paragraf campuran."
  }

];


/* =========================================================
   TANTANGAN LUCU
========================================================= */

const FUN_CHALLENGES = [

  "😆 Tersenyumlah selama 5 detik sambil berkata: 'Aku calon juara!'",

  "🐸 Tirukan suara katak sebanyak 3 kali.",

  "🤪 Buat ekspresi wajah paling lucu selama 5 detik.",

  "🎤 Nyanyikan satu baris lagu favoritmu dengan suara robot.",

  "🐔 Tirukan suara ayam berkokok tanpa tertawa.",

  "🕺 Goyangkan bahu kiri dan kanan sebanyak 5 kali.",

  "😂 Katakan 'Bahasa Indonesia itu seru!' dengan gaya pembawa berita.",

  "🐱 Tirukan suara kucing sebanyak 3 kali.",

  "🙃 Berdiri jika bisa, lalu tepuk tangan 5 kali.",

  "🎭 Ucapkan namamu dengan gaya seorang raja atau ratu.",

  "🚀 Katakan 'Aku akan mencapai lantai 100!' dengan penuh semangat.",

  "😎 Berikan pose kemenangan paling keren selama 3 detik.",

  "🐵 Tirukan ekspresi monyet tanpa bersuara.",

  "👏 Tepuk tangan dengan pola: 1 kali - 2 kali - 3 kali.",

  "🤣 Coba jangan tersenyum selama 5 detik setelah membaca tantangan ini.",

  "🎙️ Ucapkan kalimat 'Saya suka belajar Bahasa Indonesia' seperti penyiar radio.",

  "🐰 Lompat kecil 2 kali jika memungkinkan.",

  "⭐ Katakan satu kata positif tentang teman di sebelahmu.",

  "🥳 Buat selebrasi kecil seolah-olah baru memenangkan pertandingan.",

  "🧠 Sebutkan satu contoh kalimat utama tanpa berpikir terlalu lama."

];


/* =========================================================
   STATE PERMAINAN
========================================================= */

let players = [];

let currentPlayerIndex = 0;

let gameStarted = false;

let gameOver = false;

let isBusy = false;

let currentQuestion = null;

let currentQuestionType = null;

let currentSpecialData = null;

let questionAnswered = false;

let lastQuestionIndex = -1;


/* =========================================================
   REFERENSI DOM
========================================================= */

const DOM = {};

function cacheDOM() {

  DOM.startScreen =
    document.getElementById("startScreen");

  DOM.gameScreen =
    document.getElementById("gameScreen");

  DOM.playerCount =
    document.getElementById("playerCount");

  DOM.playerInputs =
    document.getElementById("playerInputs");

  DOM.startGameBtn =
    document.getElementById("startGameBtn");

  DOM.restartBtn =
    document.getElementById("restartBtn");

  DOM.board =
    document.getElementById("board");

  DOM.boardConnections =
    document.getElementById("boardConnections");

  DOM.activePlayerName =
    document.getElementById("activePlayerName");

  DOM.activePlayerInfo =
    document.getElementById("activePlayerInfo");

  DOM.dice =
    document.getElementById("dice");

  DOM.rollDiceBtn =
    document.getElementById("rollDiceBtn");

  DOM.playersList =
    document.getElementById("playersList");

  DOM.gameLog =
    document.getElementById("gameLog");

  DOM.questionModal =
    document.getElementById("questionModal");

  DOM.questionIcon =
    document.getElementById("questionIcon");

  DOM.questionTitle =
    document.getElementById("questionTitle");

  DOM.questionDescription =
    document.getElementById("questionDescription");

  DOM.questionText =
    document.getElementById("questionText");

  DOM.questionOptions =
    document.getElementById("questionOptions");

  DOM.questionResult =
    document.getElementById("questionResult");

  DOM.questionContinueBtn =
    document.getElementById("questionContinueBtn");

  DOM.funModal =
    document.getElementById("funModal");

  DOM.funIcon =
    document.getElementById("funIcon");

  DOM.funTitle =
    document.getElementById("funTitle");

  DOM.funText =
    document.getElementById("funText");

  DOM.funDoneBtn =
    document.getElementById("funDoneBtn");

  DOM.collisionModal =
    document.getElementById("collisionModal");

  DOM.collisionText =
    document.getElementById("collisionText");

  DOM.collisionContinueBtn =
    document.getElementById("collisionContinueBtn");

  DOM.starModal =
    document.getElementById("starModal");

  DOM.starText =
    document.getElementById("starText");

  DOM.starContinueBtn =
    document.getElementById("starContinueBtn");

  DOM.winnerModal =
    document.getElementById("winnerModal");

  DOM.winnerName =
    document.getElementById("winnerName");

  DOM.playAgainBtn =
    document.getElementById("playAgainBtn");

}


/* =========================================================
   INISIALISASI
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  initGame
);

function initGame() {

  cacheDOM();

  setupPlayerInputs();

  setupEvents();

  updatePlayerInputs();

}


/* =========================================================
   EVENT LISTENER
========================================================= */

function setupEvents() {

  DOM.playerCount.addEventListener(
    "change",
    updatePlayerInputs
  );

  DOM.startGameBtn.addEventListener(
    "click",
    startGame
  );

  DOM.restartBtn.addEventListener(
    "click",
    restartGame
  );

  DOM.rollDiceBtn.addEventListener(
    "click",
    rollDice
  );

  DOM.questionContinueBtn.addEventListener(
    "click",
    finishQuestion
  );

  DOM.funDoneBtn.addEventListener(
    "click",
    finishFunChallenge
  );

  DOM.collisionContinueBtn.addEventListener(
    "click",
    finishCollision
  );

  DOM.starContinueBtn.addEventListener(
    "click",
    finishStar
  );

  DOM.playAgainBtn.addEventListener(
    "click",
    restartGame
  );

}


/* =========================================================
   INPUT PEMAIN
========================================================= */

function setupPlayerInputs() {

  DOM.playerInputs.innerHTML = "";

  for (
    let i = 0;
    i < GAME_CONFIG.MAX_PLAYERS;
    i++
  ) {

    const row =
      document.createElement("div");

    row.className =
      "player-input-row";

    row.dataset.player =
      i;

    row.innerHTML = `

      <div class="emoji">
        ${GAME_CONFIG.PLAYER_ICONS[i]}
      </div>

      <input
        type="text"
        class="player-name-input"
        data-player-input="${i}"
        maxlength="20"
        placeholder="Nama Pemain ${i + 1}"
        autocomplete="off"
      >

    `;

    DOM.playerInputs.appendChild(row);

  }

}


function updatePlayerInputs() {

  const count =
    Number(DOM.playerCount.value);

  const rows =
    DOM.playerInputs.querySelectorAll(
      ".player-input-row"
    );

  rows.forEach(
    (row, index) => {

      if (index < count) {

        row.classList.remove(
          "hidden"
        );

        row.style.display =
          "flex";

      } else {

        row.classList.add(
          "hidden"
        );

        row.style.display =
          "none";

      }

    }
  );

}


/* =========================================================
   MEMULAI GAME
========================================================= */

function startGame() {

  const count =
    Number(DOM.playerCount.value);

  players = [];

  for (
    let i = 0;
    i < count;
    i++
  ) {

    const input =
      document.querySelector(
        `[data-player-input="${i}"]`
      );

    let name =
      input
        ? input.value.trim()
        : "";

    if (!name) {
      name =
        `Pemain ${i + 1}`;
    }

    players.push({

      id: i,

      name: name,

      position:
        GAME_CONFIG.START_POSITION,

      emoji:
        GAME_CONFIG.PLAYER_EMOJIS[i],

      icon:
        GAME_CONFIG.PLAYER_ICONS[i],

      safe:
        false,

      finished:
        false

    });

  }

  currentPlayerIndex = 0;

  gameStarted = true;

  gameOver = false;

  isBusy = false;

  currentQuestion = null;

  currentQuestionType = null;

  currentSpecialData = null;

  DOM.startScreen.classList.add(
    "hidden"
  );

  DOM.gameScreen.classList.remove(
    "hidden"
  );

  createBoard();

  drawBoardConnections();

  renderPlayers();

  updateActivePlayer();

  clearGameLog();

  addLog(
    "🎮 Permainan dimulai!"
  );

  addLog(
    `🎯 ${players[0].name} mendapat giliran pertama.`
  );

  playSound("start");

}


/* =========================================================
   RESTART
========================================================= */

function restartGame() {

  closeAllModals();

  gameStarted = false;

  gameOver = false;

  isBusy = false;

  players = [];

  currentPlayerIndex = 0;

  DOM.gameScreen.classList.add(
    "hidden"
  );

  DOM.startScreen.classList.remove(
    "hidden"
  );

  setupPlayerInputs();

  updatePlayerInputs();

}


/* =========================================================
   PAPAN
========================================================= */

function createBoard() {

  DOM.board.innerHTML = "";

  DOM.board.appendChild(
    DOM.boardConnections
  );

  for (
    let position = 1;
    position <= 100;
    position++
  ) {

    const tile =
      document.createElement("div");

    tile.className =
      "tile";

    tile.dataset.position =
      position;

    const row =
      Math.floor(
        (position - 1) / 10
      );

    const isEvenRow =
      row % 2 === 0;

    const column =
      isEvenRow
        ? (position - 1) % 10
        : 9 - ((position - 1) % 10);

    tile.style.gridColumn =
      column + 1;

    tile.style.gridRow =
      10 - row;

    if (
      GAME_CONFIG.STARS.includes(
        position
      )
    ) {

      tile.classList.add(
        "star"
      );

    }

    if (
      GAME_CONFIG.FUN_TILES.includes(
        position
      )
    ) {

      tile.classList.add(
        "fun"
      );

    }

    if (
      Object.prototype.hasOwnProperty.call(
        GAME_CONFIG.LADDERS,
        position
      )
    ) {

      tile.classList.add(
        "ladder"
      );

    }

    if (
      Object.prototype.hasOwnProperty.call(
        GAME_CONFIG.SNAKES,
        position
      )
    ) {

      tile.classList.add(
        "snake"
      );

    }

    if (
      position ===
      GAME_CONFIG.FINISH_POSITION
    ) {

      tile.classList.add(
        "finish"
      );

    }

    tile.innerHTML = `

      <span class="tile-number">
        ${position}
      </span>

    `;

    if (
      position === 1
    ) {

      tile.insertAdjacentHTML(
        "beforeend",
        `<span class="tile-icon">🚩</span>`
      );

    }

    if (
      position ===
      GAME_CONFIG.FINISH_POSITION
    ) {

      tile.insertAdjacentHTML(
        "beforeend",
        `<span class="tile-icon">🏆</span>`
      );

    }

    if (
      GAME_CONFIG.FUN_TILES.includes(
        position
      )
    ) {

      tile.insertAdjacentHTML(
        "beforeend",
        `<span class="tile-icon">😂</span>`
      );

    }

    DOM.board.appendChild(tile);

  }

}


/* =========================================================
   KOORDINAT PETAK UNTUK SVG
========================================================= */

function getTileCenter(position) {

  const row =
    Math.floor(
      (position - 1) / 10
    );

  const isEvenRow =
    row % 2 === 0;

  const column =
    isEvenRow
      ? (position - 1) % 10
      : 9 - ((position - 1) % 10);

  const x =
    column * 100 + 50;

  const y =
    (9 - row) * 100 + 50;

  return {
    x,
    y
  };

}


/* =========================================================
   GAMBAR ULAR DAN TANGGA
========================================================= */

function drawBoardConnections() {

  if (!DOM.boardConnections) {
    return;
  }

  DOM.boardConnections.innerHTML = "";

  /*
    Tangga
  */

  Object.entries(
    GAME_CONFIG.LADDERS
  ).forEach(
    ([start, end]) => {

      drawLadder(
        Number(start),
        Number(end)
      );

    }
  );

  /*
    Ular
  */

  Object.entries(
    GAME_CONFIG.SNAKES
  ).forEach(
    ([start, end]) => {

      drawSnake(
        Number(start),
        Number(end)
      );

    }
  );

}


/* =========================================================
   GAMBAR TANGGA
========================================================= */

function drawLadder(
  startPosition,
  endPosition
) {

  const start =
    getTileCenter(
      startPosition
    );

  const end =
    getTileCenter(
      endPosition
    );

  const dx =
    end.x - start.x;

  const dy =
    end.y - start.y;

  const length =
    Math.sqrt(
      dx * dx +
      dy * dy
    );

  const offsetX =
    (-dy / length) * 10;

  const offsetY =
    (dx / length) * 10;

  const x1a =
    start.x + offsetX;

  const y1a =
    start.y + offsetY;

  const x2a =
    end.x + offsetX;

  const y2a =
    end.y + offsetY;

  const x1b =
    start.x - offsetX;

  const y1b =
    start.y - offsetY;

  const x2b =
    end.x - offsetX;

  const y2b =
    end.y - offsetY;

  const lineA =
    createSvgElement(
      "line",
      {
        x1: x1a,
        y1: y1a,
        x2: x2a,
        y2: y2a,
        class: "ladder-line"
      }
    );

  const lineB =
    createSvgElement(
      "line",
      {
        x1: x1b,
        y1: y1b,
        x2: x2b,
        y2: y2b,
        class: "ladder-line"
      }
    );

  DOM.boardConnections.appendChild(
    lineA
  );

  DOM.boardConnections.appendChild(
    lineB
  );

  const rungCount =
    Math.max(
      3,
      Math.floor(
        length / 70
      )
    );

  for (
    let i = 1;
    i < rungCount;
    i++
  ) {

    const ratio =
      i / rungCount;

    const cx =
      start.x +
      dx * ratio;

    const cy =
      start.y +
      dy * ratio;

    const rung =
      createSvgElement(
        "line",
        {
          x1:
            cx - offsetX,
          y1:
            cy - offsetY,
          x2:
            cx + offsetX,
          y2:
            cy + offsetY,
          class:
            "ladder-rung"
        }
      );

    DOM.boardConnections.appendChild(
      rung
    );

  }

}


/* =========================================================
   GAMBAR ULAR
========================================================= */

function drawSnake(
  headPosition,
  tailPosition
) {

  const head =
    getTileCenter(
      headPosition
    );

  const tail =
    getTileCenter(
      tailPosition
    );

  const midX =
    (head.x + tail.x) / 2;

  const midY =
    (head.y + tail.y) / 2;

  const dx =
    head.x - tail.x;

  const dy =
    head.y - tail.y;

  const distance =
    Math.sqrt(
      dx * dx +
      dy * dy
    );

  const curve =
    Math.min(
      100,
      Math.max(
        35,
        distance * .18
      )
    );

  const control1X =
    midX + curve;

  const control1Y =
    midY - curve;

  const control2X =
    midX - curve;

  const control2Y =
    midY + curve;

  const pathData = `
    M ${head.x} ${head.y}
    C
      ${control1X} ${control1Y},
      ${control2X} ${control2Y},
      ${tail.x} ${tail.y}
  `;

  const path =
    createSvgElement(
      "path",
      {
        d:
          pathData,
        class:
          "snake-line"
      }
    );

  DOM.boardConnections.appendChild(
    path
  );

  /*
    Kepala ular
  */

  const angle =
    Math.atan2(
      tail.y - head.y,
      tail.x - head.x
    );

  const headRadius =
    20;

  const headCircle =
    createSvgElement(
      "circle",
      {
        cx:
          head.x,
        cy:
          head.y,
        r:
          headRadius,
        class:
          "snake-head"
      }
    );

  DOM.boardConnections.appendChild(
    headCircle
  );

  /*
    Mata ular
  */

  const eyeDistance =
    7;

  const eyeOffset =
    7;

  const eye1X =
    head.x +
    Math.cos(
      angle + Math.PI / 2
    ) *
      eyeOffset +
    Math.cos(angle) *
      eyeDistance;

  const eye1Y =
    head.y +
    Math.sin(
      angle + Math.PI / 2
    ) *
      eyeOffset +
    Math.sin(angle) *
      eyeDistance;

  const eye2X =
    head.x +
    Math.cos(
      angle - Math.PI / 2
    ) *
      eyeOffset +
    Math.cos(angle) *
      eyeDistance;

  const eye2Y =
    head.y +
    Math.sin(
      angle - Math.PI / 2
    ) *
      eyeOffset +
    Math.sin(angle) *
      eyeDistance;

  const eye1 =
    createSvgElement(
      "circle",
      {
        cx:
          eye1X,
        cy:
          eye1Y,
        r:
          5,
        class:
          "snake-eye"
      }
    );

  const eye2 =
    createSvgElement(
      "circle",
      {
        cx:
          eye2X,
        cy:
          eye2Y,
        r:
          5,
        class:
          "snake-eye"
      }
    );

  DOM.boardConnections.appendChild(
    eye1
  );

  DOM.boardConnections.appendChild(
    eye2
  );

}


/* =========================================================
   SVG HELPER
========================================================= */

function createSvgElement(
  tag,
  attributes
) {

  const element =
    document.createElementNS(
      "http://www.w3.org/2000/svg",
      tag
    );

  Object.entries(
    attributes
  ).forEach(
    ([key, value]) => {

      element.setAttribute(
        key,
        value
      );

    }
  );

  return element;

}


/* =========================================================
   RENDER PEMAIN
========================================================= */

function renderPlayers() {

  if (!DOM.playersList) {
    return;
  }

  DOM.playersList.innerHTML = "";

  players.forEach(
    (player, index) => {

      const row =
        document.createElement("div");

      row.className =
        "player-row";

      if (
        index ===
        currentPlayerIndex
      ) {

        row.classList.add(
          "active"
        );

      }

      row.innerHTML = `

        <div
          class="player-avatar"
          style="
            background:
              linear-gradient(
                135deg,
                ${getPlayerColor(index)},
                ${getPlayerColorDark(index)}
              );
          "
        >
          ${player.emoji}
        </div>

        <div class="player-details">

          <div class="player-name">
            ${escapeHTML(player.name)}
          </div>

          <div class="player-position">
            Lantai ${player.position}
            ${player.safe ? " ⭐ AMAN" : ""}
          </div>

        </div>

      `;

      DOM.playersList.appendChild(
        row
      );

    }
  );

  renderPieces();

}


/* =========================================================
   WARNA PION
========================================================= */

function getPlayerColor(index) {

  const colors = [
    "#ff5c72",
    "#4d96ff",
    "#55c96b",
    "#f0c832",
    "#9b63df",
    "#ff8b4c",
    "#ee71ad"
  ];

  return colors[
    index % colors.length
  ];

}


function getPlayerColorDark(index) {

  const colors = [
    "#d83e58",
    "#286cc4",
    "#369c4b",
    "#c19a16",
    "#7540b8",
    "#d4662d",
    "#c54f88"
  ];

  return colors[
    index % colors.length
  ];

}


/* =========================================================
   RENDER PION DI PAPAN
========================================================= */

function renderPieces() {

  document
    .querySelectorAll(".pieces")
    .forEach(
      element =>
        element.remove()
    );

  const grouped =
    {};

  players.forEach(
    player => {

      if (
        !grouped[player.position]
      ) {

        grouped[player.position] =
          [];

      }

      grouped[player.position].push(
        player
      );

    }
  );

  Object.entries(
    grouped
  ).forEach(
    ([position, group]) => {

      const tile =
        document.querySelector(
          `.tile[data-position="${position}"]`
        );

      if (!tile) {
        return;
      }

      const container =
        document.createElement("div");

      container.className =
        "pieces";

      group.forEach(
        player => {

          const piece =
            document.createElement("div");

          piece.className =
            "piece";

          if (
            player.id ===
            players[currentPlayerIndex].id
          ) {

            piece.classList.add(
              "active"
            );

          }

          piece.style.background =
            `linear-gradient(
              135deg,
              ${getPlayerColor(player.id)},
              ${getPlayerColorDark(player.id)}
            )`;

          piece.title =
            player.name;

          piece.textContent =
            player.emoji;

          container.appendChild(
            piece
          );

        }
      );

      tile.appendChild(
        container
      );

    }
  );

}


/* =========================================================
   UPDATE PEMAIN AKTIF
========================================================= */

function updateActivePlayer() {

  if (!players.length) {
    return;
  }

  const player =
    players[currentPlayerIndex];

  DOM.activePlayerName.textContent =
    `${player.emoji} ${player.name}`;

  DOM.activePlayerInfo.textContent =
    `📍 Lantai ${player.position}`;

  DOM.rollDiceBtn.disabled =
    !gameStarted ||
    gameOver ||
    isBusy;

  renderPlayers();

}


/* =========================================================
   DADU
========================================================= */

async function rollDice() {

  if (
    !gameStarted ||
    gameOver ||
    isBusy
  ) {
    return;
  }

  isBusy = true;

  updateActivePlayer();

  DOM.rollDiceBtn.disabled =
    true;

  DOM.dice.classList.add(
    "rolling"
  );

  playSound("dice");

  const diceValues = [
    "⚀",
    "⚁",
    "⚂",
    "⚃",
    "⚄",
    "⚅"
  ];

  let finalValue = 1;

  for (
    let i = 0;
    i < 10;
    i++
  ) {

    finalValue =
      Math.floor(
        Math.random() * 6
      ) + 1;

    DOM.dice.textContent =
      diceValues[
        finalValue - 1
      ];

    await sleep(80);

  }

  DOM.dice.classList.remove(
    "rolling"
  );

  DOM.dice.textContent =
    diceValues[
      finalValue - 1
    ];

  addLog(
    `🎲 ${players[currentPlayerIndex].name} mendapatkan angka ${finalValue}.`
  );

  playSound("dice-final");

  await sleep(400);

  await moveCurrentPlayer(
    finalValue
  );

}


/* =========================================================
   GERAK PEMAIN
========================================================= */

async function moveCurrentPlayer(
  steps
) {

  const player =
    players[currentPlayerIndex];

  const start =
    player.position;

  let destination =
    start + steps;

  /*
    Tidak boleh melewati 100.
  */

  if (
    destination >
    GAME_CONFIG.FINISH_POSITION
  ) {

    addLog(
      `↩️ ${player.name} tidak dapat bergerak ${steps} langkah karena akan melewati lantai 100.`
    );

    await sleep(700);

    await endTurn();

    return;

  }

  /*
    Gerakkan satu per satu.
  */

  for (
    let position = start + 1;
    position <= destination;
    position++
  ) {

    player.position =
      position;

    renderPlayers();

    highlightTile(
      position
    );

    playSound("step");

    await sleep(230);

  }

  await processLanding(
    player
  );

}


/* =========================================================
   PROSES SETELAH MENDARAT
========================================================= */

async function processLanding(
  player
) {

  renderPlayers();

  /*
    Menang
  */

  if (
    player.position ===
    GAME_CONFIG.FINISH_POSITION
  ) {

    await showWinner(
      player
    );

    return;

  }

  /*
    BINTANG
  */

  if (
    GAME_CONFIG.STARS.includes(
      player.position
    )
  ) {

    player.safe = true;

    await showStar(
      player
    );

    return;

  }

  /*
    TANGGA
  */

  if (
    Object.prototype.hasOwnProperty.call(
      GAME_CONFIG.LADDERS,
      player.position
    )
  ) {

    await handleLadder(
      player
    );

    return;

  }

  /*
    ULAR
  */

  if (
    Object.prototype.hasOwnProperty.call(
      GAME_CONFIG.SNAKES,
      player.position
    )
  ) {

    await handleSnake(
      player
    );

    return;

  }

  /*
    PETAK LUCU
  */

  if (
    GAME_CONFIG.FUN_TILES.includes(
      player.position
    )
  ) {

    await showFunChallenge(
      player
    );

    return;

  }

  /*
    TABRAKAN
  */

  await checkCollision(
    player
  );

}


/* =========================================================
   TANGGA
========================================================= */

async function handleLadder(
  player
) {

  const start =
    player.position;

  const destination =
    GAME_CONFIG.LADDERS[
      start
    ];

  currentSpecialData = {
    start,
    destination
  };

  currentQuestionType =
    "ladder";

  addLog(
    `🪜 ${player.name} menemukan tangga dari lantai ${start} menuju ${destination}.`
  );

  await showQuestion(
    "ladder"
  );

}


/* =========================================================
   ULAR
========================================================= */

async function handleSnake(
  player
) {

  const head =
    player.position;

  const destination =
    GAME_CONFIG.SNAKES[
      head
    ];

  currentSpecialData = {
    start: head,
    destination
  };

  currentQuestionType =
    "snake";

  addLog(
    `🐍 ${player.name} terkena ular di lantai ${head}.`
  );

  await showQuestion(
    "snake"
  );

}


/* =========================================================
   SOAL
========================================================= */

async function showQuestion(
  type
) {

  const player =
    players[currentPlayerIndex];

  const question =
    getRandomQuestion();

  currentQuestion =
    question;

  questionAnswered =
    false;

  DOM.questionOptions.innerHTML =
    "";

  DOM.questionResult.textContent =
    "";

  DOM.questionContinueBtn.classList.add(
    "hidden"
  );

  if (
    type === "ladder"
  ) {

    DOM.questionIcon.textContent =
      "🪜";

    DOM.questionTitle.textContent =
      "TANTANGAN TANGGA!";

    DOM.questionDescription.textContent =
      `${player.name}, jawab dengan benar untuk menaiki tangga.`;

  } else {

    DOM.questionIcon.textContent =
      "🐍";

    DOM.questionTitle.textContent =
      "TANTANGAN ULAR!";

    DOM.questionDescription.textContent =
      `${player.name}, jawab dengan benar agar kamu tidak turun!`;

  }

  DOM.questionText.innerHTML =
    formatQuestionText(
      question.question
    );

  question.options.forEach(
    (option, index) => {

      const button =
        document.createElement("button");

      button.className =
        "answer-button";

      button.type =
        "button";

      button.innerHTML =
        `<strong>${String.fromCharCode(65 + index)}.</strong> ${escapeHTML(option)}`;

      button.addEventListener(
        "click",
        () => answerQuestion(
          index
        )
      );

      DOM.questionOptions.appendChild(
        button
      );

    }
  );

  DOM.questionModal.classList.remove(
    "hidden"
  );

  playSound("question");

}


/* =========================================================
   PILIH SOAL ACAK
========================================================= */

function getRandomQuestion() {

  if (
    QUESTIONS.length === 1
  ) {

    return QUESTIONS[0];

  }

  let index;

  do {

    index =
      Math.floor(
        Math.random() *
        QUESTIONS.length
      );

  } while (
    index === lastQuestionIndex
  );

  lastQuestionIndex =
    index;

  return QUESTIONS[index];

}


/* =========================================================
   MENJAWAB SOAL
========================================================= */

function answerQuestion(
  selectedIndex
) {

  if (
    questionAnswered
  ) {
    return;
  }

  questionAnswered =
    true;

  const buttons =
    DOM.questionOptions.querySelectorAll(
      ".answer-button"
    );

  buttons.forEach(
    (button, index) => {

      button.disabled =
        true;

      if (
        index ===
        currentQuestion.answer
      ) {

        button.classList.add(
          "correct"
        );

      }

    }
  );

  const correct =
    selectedIndex ===
    currentQuestion.answer;

  if (correct) {

    buttons[
      selectedIndex
    ].classList.add(
      "correct"
    );

    DOM.questionResult.innerHTML =
      `✅ <strong>Jawaban benar!</strong><br>${escapeHTML(currentQuestion.explanation)}`;

    playSound("correct");

    addLog(
      `✅ ${players[currentPlayerIndex].name} menjawab soal dengan benar.`
    );

  } else {

    buttons[
      selectedIndex
    ].classList.add(
      "wrong"
    );

    DOM.questionResult.innerHTML =
      `❌ <strong>Jawaban belum tepat.</strong><br>${escapeHTML(currentQuestion.explanation)}`;

    playSound("wrong");

    addLog(
      `❌ ${players[currentPlayerIndex].name} menjawab soal dengan kurang tepat.`
    );

  }

  DOM.questionContinueBtn.classList.remove(
    "hidden"
  );

  DOM.questionContinueBtn.textContent =
    "➡️ LANJUT";

}


/* =========================================================
   SELESAI SOAL
========================================================= */

async function finishQuestion() {

  if (
    !questionAnswered
  ) {
    return;
  }

  const correct =
    currentQuestion &&
    currentSpecialData &&
    currentQuestion.answer !== undefined;

  /*
    Kita menentukan benar/salah
    berdasarkan tombol jawaban yang diberi class correct.
  */

  const selectedCorrect =
    DOM.questionOptions.querySelector(
      ".answer-button.correct"
    );

  /*
    Jika terdapat tombol wrong,
    berarti jawaban pemain salah.
  */

  const selectedWrong =
    DOM.questionOptions.querySelector(
      ".answer-button.wrong"
    );

  const isCorrect =
    !selectedWrong &&
    !!selectedCorrect;

  DOM.questionModal.classList.add(
    "hidden"
  );

  await sleep(300);

  if (
    currentQuestionType ===
    "ladder"
  ) {

    await finishLadderQuestion(
      isCorrect
    );

  } else if (
    currentQuestionType ===
    "snake"
  ) {

    await finishSnakeQuestion(
      isCorrect
    );

  }

}


/* =========================================================
   HASIL SOAL TANGGA
========================================================= */

async function finishLadderQuestion(
  isCorrect
) {

  const player =
    players[currentPlayerIndex];

  const {
    start,
    destination
  } =
    currentSpecialData;

  if (isCorrect) {

    addLog(
      `🪜 ${player.name} berhasil menaiki tangga menuju lantai ${destination}!`
    );

    await animateSpecialMove(
      player,
      start,
      destination
    );

    player.safe =
      false;

    await checkCollision(
      player
    );

  } else {

    addLog(
      `😢 ${player.name} tidak dapat menaiki tangga karena jawabannya salah.`
    );

    await showMessage(
      "😢 Jawaban salah. Tangga tidak bisa dinaiki."
    );

    await sleep(600);

    await checkCollision(
      player
    );

  }

}


/* =========================================================
   HASIL SOAL ULAR
========================================================= */

async function finishSnakeQuestion(
  isCorrect
) {

  const player =
    players[currentPlayerIndex];

  const {
    start,
    destination
  } =
    currentSpecialData;

  if (isCorrect) {

    addLog(
      `🛡️ ${player.name} berhasil menghindari ular!`
    );

    await showMessage(
      "🛡️ Jawaban benar! Kamu selamat dari ular."
    );

    await sleep(700);

    await checkCollision(
      player
    );

  } else {

    addLog(
      `🐍 ${player.name} harus turun dari ${start} ke ${destination}.`
    );

    await showMessage(
      `🐍 Jawaban salah! Kamu turun ke lantai ${destination}.`
    );

    await sleep(600);

    await animateSpecialMove(
      player,
      start,
      destination
    );

    player.safe =
      false;

    await checkCollision(
      player
    );

  }

}


/* =========================================================
   GERAK KHUSUS ULAR / TANGGA
========================================================= */

async function animateSpecialMove(
  player,
  start,
  destination
) {

  const direction =
    destination > start
      ? 1
      : -1;

  const distance =
    Math.abs(
      destination - start
    );

  const duration =
    Math.max(
      350,
      Math.min(
        1200,
        distance * 35
      )
    );

  player.position =
    destination;

  renderPlayers();

  const tile =
    document.querySelector(
      `.tile[data-position="${destination}"]`
    );

  if (tile) {

    tile.classList.add(
      "highlight"
    );

    setTimeout(
      () => {
        tile.classList.remove(
          "highlight"
        );
      },
      1800
    );

  }

  if (
    direction > 0
  ) {

    playSound("ladder");

  } else {

    playSound("snake");

  }

  await sleep(
    duration
  );

}


/* =========================================================
   BINTANG
========================================================= */

async function showStar(
  player
) {

  DOM.starText.innerHTML =
    `🌟 <strong>${escapeHTML(player.name)}</strong> berada di lantai ${player.position}.<br><br>Kamu mendapatkan perlindungan bintang!<br><br>⭐ Aturan terinjak pion lawan tidak berlaku di sini.`;

  DOM.starModal.classList.remove(
    "hidden"
  );

  playSound("star");

}


/* =========================================================
   SELESAI BINTANG
========================================================= */

async function finishStar() {

  DOM.starModal.classList.add(
    "hidden"
  );

  const player =
    players[currentPlayerIndex];

  player.safe =
    true;

  addLog(
    `⭐ ${player.name} berada di petak aman.`
  );

  await sleep(300);

  /*
    Bintang tetap membuat pemain aman
    pada posisi tersebut.
  */

  await checkCollision(
    player
  );

}


/* =========================================================
   TANTANGAN LUCU
========================================================= */

async function showFunChallenge(
  player
) {

  const challenge =
    FUN_CHALLENGES[
      Math.floor(
        Math.random() *
        FUN_CHALLENGES.length
      )
    ];

  DOM.funIcon.textContent =
    "😂";

  DOM.funTitle.textContent =
    "TANTANGAN LUCU!";

  DOM.funText.textContent =
    challenge;

  DOM.funModal.classList.remove(
    "hidden"
  );

  addLog(
    `😂 ${player.name} mendapatkan tantangan lucu.`
  );

  playSound("fun");

}


/* =========================================================
   SELESAI TANTANGAN LUCU
========================================================= */

async function finishFunChallenge() {

  DOM.funModal.classList.add(
    "hidden"
  );

  addLog(
    `😎 Tantangan lucu selesai!`
  );

  await sleep(300);

  const player =
    players[currentPlayerIndex];

  await checkCollision(
    player
  );

}


/* =========================================================
   CEK TABRAKAN
========================================================= */

async function checkCollision(
  player
) {

  /*
    Jika berada di petak bintang,
    pemain aman dari tabrakan.
  */

  if (
    GAME_CONFIG.STARS.includes(
      player.position
    )
  ) {

    player.safe =
      true;

    await endTurn();

    return;

  }

  const opponents =
    players.filter(
      other =>
        other.id !== player.id &&
        other.position === player.position &&
        !other.finished
    );

  if (
    opponents.length === 0
  ) {

    await endTurn();

    return;

  }

  /*
    Ada pion lawan.
  */

  const opponent =
    opponents[0];

  DOM.collisionText.innerHTML =
    `💥 <strong>${escapeHTML(player.name)}</strong> menginjak pion <strong>${escapeHTML(opponent.name)}</strong> di lantai ${player.position}.<br><br>Karena bukan petak bintang, kamu harus mundur <strong>3 langkah</strong>.`;

  DOM.collisionModal.classList.remove(
    "hidden"
  );

  addLog(
    `💥 ${player.name} menginjak pion ${opponent.name}.`
  );

  playSound("collision");

}


/* =========================================================
   SELESAI TABRAKAN
========================================================= */

async function finishCollision() {

  DOM.collisionModal.classList.add(
    "hidden"
  );

  const player =
    players[currentPlayerIndex];

  const oldPosition =
    player.position;

  player.position =
    Math.max(
      GAME_CONFIG.START_POSITION,
      player.position -
        GAME_CONFIG.COLLISION_BACK
    );

  player.safe =
    false;

  renderPlayers();

  highlightTile(
    player.position
  );

  addLog(
    `↩️ ${player.name} mundur dari lantai ${oldPosition} ke ${player.position}.`
  );

  playSound("back");

  await sleep(800);

  await endTurn();

}


/* =========================================================
   AKHIR GILIRAN
========================================================= */

async function endTurn() {

  if (
    gameOver
  ) {
    return;
  }

  await sleep(300);

  /*
    Pemain berikutnya.
  */

  currentPlayerIndex =
    (
      currentPlayerIndex + 1
    ) %
    players.length;

  /*
    Pastikan pemain berikutnya
    belum selesai.
  */

  let safetyCounter =
    0;

  while (
    players[
      currentPlayerIndex
    ].finished &&
    safetyCounter <
      players.length
  ) {

    currentPlayerIndex =
      (
        currentPlayerIndex + 1
      ) %
      players.length;

    safetyCounter++;

  }

  isBusy =
    false;

  currentQuestion =
    null;

  currentQuestionType =
    null;

  currentSpecialData =
    null;

  updateActivePlayer();

  const nextPlayer =
    players[currentPlayerIndex];

  addLog(
    `🎯 Giliran ${nextPlayer.name}.`
  );

  await showMessage(
    `🎯 Giliran ${nextPlayer.name}!`
  );

}


/* =========================================================
   PEMENANG
========================================================= */

async function showWinner(
  player
) {

  gameOver =
    true;

  isBusy =
    true;

  player.finished =
    true;

  DOM.winnerName.textContent =
    `${player.emoji} ${player.name}`;

  DOM.winnerModal.classList.remove(
    "hidden"
  );

  DOM.rollDiceBtn.disabled =
    true;

  addLog(
    `🏆 ${player.name} menjadi PEMENANG!`
  );

  playSound("winner");

  createConfetti();

}


/* =========================================================
   CONFETTI
========================================================= */

function createConfetti() {

  const container =
    document.createElement(
      "div"
    );

  container.id =
    "confettiContainer";

  container.style.position =
    "fixed";

  container.style.inset =
    "0";

  container.style.pointerEvents =
    "none";

  container.style.zIndex =
    "3000";

  document.body.appendChild(
    container
  );

  const symbols = [
    "🎉",
    "🎊",
    "⭐",
    "✨",
    "🏆",
    "🥳"
  ];

  for (
    let i = 0;
    i < 45;
    i++
  ) {

    const piece =
      document.createElement(
        "div"
      );

    piece.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];

    piece.style.position =
      "absolute";

    piece.style.left =
      `${Math.random() * 100}%`;

    piece.style.top =
      "-50px";

    piece.style.fontSize =
      `${15 + Math.random() * 25}px`;

    piece.style.transition =
      `transform ${
        2 + Math.random() * 2
      }s linear, opacity 2s`;

    container.appendChild(
      piece
    );

    setTimeout(
      () => {

        piece.style.transform =
          `translateY(${
            window.innerHeight + 100
          }px) rotate(${
            Math.random() * 720
          }deg)`;

        piece.style.opacity =
          "0";

      },
      50 + i * 30
    );

  }

  setTimeout(
    () => {

      container.remove();

    },
    5000
  );

}


/* =========================================================
   HIGHLIGHT PETAK
========================================================= */

function highlightTile(
  position
) {

  document
    .querySelectorAll(
      ".tile.highlight"
    )
    .forEach(
      tile =>
        tile.classList.remove(
          "highlight"
        )
    );

  const tile =
    document.querySelector(
      `.tile[data-position="${position}"]`
    );

  if (!tile) {
    return;
  }

  tile.classList.add(
    "highlight"
  );

  setTimeout(
    () => {

      tile.classList.remove(
        "highlight"
      );

    },
    900
  );

}


/* =========================================================
   LOG PERMAINAN
========================================================= */

function clearGameLog() {

  DOM.gameLog.innerHTML =
    "";

}


function addLog(
  message
) {

  if (!DOM.gameLog) {
    return;
  }

  const entry =
    document.createElement(
      "div"
    );

  entry.className =
    "log-entry";

  entry.textContent =
    message;

  DOM.gameLog.prepend(
    entry
  );

  /*
    Batasi jumlah log
    supaya tidak berat.
  */

  while (
    DOM.gameLog.children.length >
    35
  ) {

    DOM.gameLog.lastElementChild.remove();

  }

}


/* =========================================================
   NOTIFIKASI
========================================================= */

let messageTimer =
  null;

async function showMessage(
  message
) {

  const old =
    document.querySelector(
      ".game-message"
    );

  if (old) {
    old.remove();
  }

  const element =
    document.createElement(
      "div"
    );

  element.className =
    "game-message";

  element.textContent =
    message;

  document.body.appendChild(
    element
  );

  clearTimeout(
    messageTimer
  );

  messageTimer =
    setTimeout(
      () => {

        element.remove();

      },
      1600
    );

}


/* =========================================================
   MODAL
========================================================= */

function closeAllModals() {

  [
    DOM.questionModal,
    DOM.funModal,
    DOM.collisionModal,
    DOM.starModal,
    DOM.winnerModal
  ].forEach(
    modal => {

      if (modal) {

        modal.classList.add(
          "hidden"
        );

      }

    }
  );

}


/* =========================================================
   FORMAT PERTANYAAN
========================================================= */

function formatQuestionText(
  text
) {

  return escapeHTML(
    text
  ).replace(
    /\n/g,
    "<br>"
  );

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(
  value
) {

  const div =
    document.createElement(
      "div"
    );

  div.textContent =
    value;

  return div.innerHTML;

}


/* =========================================================
   SLEEP
========================================================= */

function sleep(
  milliseconds
) {

  return new Promise(
    resolve =>
      setTimeout(
        resolve,
        milliseconds
      )
  );

}


/* =========================================================
   AUDIO
   Menggunakan Web Audio API.
   Tidak membutuhkan file MP3 eksternal.
========================================================= */

let audioContext =
  null;


function getAudioContext() {

  if (
    !audioContext
  ) {

    const AudioContext =
      window.AudioContext ||
      window.webkitAudioContext;

    if (!AudioContext) {
      return null;
    }

    audioContext =
      new AudioContext();

  }

  if (
    audioContext.state ===
    "suspended"
  ) {

    audioContext.resume();

  }

  return audioContext;

}


function beep(
  frequency,
  duration,
  type = "sine",
  volume = .05,
  delay = 0
) {

  const ctx =
    getAudioContext();

  if (!ctx) {
    return;
  }

  const oscillator =
    ctx.createOscillator();

  const gain =
    ctx.createGain();

  oscillator.type =
    type;

  oscillator.frequency.value =
    frequency;

  gain.gain.setValueAtTime(
    0,
    ctx.currentTime + delay
  );

  gain.gain.linearRampToValueAtTime(
    volume,
    ctx.currentTime +
      delay +
      .01
  );

  gain.gain.exponentialRampToValueAtTime(
    .001,
    ctx.currentTime +
      delay +
      duration
  );

  oscillator.connect(
    gain
  );

  gain.connect(
    ctx.destination
  );

  oscillator.start(
    ctx.currentTime +
      delay
  );

  oscillator.stop(
    ctx.currentTime +
      delay +
      duration +
      .02
  );

}


function playSound(
  type
) {

  try {

    switch (type) {

      case "start":

        beep(
          523,
          .12,
          "sine",
          .06
        );

        beep(
          659,
          .12,
          "sine",
          .06,
          .12
        );

        beep(
          784,
          .18,
          "sine",
          .07,
          .24
        );

        break;


      case "dice":

        beep(
          180,
          .08,
          "square",
          .025
        );

        break;


      case "dice-final":

        beep(
          440,
          .08,
          "triangle",
          .05
        );

        beep(
          660,
          .13,
          "triangle",
          .05,
          .08
        );

        break;


      case "step":

        beep(
          250,
          .045,
          "square",
          .015
        );

        break;


      case "question":

        beep(
          523,
          .1,
          "triangle",
          .04
        );

        beep(
          659,
          .1,
          "triangle",
          .04,
          .11
        );

        break;


      case "correct":

        beep(
          523,
          .1,
          "sine",
          .06
        );

        beep(
          659,
          .1,
          "sine",
          .06,
          .1
        );

        beep(
          784,
          .18,
          "sine",
          .07,
          .2
        );

        break;


      case "wrong":

        beep(
          250,
          .16,
          "sawtooth",
          .045
        );

        beep(
          180,
          .22,
          "sawtooth",
          .04,
          .15
        );

        break;


      case "ladder":

        beep(
          440,
          .1,
          "triangle",
          .05
        );

        beep(
          554,
          .1,
          "triangle",
          .05,
          .1
        );

        beep(
          659,
          .1,
          "triangle",
          .05,
          .2
        );

        beep(
          880,
          .18,
          "triangle",
          .06,
          .3
        );

        break;


      case "snake":

        beep(
          500,
          .15,
          "sawtooth",
          .035
        );

        beep(
          380,
          .15,
          "sawtooth",
          .035,
          .13
        );

        beep(
          260,
          .22,
          "sawtooth",
          .04,
          .26
        );

        break;


      case "star":

        beep(
          784,
          .1,
          "sine",
          .05
        );

        beep(
          988,
          .1,
          "sine",
          .05,
          .1
        );

        beep(
          1174,
          .2,
          "sine",
          .06,
          .2
        );

        break;


      case "fun":

        beep(
          330,
          .1,
          "triangle",
          .05
        );

        beep(
          440,
          .1,
          "triangle",
          .05,
          .1
        );

        beep(
          330,
          .1,
          "triangle",
          .05,
          .2
        );

        break;


      case "collision":

        beep(
          150,
          .16,
          "square",
          .05
        );

        beep(
          110,
          .25,
          "square",
          .045,
          .14
        );

        break;


      case "back":

        beep(
          300,
          .12,
          "triangle",
          .04
        );

        beep(
          220,
          .18,
          "triangle",
          .04,
          .12
        );

        break;


      case "winner":

        beep(
          523,
          .12,
          "sine",
          .06
        );

        beep(
          659,
          .12,
          "sine",
          .06,
          .12
        );

        beep(
          784,
          .12,
          "sine",
          .06,
          .24
        );

        beep(
          1046,
          .3,
          "sine",
          .08,
          .36
        );

        break;

    }

  } catch (
    error
  ) {

    /*
      Audio tidak boleh
      menghentikan permainan.
    */

    console.warn(
      "Audio tidak tersedia:",
      error
    );

  }

}


/* =========================================================
   PENANGANAN ERROR
========================================================= */

window.addEventListener(
  "error",
  event => {

    console.error(
      "Game error:",
      event.error
    );

  }
);


/* =========================================================
   PERUBAHAN UKURAN LAYAR
========================================================= */

window.addEventListener(
  "resize",
  debounce(
    () => {

      if (
        gameStarted
      ) {

        drawBoardConnections();

      }

    },
    200
  )
);


/* =========================================================
   DEBOUNCE
========================================================= */

function debounce(
  func,
  wait
) {

  let timeout;

  return function (
    ...args
  ) {

    clearTimeout(
      timeout
    );

    timeout =
      setTimeout(
        () => {
          func.apply(
            this,
            args
          );
        },
        wait
      );

  };

}


/* =========================================================
   KONDISI KHUSUS:
   KLIK DADU DENGAN TOMBOL SPASI
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.code ===
      "Space"
    ) {

      if (
        gameStarted &&
        !gameOver &&
        !isBusy &&
        document.activeElement.tagName !==
          "INPUT"
      ) {

        event.preventDefault();

        rollDice();

      }

    }

  }
);


/* =========================================================
   AKHIR SCRIPT
========================================================= */
