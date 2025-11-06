const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

// Reiniciar o quiz
btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";
  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

// Quando clica numa resposta
function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

// Mostra o resultado final
function finish() {
  let message = `Você acertou ${questionsCorrect} de ${questions.length}.`;
  let extraMessage = "";
  let performanceClass = "";

  if (questionsCorrect === questions.length) {
    extraMessage = "🎉 Parabéns, você acertou tudo! Mas, não deixe de Estudar a Palavra de Deus.";
    performanceClass = "excelente";
  } else if (questionsCorrect >= questions.length * 0.7) {
    extraMessage = "👏 Muito bem! Continue aprendendo mais sobre a Palavra de Deus.";
    performanceClass = "bom";
  } else {
    extraMessage = "📖 Você precisa estudar mais a Bíblia, vai para Escola Bíblica.";
    performanceClass = "ruim";
  }

  // Exibe o texto final formatado
  textFinish.innerHTML = `
    <span class="pontuacao">${message}</span><br>
    <span class="mensagem ${performanceClass}">${extraMessage}</span>
  `;

  content.style.display = "none";
  contentFinish.style.display = "flex";
}

// Carrega uma questão
function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <button class="answer" data-correct="${answer.correct}">
        ${answer.option}
      </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

// Inicializa o quiz
loadQuestion();

// ===== MENU HAMBÚRGUER =====
document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("active");
      menuBtn.querySelector("i").classList.toggle("bx-x");
    });
  }
});
