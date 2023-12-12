function change_text(clicked_id) {

    kembali.href = "definisi.html";

    if (clicked_id == "papua") {
        judul.innerHTML = "Provinsi Papua";
        subjudul.innerHTML = "Apa Ibukota Papua?";
        deskripsi.innerHTML = "Ibukota Provinsi Papua adalah Kota Jayapura yang terdiri dari satu kota (Jayapura) dan delapan kabupaten, yaitu Kabupaten Jayapura, Sarmi, Keerom, Memberamo Raya, Waropen, Kepulauan Yapen, Biak Numfor, dan Supiori. Terdapat lebih dari 3 juta jiwa penduduk Provinsi Papua pada tahun 2019.";              
        detail.href = "papua.html";
    
    } else if (clicked_id == "papua-selatan") {
        judul.innerHTML = "Provinsi Papua Selatan";
        subjudul.innerHTML = "Ada berapa kabupaten di Papua Selatan?";
        deskripsi.innerHTML = "Provinsi Papua Selatan memiliki lima kabuaten, yaitu Kabupaten Asmat, Boven Digoel, Mappi, Pegunungan Bintang, dan Kabupaten Merauke. Provinsi ini berbatasan dengan Negara Papua Nugini di sebelah timur dan beberapa kabupaten di sebelah utara.";
        detail.href = "papua-selatan.html";
    
    } else if (clicked_id == "papua-pegunungan") {
        judul.innerHTML = "Provinsi Papua Pegunungan";
        subjudul.innerHTML = "Dimana letak Papua Pegunungan?";
        deskripsi.innerHTML = "Papua Pegunungan terletak di antara Provinsi Papua, Papua Tengah, dan Papua Selatan. Menjadikannya sebagai wilayah yang tidak berbatasan dengan perairan. Di kabupaten ini terdapat delapan kabupaten dan dihuni oleh 23 suku, di antaranya suku Dani, Dem, dan Himanggona.";
        detail.href = "papua-pegunungan.html";
    
    } else if (clicked_id == "papua-barat") {
        judul.innerHTML = "Provinsi Papua Barat";
        subjudul.innerHTML = "Sejarah unik Papua Barat";
        deskripsi.innerHTML = "Sebelum dinamakan Papua Barat, provinsi ini bernama Irian Jaya yang terletak di ujung barat Pulau Papua. Perubahan nama Papua Barat disahkan pada tahun 2007 oleh DPR RI. Terdapat delapan kabupaten pada provinsi ini, di antaranya adalah kabupaten Fakfak dan Manokwari.";
        detail.href = "papua-barat.html";
    
    } else if (clicked_id == "papua-tengah") {
        judul.innerHTML = "Provinsi Papua Tengah";
        subjudul.innerHTML = "Apa Ibukota Papua Tengah?";
        deskripsi.innerHTML = "Ibukota Papua Tengah adalah Kabupaten Nabire. Selain Nabire, provinsi ini mencakup tujuh kabupaten lainnya, yaitu Kabupaten Puncak Jaya, Paniai, Mimika, Puncak, Dogiyai, Intan Jaya, dan Deiyai.";    
        detail.href = "papua-tengah.html";
    
    } 
}