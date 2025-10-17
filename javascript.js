
  const hammenu = document.querySelector(".hammenu");
  const grootmenu = document.querySelector(".grootmenu");

  hammenu.addEventListener("click", function () {
 
    hammenu.classList.toggle("active");
    grootmenu.classList.toggle("active");
  });