(function() {
    emailjs.init("YOUR_USER_ID"); // Ganti dengan User ID dari EmailJS
})();

// Tambahkan event listener ke form
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah refresh halaman

    // Kirim form menggunakan EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert("Email berhasil dikirim!");
        }, function(error) {
            alert("Gagal mengirim email: " + JSON.stringify(error));
        });
});

// Ambil elemen button
const scrollToTopBtn = document.getElementById('scrollToTop');

// Tampilkan tombol ketika scroll ke bawah
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Scroll ke atas saat tombol diklik
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Animasi scroll
    });
});
