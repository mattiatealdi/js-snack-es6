
// squadra di basket -> array di oggetti

var team = [
  {
    name:"Giuseppe"
    
  },
  {
    name:"Mario"
    
  },
  {
    name:"Carlo"
    
  },
  {
    name:"Ugo"
    
  },
  {
    name:"Filippo"
    
  }
];


// generatore di codici

const codeGenerator = () => {

  const len = 3;

  let text = " ";

  let charset = "ABCDEFGHILMNOPQRSTUVXYZ";

  for(let i = 0; i < len; i++ ){
      text += charset.charAt(Math.floor(Math.random() * charset.length));

  }
  let numberGenerated = randomInteger(100,999);
  
  text += numberGenerated;

  return text;
}

// generatore di numeri casuali         
const randomInteger = (min, max) => {
  // returns integer between min and max
  return Math.floor((Math.random() * max) + min);
}

for(var player of team){
  player.code = codeGenerator();
  player.mean = randomInteger(0,50);
  player.perc = randomInteger(0,100);
  console.log(player);
}


