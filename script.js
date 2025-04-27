// script.js

const dataKelompok = {
  "amos": 1,
  "devin": 1,
  "zed": 1,
  "owen": 1,
  "naomi": 1,
  "wita": 1,
  "gaby": 1,
  "rachel": 1,
  "michael": 2,
  "pedro": 2,
  "dody": 2,
  "joanna": 2,
  "octa": 2,
  "gween": 2,
  "selly": 2,
  "windi": 2,
  "toji": 3,
  "kalvari": 3,
  "suil": 3,
  "yesni": 3,
  "lolieta": 3,
  "sunita": 3,
  "dwi": 3,
  "deva": 3,
};

function tampilkanKelompok() {
  const namaInput = document.getElementById("nama");
  const nama = namaInput.value.trim().toLowerCase();
  const hasilElement = document.getElementById("hasil");

  if (nama === "") {
    alert("Tolong masukkan namamu dulu ya!");
    return;
  }

  if (dataKelompok[nama]) {
    const tampilNama = nama.charAt(0).toUpperCase() + nama.slice(1);
    hasilElement.innerHTML = `Hai ${tampilNama}, kamu kelompok ${dataKelompok[nama]}!<br><br>HAVE FUNN YAAA..<br>GOD BLESS 🔥✨`;
  } else {
    const tampilNama = nama.charAt(0).toUpperCase() + nama.slice(1);
    hasilElement.innerHTML = `Maaf ${tampilNama}, kamu belum terdaftar di kelompok manapun.`;
  }

  hasilElement.style.display = "block";
  hasilElement.style.animation = "fadeIn 0.8s ease forwards";

  namaInput.value = "";
}
