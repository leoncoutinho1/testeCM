function inverteDiagonais(array:number[][]):number[][]{
  let s:number = array.length - 1;
  let aux:number;

  for(let i:number = 0; i <= s; i++){
    for(let j:number = 0; j <= s; j++) {
      if(i === j){
        aux = array[i][j];
        array[i][j] = array[i][s - i];
        array[i][s - i] = aux;
      }
    }
  }

  return array;
}


let array:Array<Array<number>> = [];

array.push([1,2,3,4]);
array.push([4,5,6,7]);
array.push([7,8,9,10]);
array.push([10,11,12,13]);

console.log(inverteDiagonais(array));

