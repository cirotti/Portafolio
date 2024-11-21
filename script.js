// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from("#hero h2", {
  duration: 1.5,
  y: -50,
  opacity: 0,
  ease: "power2.out"
});

gsap.from("#hero p", {
  duration: 1.5,
  y: 50,
  opacity: 0,
  delay: 0.3,
  ease: "power2.out"
});

gsap.from("#hero button", {
  duration: 1.5,
  scale: 0.8,
  opacity: 0,
  delay: 0.6,
  ease: "elastic.out(1, 0.3)"
});

// Scroll Animations for sections
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
      markers: false
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
});

// Swiper initialization for Projects Carousel
const swiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 'auto',
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
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
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

// Mobile Menu Toggle Functionality
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuClose = document.getElementById("menu-close");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  gsap.fromTo(mobileMenu, {opacity: 0, x: 100}, {opacity: 1, x: 0, duration: 0.5});
});

menuClose.addEventListener("click", () => {
  gsap.to(mobileMenu, {opacity: 0, x: -100, duration: 0.5, onComplete: () => mobileMenu.classList.add("hidden")});
});

// Close mobile menu when clicking on links
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    gsap.to(mobileMenu, {opacity: 0, x: -100, duration: 0.5, onComplete: () => mobileMenu.classList.add("hidden")});
  });
});

// Form Submission (this is a simple mock function)
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Formulario enviado con éxito. Te contactaré pronto.");
});
