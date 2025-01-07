document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o comportamento padrão do formulário

    // Inicialize o EmailJS com sua User ID
    emailjs.init("SUA_USER_ID");

    // Obtenha os dados do formulário
    const formData = new FormData(this);

    // Converta os dados para um objeto
    const data = Object.fromEntries(formData.entries());

    // Envie o e-mail usando EmailJS
    emailjs
      .send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", data)
      .then(() => {
        alert("E-mail enviado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao enviar e-mail:", error);
        alert("Houve um erro ao enviar o e-mail.");
      });
  });
