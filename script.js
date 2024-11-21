// Hero Section Animations
gsap.from("#hero h2", {
    duration: 1.5,
    y: -50,  // Se mueve en el eje Y
    opacity: 1,  // Mantiene la opacidad en 1
    ease: "power2.out"
});

gsap.from("#hero p", {
    duration: 1.5,
    opacity: 0,  // Comienza invisible
    y: 30,
    delay: 0.3,
    ease: "power3.out",
});

gsap.from("#hero button", {
    duration: 1.5,
    opacity: 0,
    scale: 0.8,
    delay: 0.6,
    ease: "elastic.out(1, 0.5)",
});

// Scroll Animations for Sections
gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
  });
});

// Swiper Initialization
const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuClose = document.getElementById("menu-close");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  gsap.fromTo(
    mobileMenu,
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 0.5 }
  );
});

menuClose.addEventListener("click", () => {
  gsap.to(mobileMenu, {
    opacity: 0,
    x: 100,
    duration: 0.5,
    onComplete: () => mobileMenu.classList.add("hidden"),
  });
});

// Close menu when clicking on links
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    gsap.to(mobileMenu, {
      opacity: 0,
      x: 100,
      duration: 0.5,
      onComplete: () => mobileMenu.classList.add("hidden"),
    });
  });
});

// Form Submission
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Formulario enviado con éxito. ¡Gracias por contactarme!");
});
