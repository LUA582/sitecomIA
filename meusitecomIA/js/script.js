// Função principal que é executada quando a página carrega
document.addEventListener("DOMContentLoaded", () => {
    // Manipulação do formulário de contato
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Exibe uma mensagem de sucesso
        alert("Mensagem enviada com sucesso! Obrigada pelo contato, Luana!");

        // Limpa os campos do formulário após o envio
        form.reset();
    });

    // Adiciona uma animação ao título principal
    const heroTitle = document.querySelector("header.hero h1");
    heroTitle.style.transition = "transform 0.5s ease";
    heroTitle.style.transform = "scale(1.1)";

    // Adiciona uma animação às habilidades ao passar o mouse
    const skillItems = document.querySelectorAll("#skills li");
    skillItems.forEach((item) => {
        item.style.transition = "transform 0.3s ease, color 0.3s ease";

        item.addEventListener("mouseenter", () => {
            item.style.transform = "translateY(-5px)";
            item.style.color = "#ff69b4"; // Rosa Barbie
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "translateY(0)";
            item.style.color = "#333"; // Cor original
        });
    });

    // Adiciona uma animação aos projetos ao clicar
    const projectItems = document.querySelectorAll("#projects li");
    projectItems.forEach((item) => {
        item.style.cursor = "pointer"; // Altera o cursor para indicar que é clicável

        item.addEventListener("click", () => {
            alert(`Você clicou no projeto: ${item.textContent}`);
        });
    });
});