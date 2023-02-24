const resultado = document.querySelector(".resultado");
const botaoSomar = document.querySelector(".botaoSomar");
const botaoSubtrair = document.querySelector(".botaoSubtrair");
const botaoDividir = document.querySelector(".botaoDividir");
const botaoMultiplicar = document.querySelector(".botaoMultiplicar");
const botaoElevarQuadrado = document.querySelector(".botaoElevarQuadrado");
const botaoRaiz = document.querySelector(".botaoRaiz");
const simboloParenteseEsquerdo = document.querySelector(
  ".simboloParenteEsquerdo"
);
const simboloParenteseDireito = document.querySelector(
  ".simboloParenteseDireito"
);
const sinalIgual = document.querySelector(".sinalIgual");
const botaoPorcentagem = document.querySelector(".botaoPorcentagem");
const botaoVirgula = document.querySelector(".botaoVirgula");
const botaoLimpar = document.querySelector(".botaoLimpar");

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

const numbersClicked = [];
const novoArray = [];
let calculo = 0;
const limparArray = () => {
  novoArray.push(Number(numbersClicked.join("")));
  while (numbersClicked.length) numbersClicked.pop();
  console.log(novoArray);
};

numbers.forEach((numbersValue) => {
  numbersValue.addEventListener("click", () => {
    if (resultado.textContent.includes(0)) resultado.textContent = "";
    numbersClicked.push(Number(numbersValue.textContent));
    resultado.insertAdjacentText("beforeend", numbersValue.textContent);
    console.log(numbersClicked);
  });
});

botaoSomar.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", " + ");
  limparArray();
});
botaoSubtrair.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", " - ");
  limparArray();
});
botaoDividir.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", " / ");
  limparArray();
});
botaoMultiplicar.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", " * ");
  limparArray();
});
botaoElevarQuadrado.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", " ^ ");
  limparArray();
});
botaoPorcentagem.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", " % ");
  limparArray();
});
botaoRaiz.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", "√");
  limparArray();
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

//  RESOLVIDO
botaoLimpar.addEventListener("click", () => {
  resultado.textContent = "0";
  while (numbersClicked.length) numbersClicked.pop();
  while (novoArray.length) novoArray.pop();
  calculo = 0;
});
