
var ulang = true;
var p;
var angka = Math.floor(Math.random() * 10 + 1);
while (ulang) {
  alert("Tebak angka dari 1 - 10\nKamu punya 3 kesempatan");
  for (var i = 3; i > 0; i--) {
    p = prompt("Masukan angka tebakan");
    if (p == angka) {
      alert("selamat anda benar\nAngka yang dicari adalah : " + angka);
      break;
    } else if (p < angka && p <= 10) {
      alert("Angka terlalu RENDAH\nMasih ada " + (i - 1) + " kesempatan");
    } else if (p > angka && p <= 10) {
      alert("Angka terlalu TINGGI\nMasih ada " + (i - 1) + " kesempatan");
    } else if (p > 10) {
      alert("angka melebihi 10");
    }
  }
  if (i == 1 && p != angka) {
    alert("maaf kesempatan anda sudah habis");
  }
  ulang = confirm("apakah mau coba lagi?");
}
console.log(angka);
