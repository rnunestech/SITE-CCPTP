class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    this.messageArea = null;

    if (this.form) {
      this.url = this.form.getAttribute("action");
      this.createMessageArea();
      this.form.addEventListener("submit", (e) => this.sendForm(e));
    }
  }

  // Cria uma área para mostrar mensagens
  createMessageArea() {
    this.messageArea = document.createElement("div");
    this.messageArea.style.textAlign = "center";
    this.messageArea.style.marginBottom = "1rem";
    this.form.parentNode.insertBefore(this.messageArea, this.form);
  }

  // Exibe mensagem de sucesso ou erro
  showMessage(message, isSuccess = true) {
    this.messageArea.innerHTML = `
      <p class="${isSuccess ? "success" : "error"}">${message}</p>
    `;
    this.formButton.disabled = false;
    this.formButton.innerText = "Enviar";

    // Remove mensagem após 5 segundos
    setTimeout(() => {
      this.messageArea.innerHTML = "";
    }, 5000);
  }

  // Captura dados do formulário
  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  // Atualiza botão antes do envio
  async onSubmission(event) {
    event.preventDefault();
    this.formButton.disabled = true;
    this.formButton.innerText = "✉️ Enviando...";
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  // Envia o formulário via fetch
  async sendForm(event) {
    await this.onSubmission(event);

    try {
      const response = await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(this.getFormObject()).toString(),
      });

      if (response.ok) {
        this.showMessage("✅ Seu Pedido de Oração foi Enviado com Sucesso!");
        this.form.reset();
      } else {
        this.showMessage("❌ Não foi possível enviar sua mensagem!", false);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      this.showMessage("⚠️ Ocorreu um erro ao enviar. Tente novamente!", false);
    }
  }
}

// Inicializa o script
const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
});

// ===== MENU HAMBÚRGUER =====
document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("active");
      menuBtn.querySelector("i").classList.toggle("bx-x"); // alterna ícone
    });
  }
});
