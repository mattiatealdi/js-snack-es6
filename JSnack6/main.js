const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 6, 7];


const randomInteger = (min, max) => {
  // returns integer between min and max
  return Math.floor((Math.random() * max) + min);
}

while(arr1.length < arr2.length){
  let newInt = randomInteger(0, 100);
  arr1.push(newInt);
}

while(arr1.length > arr2.length){
  let newInt2 = randomInteger(0,100);
  arr2.push(newInt2);
}


console.log(arr1);
console.log(arr2);



