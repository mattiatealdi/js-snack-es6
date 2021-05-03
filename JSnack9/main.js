let arrPeople = [
	{ nome: 'Mario', cognome: 'Rossi', eta: 60 },
	{ nome: 'Luigi', cognome: 'Verdi', eta: 12 },
	{ nome: 'Silvia', cognome: 'Neri', eta: 25 },
]

let driveWho = arrPeople.map(function (person){
  let age = person.eta;
  let phrase ='';
  if(age > 50){
    phrase = "La persona non può guidare";
  }else{
    phrase = "La persona può guidare";
  }

  return {
    ...person,
    phrase
  }
});

console.log(driveWho);