const dataKelompok = {
    "amos": 2,
    "devin": 1,
    "joanna": 3,
    "michael": 2,
  };
  
  function tampilkanKelompok() {
    const namaInput = document.getElementById("nama");
    const nama = namaInput.value.trim().toLowerCase(); // Ubah jadi huruf kecil semua
  
    if (nama === "") {
      alert("Tolong masukkan namamu dulu ya!");
      return;
    }
  
    if (dataKelompok[nama]) {
      const tampilNama = nama.charAt(0).toUpperCase() + nama.slice(1); // Kapitalisasi awal
      document.getElementById("hasil").innerText = `Hai ${tampilNama}, kamu kelompok ${dataKelompok[nama]}!`;
    } else {
      document.getElementById("hasil").innerText = `Maaf ${nama}, kamu belum terdaftar di kelompok manapun.`;
    }
  
    namaInput.value = "";
  }