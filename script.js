const dataKelompok = {
  "amos": 2,
  "devin": 1,
  "toji": 3,
  "octa": 2,
  "michael": 2,
  "yoan": 1,
  "gaby": 3,
  "suil": 2,
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
  }

  // Kosongkan input setelah submit
  namaInput.value = "";
}
