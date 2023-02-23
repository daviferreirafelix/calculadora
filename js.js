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
let novoArray = [];
let calculo = 0;

numbers.forEach((numbersClickedValue) => {
  numbersClickedValue.addEventListener("click", () => {
    numbersClicked.push(numbersClickedValue.value);
    console.log(numbersClicked);
    resultado.textContent == 0
      ? (resultado.textContent = numbersClicked[0])
      : resultado.insertAdjacentText("beforeend", numbersClickedValue.value);  
    });
});

simbols.botaoSomar.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", " + ");
  console.log(Number(numbersClicked.join("")));
  for (let numbersNovoArray in novoArray.length){
    numbersNovoArray.add
  } 
});
simbols.botaoSubtrair.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", "-");
});
simbols.botaoDividir.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", "/");
});
simbols.botaoMultiplicar.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", "*");
});
simbols.botaoElevarQuadrado.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", "^");
});
simbols.botaoPorcentagem.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", "%");
});
simbols.botaoRaiz.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", "√");
});
simbols.botaoVirgula.addEventListener("click", () => {
  resultado.insertAdjacentText("beforeend", simbols.botaoVirgula.textContent);
  numbersClicked.push(simbols.botaoVirgula.textContent);
});
simbols.sinalIgual.addEventListener("click", () => {
  if (resultado.textContent !== simbols.botaoSomar.textContent) {
    console.log("tem o sinal de somar");
    calculo = numbersClicked + novoArray;
  } else if (resultado.innerHTML === simbols.botaoSubtrair.textContent) {
    console.log("Tem o sinal de subtrair");
    calculo = numbersClicked.reduce((acumulador, valorAtual) => acumulador - valorAtual);
  } else if (resultado.innerHTML === simbols.botaoDividir.textContent) {
    console.log("Tem o sinal de dividir");
    calculo = numbersClicked.reduce((acumulador, valorAtual) => acumulador / valorAtual);
  } else if (resultado.innerHTML === simbols.botaoMultiplicar.textContent) {
    console.log("Tem o botão de multiplicar");
    calculo = numbersClicked((acumulador, valorAtual) => acumulador * valorAtual);
  }
  resultado.insertAdjacentText("beforeend", ` = ${calculo}`);
});

//RESOLVIDO
simbols.botaoLimpar.addEventListener("click", () => {
  resultado.textContent = "0";
  while (numbersClicked.length) numbersClicked.pop();
});
