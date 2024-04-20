document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua gambar dalam galeri
    var images = document.querySelectorAll('.gallery img');
    
    // Tambahkan event listener untuk setiap gambar
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            // Di sini Anda bisa menentukan apa yang ingin dilakukan ketika gambar diklik
            // Contohnya, bisa menampilkan gambar dalam ukuran yang lebih besar atau membuka tautan terkait
            console.log('Gambar ' + image.alt + ' telah diklik.');
        });
    });
});
