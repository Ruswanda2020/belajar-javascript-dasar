let penumpang = [];

function tambahPenumpang(namaPenumpang, penumpang) {
    // Jika angkot kosong, tambah penumpang di awal array
    if (penumpang.length === 0) {
        penumpang.push(namaPenumpang);
        // Kembalikan isi arraynya & keluar dari function
        return penumpang;
    } else {
        // Telusuri kursi dari awal
        for (let i = 0; i < penumpang.length; i++) {
            // Jika ada kursi kosong
            if (!penumpang[i]) {
                // Tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // Kembalikan isi array
                return penumpang;
            }
            // Jika nama sudah ada dalam angkot
            else if (penumpang[i] === namaPenumpang) {
                // Tampilkan pesan kesalahan
                console.log(namaPenumpang + " sudah ada di angkot");
                // Kembalikan isi array
                return penumpang;
            } else if (i === penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
};


var hapusPenumpang = function(namaPenumpang, penumpang) {
    // Jika angkot kosong
    if (penumpang.length === 0) {
        console.log("Angkot masih kosong");
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            // Jika nama penumpang ditemukan, hapus dari array
            if (penumpang[i] === namaPenumpang) {
                penumpang.splice(i, 1);
                console.log(namaPenumpang + " telah turun dari angkot.");
                return penumpang;
            }
        }

        // Jika nama penumpang tidak ditemukan dalam loop di atas, berarti penumpang tidak ada dalam angkot
        console.log(namaPenumpang + " tidak ada dalam angkot.");
        return penumpang;
    }
};
