const casas = [{
    nome: "Casa 1",
    imagem: "imagens/casa1.jpg",
    descricao: "Localizada em Morro Branco, no Ceará, a Casa 1 oferece uma experiência única à beira-mar...",
    cidade: "morro-branco"
},
{
    nome: "Casa 2",
    imagem: "imagens/casa2.jpg",
    descricao: "A Casa 2, situada em Morro Branco, é o refúgio ideal para quem busca tranquilidade...",
    cidade: "morro-branco"
},
{
    nome: "Casa 3",
    imagem: "imagens/casa3.jpg",
    descricao: "Se você procura por uma casa espaçosa e luxuosa em Cumbuco, a Casa 3 é a escolha perfeita...",
    cidade: "cumbuco"
},
{
    nome: "Casa 4",
    imagem: "imagens/casa1.jpg",
    descricao: "Localizada em Cumbuco, no Ceará, a Casa 4 oferece uma experiência única à beira-mar...",
    cidade: "cumbuco"
},
{
    nome: "Casa 5",
    imagem: "imagens/casa2.jpg",
    descricao: "A Casa 5, situada em Caponga, é o refúgio ideal para quem busca tranquilidade...",
    cidade: "caponga"
},
{
    nome: "Casa 6",
    imagem: "imagens/casa3.jpg",
    descricao: "Se você procura por uma casa espaçosa e luxuosa em Caponga, a Casa 6 é a escolha perfeita...",
    cidade: "caponga"
},
{
    nome: "Casa 7",
    imagem: "imagens/casa2.jpg",
    descricao: "A Casa 7, situada em Caponga, é o refúgio ideal para quem busca tranquilidade...",
    cidade: "caponga"
},
];


const casasContainer = document.getElementById("casas-container");
const modal = document.getElementById("modal");
const modalCidade = document.getElementById("modal-cidade");
const descricaoCasa = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const linkWhatsApp = document.getElementById("link-whatsapp");
const abrirSeletorCidade = document.getElementById("abrir-seletor-cidade");
const closeButtons = document.querySelectorAll(".close-button");

function exibirCasas(cidade) {
casasContainer.innerHTML = "";

casas.forEach((casa) => {
    if (cidade === "geral" || casa.cidade === cidade) {
        const casaCard = document.createElement("div");
        casaCard.classList.add("casa-card");
        casaCard.dataset.cidade = casa.cidade;
        casaCard.innerHTML = `
      <img src="${casa.imagem}" alt="${casa.nome}">
      <h3>${casa.nome}</h3>
      <p>${casa.descricao}</p>
      <a href="#" class="saiba-mais">Saiba Mais</a>
    `;
        casasContainer.appendChild(casaCard);

        // Evento do botão "Saiba Mais"
        const saibaMaisLink = casaCard.querySelector(".saiba-mais");
        saibaMaisLink.addEventListener("click", (event) => {
            event.preventDefault();
            modal.style.display = "block";
            modalImage.src = casa.imagem;
            modalImage.alt = casa.nome;
            descricaoCasa.innerHTML = `
        <h2>${casa.nome}</h2>
        <p>${casa.descricao}</p>
      `;
            // Ajusta o link do WhatsApp com mensagem personalizada
            linkWhatsApp.href = `https://api.whatsapp.com/send?phone=5588998421617&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20${encodeURIComponent(
        casa.nome
      )}`;
        });
    }
});
}

// Exibe todas as casas ao carregar
exibirCasas("geral");

// Abre o seletor de cidades
abrirSeletorCidade.addEventListener("click", () => {
modalCidade.style.display = "block";
});

// Fecha modais ao clicar nos botões "x"
closeButtons.forEach((btn) => {
btn.addEventListener("click", () => {
    modal.style.display = "none";
    modalCidade.style.display = "none";
});
});

// Fecha modais ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
if (event.target === modal || event.target === modalCidade) {
    modal.style.display = "none";
    modalCidade.style.display = "none";
}
});

// Ao clicar em uma cidade no modal-cidade
modalCidade.addEventListener("click", (event) => {
if (event.target.tagName === "A") {
    const cidade = event.target.dataset.cidade;
    exibirCasas(cidade);
    modalCidade.style.display = "none";
}
});

