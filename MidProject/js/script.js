// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// Ambil semua gambar di dalam galeri
const galleryImages = document.querySelectorAll('.gallery-images img');

// Tambahkan event listener untuk setiap gambar
galleryImages.forEach(img => {
  // Tambahkan event listener untuk event mouseenter (saat kursor masuk)
  img.addEventListener('mouseenter', () => {
    // Ubah properti transform untuk memperbesar gambar
    img.style.transform = 'scale(1.1)';
    // Tambahkan transisi agar animasi lebih halus
    img.style.transition = 'transform 0.3s ease-in-out';
  });

  // Tambahkan event listener untuk event mouseleave (saat kursor keluar)
  img.addEventListener('mouseleave', () => {
    // Kembalikan properti transform ke nilai awal
    img.style.transform = 'scale(1)';
  });
});


// Ambil elemen gambar
const floatingImage = document.getElementById('floating-image');

// Definisikan fungsi untuk mengatur animasi melayang
function floatAnimation() {
  // Atur posisi awal
  floatingImage.style.position = 'relative';
  let distance = 20; // Jarak melayang (dalam px)
  let duration = 2000; // Durasi animasi (dalam ms)
  
  // Buat interval untuk animasi
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;
    let translateY = Math.sin(progress / duration * Math.PI * 2) * distance;
    floatingImage.style.transform = `translateY(${translateY}px)`;
    if (progress < duration) {
      window.requestAnimationFrame(step);
    } else {
      start = null;
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

// Panggil fungsi animasi saat halaman dimuat
window.addEventListener('load', floatAnimation);
