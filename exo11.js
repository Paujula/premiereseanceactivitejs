const tableau = [1, 2, 3, 4, 5];

console.log("Tableau initial : ", tableau);


tableau.push(6,7);
console.log("Après push(6) : ", tableau);


tableau.pop();
console.log("Après pop() : ", tableau);


tableau.shift();
console.log("Après shift() : ", tableau);


tableau.unshift(0);
console.log("Après unshift(0) : ", tableau);
