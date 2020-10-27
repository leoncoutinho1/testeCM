function insertionSort(vetor) {

  for(let i = 1; i < vetor.length; i++) {
    let key = vetor[i];
    let pos = i;
    while(pos > 0 && vetor[pos - 1] > key) {
      vetor[pos] = vetor[pos - 1];
      pos--;
    }
    vetor[pos] = key;
  }

  return vetor;
}

let vetor = [3,10,15,2,4,8,7,9,11,22,1]

console.log(insertionSort(vetor));