let resultado = document.querySelector(".resultado");
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
let simbolsBtn = [
  document.querySelector(".botaoSomar"),
  document.querySelector(".botaoSubtrair"),
  document.querySelector(".botaoDividir"),
  document.querySelector(".botaoMultiplicar"),
  document.querySelector(".botaoElevarQuadrado"),
  document.querySelector(".botaoPorcentagem"),
  document.querySelector(".botaoRaiz"),
  document.querySelector(".simboloParenteEsquerdo"),
  document.querySelector(".simboloParenteseDireito"),
  document.querySelector(".sinalIgual"),
  document.querySelector(".botaoVirgula"),
  document.querySelector(".botaoRefazer"),
];

let numbersClicked = [];

numbers.forEach((i) => {
  i.addEventListener("click", () => {
    numbersClicked.push(numbers[i.value]);
    console.log(numbersClicked);
    resultado.insertAdjacentText("beforeend", i.value);
  });
});

let calculo = 0;

const tiposCalculo = {
  somar: simbolsBtn[0].addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", "+");
    let soma = numbersClicked[0] + numbersClicked[1];
    calculo = soma;
  }),
  subtrair: simbolsBtn[1].addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", "-");
    let subtracao = numbersClicked[0] - numbersClicked[1];
    calculo = subtracao;
  }),
  dividir: simbolsBtn[2].addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", "/");
    let divisao = numbersClicked[0] / numbersClicked[1];
    calculo = divisao;
  }),
  multiplicar: simbolsBtn[3].addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", "*");
    let multi = numbersClicked[0] * numbersClicked[1];
    calculo = multi ;
  }),
  elevarQuadrado: simbolsBtn[4].addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", "^");
  }),
  porcentagem: simbolsBtn[5].addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", "%");
  }),
  raizQuadrada: simbolsBtn[6].addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", "√");
  }),
  sinalIgual: simbolsBtn[8].addEventListener("click", () => {
    resultado.insertAdjacentText("beforeend", calculo);
  }),
  limpar: simbolsBtn[11].addEventListener("click", () => {}),
};
