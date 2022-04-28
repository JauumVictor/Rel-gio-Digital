var containers = document.querySelectorAll(".container");
var [containerOne, containerTwo, containerThree] = containers;

/*
Mapeando quais segmentos são ativados de acordo com seu numero, assim 
podendo ativar ele usando um laço de iteração:
*/
var segmentMap = {
  0: "012346",
  1: "34",
  2: "02356",
  3: "23456",
  4: "1345",
  5: "12456",
  6: "012456",
  7: "234",
  8: "0123456",
  9: "123456"
}


const activeteClass = (child, number, index) => {

  // Pegando os elementos filhos do display:
  child = child.children[index].children;

  // Removendo todos os elementos com a classe .active:
[...child].forEach(x => x.classList.remove("active"));

  // Declarando o mapeamento do segmento:
  var segment = segmentMap[number];

  // Ativando os novos elementos ativos:
  for (const key of segment) {
    child[key].classList.add("active")
  }
}


// Formatação de numerais 9 --> 09:
const leftPad = (value, totalWidth, paddingChar) => {
  var length = totalWidth - value.toString().length + 1;
  return Array(length).join(paddingChar || '0') + value;
}


const setClock = () => {

  var currentDate = new Date();
  var seconds = leftPad(currentDate.getSeconds(), 2).split("");
  var minutes = leftPad(currentDate.getMinutes(), 2).split("");
  var hours = leftPad(currentDate.getHours(), 2).split("");

  seconds.forEach((x, i) => activeteClass(containerThree, x, i));
  minutes.forEach((x, i) => activeteClass(containerTwo, x, i));
  hours.forEach((x, i) => activeteClass(containerOne, x, i));

}


setClock();
setInterval(setClock, 1000);