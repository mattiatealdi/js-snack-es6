let arrNames = [
  'pippo', 
  'PLUTO', 
  'Paperino'
];


const newArray = arrNames.map(function (arrName){
   let lowName = arrName.toLowerCase();
   let upperCasedName = lowName.charAt(0).toUpperCase() + lowName.slice(1);
   return upperCasedName;
});

console.log(newArray);