const openNav = document.querySelector(".open-nav");
const navMenu = document.querySelector(".mobile__header__main__nav");
const hamburger = document.querySelector(".mobile__header__top__hamburger");
const header = document.querySelector(".mobile__header__main");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  header.classList.toggle("hide");
  header.classList.toggle("show");
});

openNav.addEventListener("click", () => {
  navMenu.classList.toggle("hide");
  navMenu.classList.toggle("show");
})