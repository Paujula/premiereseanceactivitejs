const tableau = [1, 12, 43, 74, 15, 86, 37,28, 966, 170,131,202,147,410,87,99,100];


const nouveauTableau = tableau.filter(function(tableau) {
  return tableau % 2 === 0;
});


console.log(nouveauTableau); 
