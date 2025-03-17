// Selecionando elementos
const texto = document.getElementById("texto");
const btnTrocarTexto = document.getElementById("btnTrocarTexto");
const btnMudarCor = document.getElementById("btnMudarCor");
const btnToggle = document.getElementById("btnToggle");
const btnAdicionar = document.getElementById("btnAdicionar");
const container = document.getElementById("container");

// Alterar o texto do parágrafo
btnTrocarTexto.addEventListener("click", () => {
    texto.textContent = "O texto foi modificado!";
});

// Mudar a cor do parágrafo
btnMudarCor.addEventListener("click", () => {
    texto.classList.toggle("destacado"); // Adiciona ou remove a classe
});

// Esconder/Mostrar o texto
btnToggle.addEventListener("click", () => {
    texto.classList.toggle("oculto");
});

// Adicionar um novo elemento dinamicamente
btnAdicionar.addEventListener("click", () => {
    let novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Novo elemento adicionado!";
    container.appendChild(novoParagrafo);
});

//ADIÇÕES DE DESAFIO!!!!

//Pode ser assim "document.getElementById('btnMudarFundo')" ou assim logo abaixo
btnMudarFundo.addEventListener("click", () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

//Adiciona e ocula um input e botão de confirmar para o usuário adicionar um texto que aparece na página
btnCampoUser.addEventListener("click", () => {
    let campouser = document.getElementById("campouser");
    
    let input = document.createElement("input");
    input.type = "text";
    input.id = "campouser";
    input.placeholder = "Digite xuxa";

    let btnConfirmar = document.createElement("button");
    btnConfirmar.innerText = "Confirmar";

    btnConfirmar.addEventListener("click", () => {
        let textoDigitado = input.value.trim();

        if (textoDigitado !== ""){
            let mensagem = document.getElementById("mensagemTexto");

            if(mensagem){
                mensagem.innerText = "Você digitou o seguinte: " + textoDigitado;
            }
            else{
                mensagem = document.createElement("p");
                mensagem.id = "mensagemTexto";
                mensagem.innerText = "Você digitou o seguinte: " + textoDigitado;
                campouser.appendChild(mensagem);
            }
            input.remove();
            btnConfirmar.remove();
        }
    });

    campouser.appendChild(input);
    campouser.appendChild(btnConfirmar);
});

//Remover elementos adicionados
btnRemover.addEventListener("click", () => {
    let container = document.getElementById("container");
    let paragrafoARemover = container.querySelector("p:last-child");

    if(paragrafoARemover){
        paragrafoARemover.remove();
    }
});