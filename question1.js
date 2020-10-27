function calcularModa(vetor) {
  let numbers = [];
  let obj;
  
  //retira elementos do array que não sejam numeros inteiros
  vetor.forEach((item, index, array) => {
    if(Number.isInteger(item)){
      numbers.push(item);
    };
  });
  
  //ordena e conta a repetição dos elementos
  if(numbers.length > 0) {
    obj = numbers
      .sort((a, b) => a - b)             //ordena o vetor de numeros inteiros
      .reduce((qtys, element) => {
        if(qtys[element]) {
          qtys[element]++;
        } else {
          qtys[element] = 1;
        }
        return qtys;
      }, {});
  } else {
    return ('Foi passado um vetor vazio ou sem numeros inteiros');
  }

  //encontra a posição do inteiro que mais se repetiu
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let indexMaxValue = values.indexOf(Math.max(...values));
  
  return keys[indexMaxValue];
}


console.log(calcularModa([35,50,13,51,74,88,15,13,13,21,04,64,4,004,'a','',13,'teste']));