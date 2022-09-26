const menu = document.querySelector(".menu-bar");
const navList = document.querySelector(".header__wrapper__nav");

menu.addEventListener("click", () => {
  menu.classList.toggle("change");
  navList.classList.toggle("show");
  navList.classList.toggle("hide");
});
