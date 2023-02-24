let resultado = document.querySelector(".resultado");
let botaoSomar = document.querySelector(".botaoSomar");
let botaoSubtrair = document.querySelector(".botaoSubtrair");
let botaoDividir = document.querySelector(".botaoDividir");
let botaoMultiplicar = document.querySelector(".botaoMultiplicar");
let botaoElevarQuadrado = document.querySelector(".botaoElevarQuadrado");
let botaoRaiz = document.querySelector(".botaoRaiz");
let simboloParenteseEsquerdo = document.querySelector(
  ".simboloParenteEsquerdo"
);
let simboloParenteseDireito = document.querySelector(
  ".simboloParenteseDireito"
);
let sinalIgual = document.querySelector(".sinalIgual");
let botaoPorcentagem = document.querySelector(".botaoPorcentagem");
let botaoVirgula = document.querySelector(".botaoVirgula");
let botaoRefazer = document.querySelector(".botaoRefazer");
let botaoLimpar = document.querySelector(".botaoLimpar");

const numbers = [
  document.querySelector("#n1"),
  document.querySelector("#n2"),
  document.querySelector("#n3"),
  document.querySelector("#n4"),
  document.querySelector("#n5"),
  document.querySelector("#n6"),
  document.querySelector("#n7"),
  document.querySelector("#n8"),
  document.querySelector("#n9"),
];

let numbersClicked = [];
let novoArray = [];
let calculo = 0;
let limparArray = () => {
  novoArray.push(Number(numbersClicked.join("")));
  while (numbersClicked.length) numbersClicked.pop();
  console.log(novoArray);
}

numbers.forEach((numbersValue) => {
  numbersValue.addEventListener("click", () => {
    if (resultado.textContent.includes(0)) resultado.textContent = ""
    numbersClicked.push(Number(numbersValue.textContent));
    resultado.insertAdjacentText("beforeend", numbersValue.textContent);
    console.log(numbersClicked);
  });
});

botaoSomar.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", " + ");
  limparArray()
});
botaoSubtrair.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", " - ");
  limparArray()
});
botaoDividir.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", " / ");
  limparArray()
});
botaoMultiplicar.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", " * ");
  limparArray()
});
botaoElevarQuadrado.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", " ^ ");
  limparArray()
});
botaoPorcentagem.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", " % ");
  limparArray()
});
botaoRaiz.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", "√");
  limparArray()
});
botaoVirgula.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", simbols.botaoVirgula.textContent);
  numbersClicked.push(simbols.botaoVirgula.textContent);
});
sinalIgual.addEventListener("click", () => {
  if (resultado.textContent.includes(botaoSomar.textContent)) {
    novoArray.push(Number(numbersClicked.join("")));
    novoArray.forEach((elemento) => (calculo += elemento));
  } else if (resultado.textContent.includes(botaoSubtrair.textContent)) {
    novoArray.push(Number(numbersClicked.join("")));
    novoArray.forEach((elemento) => (calculo -= elemento));
  } else if (resultado.textContent.includes(botaoDividir.textContent)) {
    console.log("Tem o sinal de dividir");
    novoArray.push(Number(numbersClicked.join("")));
    novoArray.forEach((elemento) => (calculo /= elemento));
  } else if (resultado.textContent.includes(botaoMultiplicar.textContent)) {
    console.log("Tem o botão de multiplicar");
    novoArray.push(Number(numbersClicked.join("")));
    novoArray.forEach((elemento) => (calculo *= elemento));
  } else console.log("Erro");

  resultado.insertAdjacentText("beforeend", ` = ${calculo}`);
});

//RESOLVIDO
botaoLimpar.addEventListener("click", () => {
  resultado.textContent = "0";
  while (numbersClicked.length) numbersClicked.pop();
  while (novoArray.length) novoArray.pop();
  calculo = 0;
});
