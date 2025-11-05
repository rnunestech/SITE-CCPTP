// Script do menu hambúrguer (funciona só no mobile)
document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.querySelector("i").classList.toggle("bx-x"); // alterna o ícone
  });
});

// Função que troca a imagem principal ao clicar nas miniaturas
function slider(imageSrc) {
  const mainImage = document.querySelector(".home-img img");
  mainImage.classList.add("fade");
  setTimeout(() => {
    mainImage.src = imageSrc;
    mainImage.classList.remove("fade");
  }, 200);
}
