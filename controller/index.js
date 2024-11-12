// Função para validar o formulário de contato
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o envio do formulário padrão

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validação simples: verifica se todos os campos estão preenchidos
    if (name && email && message) {
      alert("Mensagem enviada com sucesso!");
      document.getElementById("contact-form").reset(); // Limpa o formulário após o envio
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });