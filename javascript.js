
/*console.log("Script geladen!"); 

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script geladen!"); // Controleert of het script werkt
}


const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

const body = document.body;


if (!hamMenu || !offScreenMenu) {
  console.error("Elementen niet gevonden!"); // Check of de elementen bestaan
  return;
}

if (!offScreenMenu) {
  console.error("⚠️ FOUT: .off-screen-menu niet gevonden!");
}

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});*/


console.log("Script geladen!"); // Controleert of het script wordt uitgevoerd

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is geladen!"); // Controleert of de HTML klaar is

  const hamMenu = document.querySelector(".ham-menu");
  const offScreenMenu = document.querySelector(".off-screen-menu");

  if (!hamMenu) {
    console.error("⚠️ FOUT: .ham-menu niet gevonden!");
  }
  if (!offScreenMenu) {
    console.error("⚠️ FOUT: .off-screen-menu niet gevonden!");
  }

  hamMenu.addEventListener("click", function () {
    console.log("✅ Hamburger menu geklikt!");
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  });
});