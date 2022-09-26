const menu = document.querySelector(".header__left__hamburger");
const navList = document.querySelector(".header__holder__nav");

menu.addEventListener("click", () => {
  menu.classList.toggle("change");
  navList.classList.toggle("show");
  navList.classList.toggle("hide");
});
