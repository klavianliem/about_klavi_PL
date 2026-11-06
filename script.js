document.addEventListener("DOMContentLoaded", () => {
  // --- DICTIONARY BAHASA (ID / EN) ---
  const translations = {
    id: {
      navHome: "Home",
      navAbout: "About",
      navProjects: "Projects",
      navContact: "Contact",
      heroSys: "> SYSTEM INITIALIZED...",
      heroRole: "WEB DEVELOPER & GAME DESIGNER",
      heroDesc: "Membangun pengalaman digital masa depan dengan nuansa estetik retro-futuristik.",
      heroBtn: "Lihat Selengkapnya",
      aboutTitle: "// DESKRIPSI TENTANG SAYA",
      aboutDesc: "Halo! Saya Klavian. Saya berfokus pada pengembangan aplikasi web modern, visual interaktif, dan desain game bertema sci-fi/cyberpunk. Menggabungkan kode yang efisien dengan seni visual masa lalu & masa depan.",
      galleryTitle: "// GALERI FOTO LANDSCAPE",
      projectsTitle: "// PROYEK UNGGULAN",
      p1Desc: "Game bertema cyberpunk retro 80-an yang dikembangkan menggunakan Unity engine.",
      p2Desc: "Aplikasi web interaktif dengan statistik visualisasi real-time berbasis WebGL.",
      p3Desc: "Aplikasi audio synthesizer berbasis browser menggunakan Web Audio API.",
      btnProjectDetail: "Lihat Detail Proyek",
      btnDetail: "Detail",
      ctaTitle: "Ingin Mengenal Lebih Jauh?",
      ctaDesc: "Pelajari latar belakang, keahlian, dan perjalanan karir saya di halaman About.",
      ctaBtn: "Lihat Lebih Lengkap di About",
      footerText: "Dibuat oleh <strong>Klavian</strong> tahun 2026 &copy; Klavi DevSpace",
      
      // Page About Detail
      aboutPageTitle: "// TENTANG KLAVIAN",
      aboutSysProf: "Sistem Profile v2.6",
      aboutText1: "Halo! Saya Klavian, seorang Web Developer dan Game Designer yang terobsesi dengan estetika retro-futurisme, neon, serta interface sci-fi masa lalu.",
      aboutText2: "Memulai perjalanan coding sejak usia muda, saya berusaha menciptakan kombinasi sempurna antara desain visual yang berani dan arsitektur kode yang bersih.",
      skillMatrixTitle: "Skill Matrix"
    },
    en: {
      navHome: "Home",
      navAbout: "About",
      navProjects: "Projects",
      navContact: "Contact",
      heroSys: "> SYSTEM INITIALIZED...",
      heroRole: "WEB DEVELOPER & GAME DESIGNER",
      heroDesc: "Building futuristic digital experiences with retro-futuristic aesthetic vibes.",
      heroBtn: "Read More",
      aboutTitle: "// ABOUT ME DESCRIPTION",
      aboutDesc: "Hello! I am Klavian. I focus on developing modern web applications, interactive visuals, and sci-fi/cyberpunk themed game design. Combining clean code with visual art of the past & future.",
      galleryTitle: "// LANDSCAPE PHOTO GALLERY",
      projectsTitle: "// FEATURED PROJECTS",
      p1Desc: "An 80s retro-cyberpunk RPG developed using the Unity engine.",
      p2Desc: "Interactive web app with real-time statistical visualization powered by WebGL.",
      p3Desc: "Browser-based audio synthesizer app built with Web Audio API.",
      btnProjectDetail: "View Project Detail",
      btnDetail: "Detail",
      ctaTitle: "Want to Know More?",
      ctaDesc: "Learn about my background, skillsets, and career journey on the About page.",
      ctaBtn: "Explore More on About Page",
      footerText: "Created by <strong>Klavian</strong> in 2026 &copy; Klavi DevSpace",

      // Page About Detail
      aboutPageTitle: "// ABOUT KLAVIAN",
      aboutSysProf: "Profile System v2.6",
      aboutText1: "Hello! I'm Klavian, a Web Developer and Game Designer obsessed with retro-futurism aesthetics, neon, and vintage sci-fi interfaces.",
      aboutText2: "Starting my coding journey at a young age, I aim to create the perfect blend of bold visual design and clean code architecture.",
      skillMatrixTitle: "Skill Matrix"
    }
  };

  // --- DARK / LIGHT MODE ---
  const themeToggleBtn = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("theme") || "dark";

  if (currentTheme === "light") {
    document.body.classList.add("light-mode");
    if (themeToggleBtn) themeToggleBtn.textContent = "☀️ Light Mode";
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      let isLight = document.body.classList.contains("light-mode");
      localStorage.setItem("theme", isLight ? "light" : "dark");
      themeToggleBtn.textContent = isLight ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
  }

  // --- TRANSLATE (ID / EN) ---
  const langToggleBtn = document.getElementById("langToggle");
  let currentLang = localStorage.getItem("lang") || "id";

  function applyLanguage(lang) {
    const langData = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (langData[key]) {
        el.innerHTML = langData[key];
      }
    });
    if (langToggleBtn) {
      langToggleBtn.textContent = lang.toUpperCase();
    }
  }

  applyLanguage(currentLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "id" ? "en" : "id";
      localStorage.setItem("lang", currentLang);
      applyLanguage(currentLang);
    });
  }

  // --- SCROLL TO TOP ---
  const scrollTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
