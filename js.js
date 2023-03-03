const resultado = document.querySelector("#resultado");

const simbols = {
  botaoSomar: document.querySelector("#botaoSomar"),
  botaoSubtrair: document.querySelector("#botaoSubtrair"),
  botaoDividir: document.querySelector("#botaoDividir"),
  botaoMultiplicar: document.querySelector("#botaoMultiplicar"),
  botaoExponenciar: document.querySelector("#botaoExponenciar"),
  botaoRaiz: document.querySelector("#botaoRaiz"),
  simboloParenteseEsquerdo: document.querySelector("#simboloParenteEsquerdo"),
  simboloParenteseDireito: document.querySelector("#simboloParenteseDireito"),
  sinalIgual: document.querySelector("#sinalIgual"),
  botaoPorcentagem: document.querySelector("#botaoPorcentagem"),
  botaoVirgula: document.querySelector("#botaoVirgula"),
  botaoLimpar: document.querySelector("#botaoLimpar"),
};

const numbers = [
  document.querySelector("#n0"),
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

let numbersClicked = 0;
let newNumberClicked = 0;
let primeiroValor = 0;
let novoValor = 0;
let calculo = 0;

numbers.forEach((numbersValue) => {
  numbersValue.addEventListener("click", () => {
    numbersClicked = Number(numbersValue.textContent);
    resultado.insertAdjacentText("beforeend", numbersValue.textContent);
    console.log(numbersClicked);
  });
});

function realocarValor() {
  newNumberClicked = Number(numbersClicked);
  numbersClicked = 0;
  console.log(newNumberClicked);
}

function conditions() {
  if (resultado.textContent.includes(simbols.botaoSomar.textContent)) {
    novoValor = Number(numbersClicked);
    primeiroValor = newNumberClicked;
    calculo = primeiroValor + novoValor;
  } else if (
    resultado.textContent.includes(simbols.botaoSubtrair.textContent)
  ) {
    novoValor = Number(numbersClicked);
    primeiroValor = newNumberClicked;
    calculo = primeiroValor - novoValor;
  } else if (resultado.textContent.includes(simbols.botaoDividir.textContent)) {
    novoValor = Number(numbersClicked);
    primeiroValor = newNumberClicked;
    calculo = primeiroValor / novoValor;
  } else if (
    resultado.textContent.includes(simbols.botaoMultiplicar.textContent)
  ) {
    novoValor = Number(numbersClicked);
    primeiroValor = newNumberClicked;
    calculo = primeiroValor * novoValor;
    novoValor = calculo;
  } else if (
    resultado.textContent.includes(simbols.botaoExponenciar.textContent)
  ) {
    novoValor = Number(numbersClicked);
    primeiroValor = newNumberClicked;
    calculo = primeiroValor ** novoValor;
    novoValor = calculo;
  } else console.log("Erro");
}

const operations = [
  simbols.botaoSomar.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", " + ");
    realocarValor();
  }),
  simbols.botaoSubtrair.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", " - ");
    realocarValor();
  }),
  simbols.botaoDividir.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", " / ");
    realocarValor();
  }),
  simbols.botaoMultiplicar.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", " x ");
    realocarValor();
  }),
  simbols.botaoExponenciar.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", " ^ ");
    realocarValor();
  }),
  simbols.botaoPorcentagem.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", " % ");
    realocarValor();
  }),
  simbols.botaoRaiz.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", "√");
    realocarValor();
  }),
  simbols.botaoVirgula.addEventListener("click", () => {
    if (resultado.textContent.includes(".")) return;
    else {
      resultado.insertAdjacentText("beforeend", simbols.botaoVirgula.textContent);
      numbersClicked = simbols.botaoVirgula.textContent;
    }
  }),
  simbols.sinalIgual.addEventListener("click", () => {
    conditions();
    resultado.insertAdjacentText("beforeend", ` = ${calculo}`);
  }),
  simbols.botaoLimpar.addEventListener("click", () => {
    console.clear();
    resultado.textContent = ""
    numbersClicked = 0;
    newNumberClicked = 0;
    calculo = 0;
  }),
];
