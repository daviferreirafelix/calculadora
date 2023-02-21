let resultado = document.querySelector(".resultado");

let simbols = {
  botaoSomar: document.querySelector(".botaoSomar"),
  botaoSubtrair: document.querySelector(".botaoSubtrair"),
  botaoDividir: document.querySelector(".botaoDividir"),
  botaoMultiplicar: document.querySelector(".botaoMultiplicar"),
  botaoElevarQuadrado: document.querySelector(".botaoElevarQuadrado"),
  botaoRaiz: document.querySelector(".botaoRaiz"),
  parenteseEsquerdo: document.querySelector(".simboloParenteEsquerdo"),
  parenteseDireito: document.querySelector(".simboloParenteseDireito"),
  sinalIgual: document.querySelector(".sinalIgual"),
  botaoPorcentagem: document.querySelector(".botaoPorcentagem"),
  botaoVirgula: document.querySelector(".botaoVirgula"),
  botaoRefazer: document.querySelector(".botaoRefazer"),
  botaoLimpar: document.querySelector(".botaoLimpar"),
};

let numbers = [
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

let numbersClicked = [];

numbers.forEach((i) => {
  i.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", i.value);
    numbersClicked.push(i.value);
    console.log(numbersClicked);
  });
});

let calculo = 0;

let calculos = {
  soma: simbols.botaoSomar.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", "+");
  }),
  subtracao: simbols.botaoSubtrair.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", "-");
  }),
  divisao: simbols.botaoDividir.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", "/");
  }),
  multipli: simbols.botaoMultiplicar.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", "*");
  }),
  elevarQuadrado: simbols.botaoElevarQuadrado.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", "^");
  }),
  porcentagem: simbols.botaoPorcentagem.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", "%");
  }),
  raiz: simbols.botaoRaiz.addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", "√");
  }),
  igual: simbols.sinalIgual.addEventListener("click", () => {
    if (resultado.innerHTML === simbols.botaoSomar.textContent) {
      console.log("tem o sinal de somar");
      calculo = numbersClicked.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
      })
      resultado.insertAdjacentText("beforeend", calculo);
    }
    resultado.insertAdjacentText("beforeend", ` = ${calculo}`);
  }),
  limpar: simbols.botaoLimpar.addEventListener("click", () => {
    resultado.innerHTML = "0";
  }),
};
