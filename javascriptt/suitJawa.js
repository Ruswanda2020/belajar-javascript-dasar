
var tanya =true;

while(tanya){

    //menampilkan pilihan layer
    var p = prompt("pilih : gajah,semut,orang");
    
    // menangkap pilihan computer
    // membangkitkan pilihan rendom
    
    var comp = Math.random();
    
    if (comp < 0.34) {
      comp = "gajah";
    } else if (comp > 0.34 && comp < 0.64) {
      comp = "semut";
    } else {
      comp = "orang";
    }
    console.log(comp);
    
    // menentukan rules of game
    var hasil = "";
    if (p === comp) {
      hasil = "Seri";
    } else if ((p =="gajah")) {
      hasil = (comp == "orang") ? "kalah" : "menang";
    } else if ((p == "semut")) {
      hasil = (comp == "orang") ? "kalah" : "menang";
    } else if ((p == "orang")) {
      hasil = (comp == "semut") ? "menang" : "kalah";
    } else {
      alert(hasil="kamu memasukan pilihan yang salah");
    }
    // tampilkan hasilnya
    
    alert('kamu memilih : '+p+' dan komputer memilih '+ comp+ '\n maka hasilnya kamu :'+hasil);

   tanya = confirm('lagi?');
    
}

alert('trimakasih sudah bermain');

