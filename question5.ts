function inverteDiagonais(array:number[][]):number[][]{
  let s:number = array.length;
  let aux:number;

  for(let i:number = 0; i <= s; i++){
    for(let j:number = 0; j <= s; j++) {
      if(i == j){
        aux = array[i][j];
        array[i][j] = array[i][s + 1 - i];
        array[i][s + 1 - i] = aux;
      }
    }
  }

  return array;
}


let array:Array<Array<Number>>;

array[0] = [1,2,3];
array[1] = [4,5,6];
array[2] = [7,8,9];