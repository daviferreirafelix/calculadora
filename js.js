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

const numbersClicked = [];
const newNumberClicked = [];
let calculo = 0;
let resultadoFinal = 0;

numbers.forEach((numbersValue) => {
  numbersValue.addEventListener("click", () => {
    if (resultado.textContent.includes(0)) resultado.textContent = "";
    numbersClicked.push(Number(numbersValue.textContent));
    resultado.insertAdjacentText("beforeend", numbersValue.textContent);
    console.log(numbersClicked);
  });
});

const limparArray = () => {
  newNumberClicked.push(Number(numbersClicked.join()));
  while (numbersClicked.length) numbersClicked.pop();
  console.log(newNumberClicked);
};

const conditions = () => {
  if (resultado.textContent.includes(simbols.botaoSomar.textContent)) {
    novoValor = Number(numbersClicked.join());
    newNumberClicked.forEach((elemento) => (primeiroValor = elemento));
    calculo = primeiroValor + novoValor;
  } else if (resultado.textContent.includes(simbols.botaoSubtrair.textContent)) {
    novoValor = Number(numbersClicked.join());
    newNumberClicked.forEach((elemento) => (primeiroValor = elemento));
    calculo = primeiroValor - novoValor;
  } else if (resultado.textContent.includes(simbols.botaoDividir.textContent)) {
    novoValor = Number(numbersClicked.join());
    newNumberClicked.forEach((elemento) => (primeiroValor = elemento));
    calculo = primeiroValor / novoValor;
  } else if (resultado.textContent.includes(simbols.botaoMultiplicar.textContent)) {
    novoValor = Number(numbersClicked.join());
    newNumberClicked.forEach((elemento) => (primeiroValor = elemento));
    calculo = primeiroValor * novoValor;
  } else if (resultado.textContent.includes(simbols.botaoExponenciar.textContent)){
    console.log("Tem o exponenciador");
    novoValor = Number(numbersClicked.join());
    newNumberClicked.forEach((elemento) => (primeiroValor = elemento));
    calculo = novoValor ** newNumberClicked;
  } else console.log("Erro");
};

const operations = [
  simbols.botaoSomar.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", " + ");
    limparArray();
  }),
  simbols.botaoSubtrair.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", " - ");
    limparArray();
  }),
  simbols.botaoDividir.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", " / ");
    limparArray();
  }),
  simbols.botaoMultiplicar.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", " x ");
    limparArray();
  }),
  simbols.botaoExponenciar.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", " ^ ");
    limparArray();
  }),
  simbols.botaoPorcentagem.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", " % ");
    limparArray();
  }),
  simbols.botaoRaiz.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", "√");
    limparArray();
  }),
  simbols.botaoVirgula.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", simbols.botaoVirgula.textContent);
    numbersClicked.push(simbols.botaoVirgula.textContent);
    numbersClicked.join();
  }),
  simbols.sinalIgual.addEventListener("click", () => {
    conditions()
    resultado.insertAdjacentText("beforeend", ` = ${calculo}`);
  }),
  simbols.botaoLimpar.addEventListener("click", () => {
    resultado.textContent = "0";
    while (numbersClicked.length) numbersClicked.pop();
    while (newNumberClicked.length) newNumberClicked.pop();
    calculo = 0;
  }),
];
