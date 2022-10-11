const menu = document.querySelector(".header__mobile__left__hamburger");
const navList = document.querySelector(".header__mobile__left__nav");

menu.addEventListener("click", () => {
  menu.classList.toggle("change");
  navList.classList.toggle("hide");
  navList.classList.toggle("show");
});
