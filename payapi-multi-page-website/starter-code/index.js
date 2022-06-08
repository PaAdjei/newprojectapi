const mobileMenu = document.querySelector(".toggle_btn");
const navLink = document.querySelector(".nav_links");

mobileMenu.addEventListener("click", () => {
  navLink.classList.toggle("active");
});
console.log("hey");
