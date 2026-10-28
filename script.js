
// adicionar letra or letra
const texto = "Desenvolvedora Full-Stack & Entusiasta da Segurança da Informação";

const elemento = document.getElementById("typing-text");

let indice = 0;

function escreverTexto() {
    if (indice < texto.length) {
        elemento.textContent += texto.charAt(indice);
        indice++;

        setTimeout(escreverTexto, 60);
    }
}

escreverTexto();



// menu hamburguer


const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );

    menuIcon.classList.toggle("fa-bars", !isOpen);
    menuIcon.classList.toggle("fa-xmark", isOpen);
});

// Fechar o menu depois de clicar num link
navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    });
});
