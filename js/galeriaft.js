// Seleciona o modal e os elementos internos
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgModal");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("fechar")[0];

// Pega todas as imagens da galeria
const imagens = document.querySelectorAll(".galeria .foto img");

// Adiciona evento de clique a cada imagem
imagens.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

// Fecha o modal ao clicar no "x"
span.onclick = function() {
  modal.style.display = "none";
};

// Fecha ao clicar fora da imagem
modal.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// ===== MENU HAMBÚRGUER =====
document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("active");
      menuBtn.querySelector("i").classList.toggle("bx-x"); // alterna o ícone
    });
  }
});
