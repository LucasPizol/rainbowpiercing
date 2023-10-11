window.addEventListener("scroll", () => {
  if (window.scrollY >= 600) {
    document.querySelector(".header-nav").classList.add("activeHeader");
    document.querySelector(".header-content").classList.add("activeHeader");

    return
  } 

  document.querySelector(".header-nav").classList.remove("activeHeader");
  document.querySelector(".header-content").classList.remove("activeHeader");
  document.querySelector(".header-nav nav").classList.remove("activeNav")

});


document.querySelector(".expand-btn").addEventListener('click', () => {
    document.querySelector(".header-nav nav").classList.toggle("activeNav")
    document.querySelector(".expand-btn").classList.toggle("activeNav")

})


document.querySelector(".home-main-grid").addEventListener('click', () => {
    document.querySelector(".header-nav nav").classList.remove("activeNav")
    document.querySelector(".expand-btn").classList.remove("activeNav")

})