const menu = document.querySelector(".menu-hamburger");
const navMenu = document.querySelector("header nav");

AOS.init();

menu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

console.log('Iniciando')