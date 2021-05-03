var arrCars=[
  {
    marca: 'bmw',
    modello: 'x1',
    alimentazione: 'benzina'
  },
  {
    marca: 'tesla',
    modello: 's7',
    alimentazione: 'elettrico'
  },
  {
    marca: 'audi',
    modello: 'a3',
    alimentazione: 'diesel'
  },
  {
    marca: 'fiat',
    modello: 'panda',
    alimentazione: 'benzina'
  },
  {
    marca: 'apple',
    modello: 'apple car',
    alimentazione: 'elettrico'
  },
  {
    marca: 'volkswagen',
    modello: 'tiguan',
    alimentazione: 'benzina'
  },
  {
    marca: 'volkswagen',
    modello: 'passat',
    alimentazione: 'diesel'
  },
  {
    marca: 'volkswagen',
    modello: 'turan',
    alimentazione: 'diesel'
  },
  {
    marca: 'nissan',
    modello: 'quaskai',
    alimentazione: 'gpl'
  },
  {
    marca: 'volkswagen',
    modello: 'turan',
    alimentazione: 'metano'
  }
]

let arr1 = [];
let arr2 = [];
let arr3 = [];

arrCars.forEach((car)=>{
  if(car.alimentazione == 'benzina'){
    arr1.push(car);
  }else if(car.alimentazione == 'diesel'){
    arr2.push(car);
  }else{
    arr3.push(car);
  }
});

console.log(arr1);
console.log(arr2);
console.log(arr3);


const firstUl = $('#first');
const secondUl = $('#second');
const thirdUl = $('#third');

function printCar(array, target){
  let html = `
    <li>
      ${array};
    </li>
  `;
  target.append(html);
}

printCar(arr1, firstUl);
printCar(arr2, secondUl);
printCar(arr3, thirdUl);