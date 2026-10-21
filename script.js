// Exercício 1
function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

let media = calcularMedia(8, 7, 9);
console.log("Média:", media);
if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// Exercício 2
function verificarTipo(variavel) {
  console.log("A variável é do tipo " + typeof variavel);
}

verificarTipo("Olá");
verificarTipo(10);
verificarTipo(true);

// Exercício 3
let idade = 18;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status);

// Exercício 4
let numero = 7;
for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + numero * i);
}

// Exercício 5
let diaSemana = 3;
switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}

// Exercício 6
const calcularArea = (base, altura) => {
  return base * altura;
};
console.log("Área:", calcularArea(5, 4));

// Exercício 7
let listaDeCompras = ["Arroz", "Feijão", "Batata"];
listaDeCompras.push("Macarrão");
listaDeCompras.unshift("Suco");
listaDeCompras.pop();
console.log("Lista final:", listaDeCompras);

// Exercício 8
const alunos = [
  { nome: "Ana", nota: 8.5, idade: 20 },
  { nome: "João", nota: 6.7, idade: 22 },
  { nome: "Maria", nota: 9.3, idade: 19 },
  { nome: "Carlos", nota: 5.0, idade: 21 },
  { nome: "Beatriz", nota: 7.8, idade: 20 }
];

let aprovados = alunos.filter(function(aluno) {
  return aluno.nota >= 7;
});

let nomesAlunos = alunos.map(function(aluno) {
  return aluno.nome;
});

let somaIdades = alunos.reduce(function(soma, aluno) {
  return soma + aluno.idade;
}, 0);
let mediaIdade = somaIdades / alunos.length;

let alunoEncontrado = alunos.find(function(aluno) {
  return aluno.nota < 6;
});

console.log("Aprovados:", aprovados);
console.log("Nomes:", nomesAlunos);
console.log("Média de idade:", mediaIdade);
console.log("Aluno com nota menor que 6:", alunoEncontrado);

// Exercício 9
let titulo = document.getElementById("titulo");
let btnMudar = document.getElementById("btnMudar");
btnMudar.addEventListener("click", function() {
  titulo.innerText = "Título Alterado com Sucesso!";
});

// Exercício 10
let contagem = 0;
let contador = document.getElementById("contador");
let btnIncrementar = document.getElementById("btnIncrementar");
btnIncrementar.addEventListener("click", function() {
  contagem = contagem + 1;
  contador.innerText = contagem;
});

// Exercício 11
let paragrafos = document.querySelectorAll(".paragrafo");
let btnDestacar = document.getElementById("btnDestacar");
btnDestacar.addEventListener("click", function() {
  paragrafos.forEach(function(paragrafo) {
    paragrafo.classList.add("destaque");
  });
});

// Exercício 12
let campoInput = document.getElementById("campoInput");
let textoRefletido = document.getElementById("textoRefletido");
campoInput.addEventListener("input", function() {
  textoRefletido.innerText = campoInput.value;
});

// Desafio final
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let btnSoma = document.getElementById("btnSoma");
let btnSub = document.getElementById("btnSub");
let btnMulti = document.getElementById("btnMulti");
let btnDiv = document.getElementById("btnDiv");
let resultado = document.getElementById("resultado");

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function calcular() {
  if (num1.value === "" || num2.value === "") {
    resultado.innerText = "Preencha os dois números";
    return null;
  }

  let a = Number(num1.value);
  let b = Number(num2.value);
  return [a, b];
}

btnSoma.addEventListener("click", function() {
  let numeros = calcular();
  if (numeros === null) return;
  resultado.innerText = somar(numeros[0], numeros[1]);
});

btnSub.addEventListener("click", function() {
  let numeros = calcular();
  if (numeros === null) return;
  resultado.innerText = subtrair(numeros[0], numeros[1]);
});

btnMulti.addEventListener("click", function() {
  let numeros = calcular();
  if (numeros === null) return;
  resultado.innerText = multiplicar(numeros[0], numeros[1]);
});

btnDiv.addEventListener("click", function() {
  let numeros = calcular();
  if (numeros === null) return;
  if (numeros[1] === 0) {
    resultado.innerText = "Não se divide por 0";
  } else {
    resultado.innerText = dividir(numeros[0], numeros[1]);
  }
});
