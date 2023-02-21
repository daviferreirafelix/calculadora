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

let calculos = {
  soma: simbols.botaoSomar.addEventListener(
    "click",
    function somar(numbersClicked) {
      resultado.insertAdjacentText("beforeend", "+");
      return (calculo = numbersClicked[0] + numbersClicked[1]);
    }
  ),
  subtracao: simbols.botaoSubtrair.addEventListener(
    "click",
    function subtrair(numbersClicked) {
      resultado.insertAdjacentText("beforeend", "-");
      return (calculo = numbersClicked[0] - numbersClicked[1]);
    }
  ),
  divisao: simbols.botaoDividir.addEventListener(
    "click",
    function dividir(numbersClicked) {
      resultado.insertAdjacentText("beforeend", "/");
      return (calculo = numbersClicked[0] / numbersClicked[1]);
    }
  ),
  multipli: simbols.botaoMultiplicar.addEventListener(
    "click",
    function multiplicar(numbersClicked) {
      resultado.insertAdjacentText("beforeend", "*");
      return (calculo = numbersClicked[0] * numbersClicked[1]);
    }
  ),
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
    resultado.insertAdjacentText("beforeend", " = ");
    if (resultado == calculos.soma) {
      console.log(true);
    } else console.log(false);
  }),
  limpar: simbols.botaoLimpar.addEventListener("click", () => {
    resultado.innerHTML = "0"
  }),
};
