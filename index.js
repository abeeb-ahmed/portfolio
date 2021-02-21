const nav = document.querySelector("nav");
const preloader = document.getElementById("preloader");
const navHeight = nav.offsetTop;
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ defaults: { ease: "power2" } });
const sections = gsap.utils.toArray(".fade-in");
const stickyNav = () => {
  window.pageYOffset > navHeight
    ? document.querySelector("nav").classList.add("navShadow")
    : document.querySelector("nav").classList.remove("navShadow");
};
window.onscroll = () => {
  stickyNav();
};

// Typewriter Effect
const typed = new Typed(".typed", {
  strings: [
    "Full Stack Web Developer",
    "Mobile App Developer",
    "UI/UX Designer",
    "Digital Marketer",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 60,
});
//Toggle Menu
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("menu-toggle").classList.toggle("closeMenu");
  document.querySelector("ul").classList.toggle("showMenu");

  const list = document.querySelectorAll("li");
  list.forEach((li) => {
    li.addEventListener("click", () => {
      document.getElementById("menu-toggle").classList.remove("closeMenu");
      document.querySelector("ul").classList.remove("showMenu");
    });
  });
});
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.8) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

window.addEventListener("load", () => {
  //  Page Loder
  preloader.style.opacity = "0";
  preloader.style.display = "none";
  // Gsap animation
  ScrollTrigger.matchMedia({
    "(min-width: 760px)": function () {
      tl.fromTo(
        ".home-left, .socials",
        { x: -400, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        "-=0.2"
      ).fromTo(
        ".home-img",
        { x: 400, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        "-=0.2"
      );
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 200 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: section,
              start: "top bottom-=50px",
            },
          }
        );
      });
    },
    "(max-width: 760px)": function () {
      tl.fromTo(
        ".home-left, .socials",
        { x: -400, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        "-=0.2"
      ).fromTo(
        ".home-img",
        { x: 400, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        "-=0.2"
      );
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 200 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: section,
              start: "top center",
            },
          }
        );
      });
    },
  });
});
