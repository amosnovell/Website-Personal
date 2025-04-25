const dataKelompok = {
    "amos": 2,
    "devin": 1,
    "toji": 3,
    "octa": 2,
    "michael": 2,
    "Yoan": 1,
    "Gaby": 3,
    "Suil": 2,
  };
  
  function tampilkanKelompok() {
    const namaInput = document.getElementById("nama");
    const nama = namaInput.value.trim().toLowerCase();
  
    if (nama === "") {
      alert("Tolong masukkan namamu dulu ya!");
      return;
    }
  
    if (dataKelompok[nama]) {
      const tampilNama = nama.charAt(0).toUpperCase() + nama.slice(1);
      document.getElementById("hasil").innerText = 
        `Hai ${tampilNama}, kamu kelompok ${dataKelompok[nama]}!\n\nHAVE FUNN YAAA..\nGOD BLESS 🔥✨`;
    } else {
      document.getElementById("hasil").innerText = 
        `Maaf ${nama}, kamu belum terdaftar di kelompok manapun.`;
    }
  
    namaInput.value = "";
  }
