// ===== Scroll Halus Saat Klik Navigasi =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== Efek Muncul Saat Scroll (untuk section & kuis-card) =====
const elements = document.querySelectorAll("section, .kuis-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("muncul");
      observer.unobserve(entry.target); // agar animasi hanya sekali
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));

// Tambahkan efek ini ke CSS:
// section, .kuis-card { opacity: 0; transform: translateY(50px); transition: all 0.6s ease-out; }
// .muncul { opacity: 1; transform: translateY(0); }

// ===== Kontrol Tugas (Tampilkan/Sembunyikan Iframe) =====
const tugasSections = document.querySelectorAll("#tugas h3");
tugasSections.forEach(h3 => {
  h3.style.cursor = "pointer";
  h3.addEventListener("click", () => {
    const nextIframe = h3.nextElementSibling;
    if (nextIframe && nextIframe.tagName === "IFRAME") {
      nextIframe.style.display = (nextIframe.style.display === "none" || nextIframe.style.display === "") 
        ? "block" 
        : "none";
    }
  });
});
