
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
