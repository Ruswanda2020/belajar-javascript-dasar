var jumlahAngkot = 10;
var noAngkot = 1;

for (var i = noAngkot; i <= jumlahAngkot; i++) {
  if (i <= 5) {
    console.log("angkot no ." + i + " beroprasi dengan baik ");
  } else if (i === 8 || i === 10) {
    console.log('angkot no. ' + i + ' sedang lembur');
  } else {
    console.log("angkot no ." + i + " sedang tidak beroprasi ");
  }
}
