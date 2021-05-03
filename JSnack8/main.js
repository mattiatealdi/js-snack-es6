let animalsArr = [
	{
    nome: 'leone',
    famiglia: 'felidi',
    classe: 'mammiferi' 
  },
	{ 
    nome: 'cane', 
    famiglia: 'canidi', 
    classe: 'mammiferi' 
  },
	{ 
    nome: 'gallina', 
    famiglia: 'fasianidi', 
    classe: 'uccelli' 
  },
];


let mammiferi = animalsArr.filter(function (animal){
  if(animal.classe == 'mammiferi'){
    return true;
  }else{
    return false;
  }

});

console.log(mammiferi);