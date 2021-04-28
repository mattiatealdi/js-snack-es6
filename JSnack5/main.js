let arr = [1, 2, 3, 4, 5, 6, 7]
let a = 2;
let b = 6;

let arrayNew = [];

const interArray = (x, y, array) => {
  for(x = a-1 ; x < y; x++){
    arrayNew.push(array[x]);
  }
  return arrayNew;
}

console.log(interArray(a, b, arr));