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

  // Validasi jika input nama kosong
  if (nama === "") {
    alert("Tolong masukkan namamu dulu ya!");
    return;
  }

  // Ambil elemen untuk menampilkan hasil
  const hasilElement = document.getElementById("hasil");

  // Periksa apakah nama ada dalam dataKelompok
  if (dataKelompok[nama]) {
    // Memformat nama agar dimulai dengan huruf kapital
    const tampilNama = nama.charAt(0).toUpperCase() + nama.slice(1);
    hasilElement.innerText = `Hai ${tampilNama}, kamu kelompok ${dataKelompok[nama]}!\n\nHAVE FUNN YAAA..\nGOD BLESS 🔥✨`;
    hasilElement.style.display = "block"; // Menampilkan hasil
  } else {
    // Jika nama tidak ditemukan dalam dataKelompok
    hasilElement.innerText = `Maaf ${nama}, kamu belum terdaftar di kelompok manapun.`;
    hasilElement.style.display = "block"; // Menampilkan hasil
    hasilElement.style.animation = "fadeIn 0.8s ease forwards";
  }

  // Kosongkan input setelah submit
  namaInput.value = "";
}
