// Função para registrar um aluno
function registrarAluno(event) {
    event.preventDefault();

    const nome = getInputValue('nome');
    const matricula = getInputValue('matricula');
    const nota1 = parseFloat(getInputValue('nota1'));
    const nota2 = parseFloat(getInputValue('nota2'));

    const media = calcularMedia(nota1, nota2);
    const situacao = determinarSituacao(media);

    const linha = criarLinhaTabela(nome, matricula, nota1, nota2, media, situacao);
    adicionarLinhaTabela(linha);
    limparCamposFormulario();
}

// Função para obter o valor de um campo de entrada
function getInputValue(id) {
    return document.getElementById(id).value;
}

// Função para calcular a média das notas
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// Função para determinar a situação do aluno
function determinarSituacao(media) {
    return media >= 5 ? "Aprovado" : "Reprovado";
}

// Função para criar uma linha na tabela
function criarLinhaTabela(nome, matricula, nota1, nota2, media, situacao) {
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${matricula}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${media.toFixed(2)}</td>
        <td>${situacao}</td>
    `;
    return linha;
}

// Função para adicionar uma linha na tabela
function adicionarLinhaTabela(linha) {
    const tbody = document.querySelector('#tabela tbody');
    tbody.appendChild(linha);
}

// Função para limpar os campos do formulário
function limparCamposFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('matricula').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
}

// Adicionando eventos aos elementos do DOM
document.getElementById('formulario').addEventListener('submit', registrarAluno);
