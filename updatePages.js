// Importe o JSON com os dados dos elementos
const elementsData = require('elementos.json');


// Função para preencher as informações em uma página
function updatePageData(elementId) {
    const elementData = elementsData[elementId - 1];

    const nameSpan = document.querySelector('.name');
    nameSpan.textContent = elementData.name;

    const symbolSpan = document.querySelector('.symbol');
    symbolSpan.textContent = elementData.symbol;

    const atomicNumberSpan = document.querySelector('.atomic-number');
    atomicNumberSpan.textContent = elementData.atomicNumber;

    const atomicMassSpan = document.querySelector('.atomicMass');
    atomicMassSpan.textContent = elementData.atomicMass;

    const imgElement = document.querySelector('.img-element');
    imgElement.src = `caminho/para/imagem-${elementId}.jpg`;

    const imgCreator = document.querySelector('.img-creator img');
    imgCreator.src = `caminho/para/imagem-${elementId}.jpg`;

    const biographyDiv = document.querySelector('.biography');
    biographyDiv.textContent = elementData.biography;
}

// Iterar sobre as subpages de 1 a 118
for (let elementId = 1; elementId <= 118; elementId++) {
    const indexPagePath = `./${elementId}/index.html`; // Caminho para a subpage index.html

    // Criar um novo XMLHttpRequest para cada subpage
    const xhr = new XMLHttpRequest();
    xhr.open('GET', indexPagePath, true);

    // Quando o arquivo HTML for carregado, atualizar as informações
    xhr.onload = function () {
        if (xhr.status === 200) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(xhr.responseText, 'text/html');
            updatePageData(elementId, doc);
        }
    };

    // Enviar a requisição para carregar o arquivo HTML
    xhr.send();
}
