
// membuat object

// 1.object literalal
var orang={
    
    nama:"wanda",
    umur:23,
    alamat:{
        jalan:"golden prak",
        kota:"tangerang selatan",
        provinsi:"banten"
    }
}

// 2.object  funtion declaration

function objectMhs(nama,nim,email,jurusan){
    var mhs={};
    mhs.nama=nama;
    mhs.nim=nim;
    mhs.email=email;
    mhs.jurusan=jurusan;

    return mhs;
}
var mhs3=objectMhs("wanda",211119,"wanda@gmail.com","teknik informatika");
console.log(mhs3);

// 3.object construtor

function Mahasiswa(nama,nim,email,jurusan){
    this.nama=nama;
    this.nim=nim;
    this.email=email;
    this.jurusan=jurusan;
}

var mhs4= new Mahasiswa("ruswanda",211011400750,"wanda@gmail.com","teknik informatika");
console.log(mhs4);


