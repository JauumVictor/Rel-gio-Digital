const containers = document.querySelectorAll(".container");
const [containerOne, containerTwo, containerThree] = containers;

/*
Mapeando quais segmentos são ativados de acordo com seu numero, assim 
podendo ativar ele usando um laço de iteração:
*/
const segmentMap = {
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

/**
 * 
 * @param {Document} child 
 * @param {number} number 
 * @param {number} index 
 */
const activeteClass = (child, number, index) => {

  // Pegando os elementos filhos do display:
  child = child.children[index].children;

  // Removendo todos os elementos com a classe .active:
  [...child].forEach(x => x.classList.remove("active"));

  // Declarando o mapeamento do segmento:
  const segment = segmentMap[number];

  // Ativando os novos elementos ativos:
  for (const key of segment) {
    child[key].classList.add("active")
  }
}

// Formatação de numerais 9 --> 09:

/**
 * 
 * @param {number} value 
 * @param {number | string} totalWidth 
 * @param {number | string} paddingChar 
 * @returns 
 */
const leftPad = (value, totalWidth, paddingChar) => {
  const length = totalWidth - value.toString().length + 1;
  return Array(length).join(paddingChar || '0') + value;
}

const setClock = () => {
  const currentDate = new Date();
  const seconds = leftPad(currentDate.getSeconds(), 2).split("");
  const minutes = leftPad(currentDate.getMinutes(), 2).split("");
  const hours = leftPad(currentDate.getHours(), 2).split("");

  seconds.forEach((x, i) => activeteClass(containerThree, x, i));
  minutes.forEach((x, i) => activeteClass(containerTwo, x, i));
  hours.forEach((x, i) => activeteClass(containerOne, x, i));

}

setClock();
setInterval(setClock, 1000);