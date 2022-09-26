const openNav = document.querySelector(".open-nav");
const navMenu = document.querySelector(".mobile__header__main__nav");
const hamburger = document.querySelector(".mobile__header__top__hamburger");
const header = document.querySelector(".mobile__header__main");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  header.classList.toggle("show");
  header.classList.toggle("hide");
});

openNav.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
