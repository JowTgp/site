
  const hammenu = document.querySelector(".hammenu");
  const zijmenu = document.querySelector(".zijmenu");

  hammenu.addEventListener("click", function () {
 
    hammenu.classList.toggle("active");
    zijmenu.classList.toggle("active");
  });