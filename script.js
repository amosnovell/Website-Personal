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
  const nama = namaInput.value.trim();
  
  // Cek apakah input kosong
  if (nama === "") {
    alert("Tolong masukkan namamu dulu ya!");
    return;
  }

  // Ubah input menjadi lowercase untuk pencocokan data
  const namaLower = nama.toLowerCase();

  // Cek apakah nama ada dalam dataKelompok
  if (dataKelompok[namaLower]) {
    // Tampilkan nama dengan huruf kapital pertama
    const tampilNama = nama.charAt(0).toUpperCase() + nama.slice(1).toLowerCase();
    document.getElementById("hasil").innerText = 
      `Hai ${tampilNama}, kamu kelompok ${dataKelompok[namaLower]}!\n\nHAVE FUNN YAAA..\nGOD BLESS 🔥✨`;
  } else {
    document.getElementById("hasil").innerText = 
      `Maaf ${nama}, kamu belum terdaftar di kelompok manapun.`;
  }

  // Reset input setelah pengecekan
  namaInput.value = "";
}
