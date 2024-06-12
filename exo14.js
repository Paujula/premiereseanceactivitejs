const table = [11, 27, 93, 84, 15, 46, 57, 128, 649, 1450, 50];


const somme = table.reduce(function(accumulateur, valeuractuel) {
  return accumulateur + valeuractuel;
}, 0);


console.log(somme); 
