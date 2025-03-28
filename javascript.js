document.addEventListener("DOMContentLoaded", function () {
  console.log("Script geladen!"); // Controleert of het script werkt



const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

const body = document.body;


if (!hamMenu || !offScreenMenu) {
  console.error("Elementen niet gevonden!"); // Check of de elementen bestaan
  return;
}

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});