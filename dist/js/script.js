// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Humberger
const hamberger = document.querySelector("#humberger");
const navMenu = document.querySelector("#nav-menu");

humberger.addEventListener("click", function () {
  humberger.classList.toggle("humberger-active");
  navMenu.classList.toggle("hidden");
});

//Klik close humberger
window.addEventListener("click", function (e) {
  if (e.target != hamberger && e.target != navMenu) {
    hamberger.classList.remove("humberger-active");
    navMenu.classList.add("hidden");
  }
});
