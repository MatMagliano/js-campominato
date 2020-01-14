// alert('Hello')

var numRandomArray = [];

//------- GENERA 16 NUMERI RANDOM ----------------

//            COL FOR

for ( var i = 0; i <= 15; i++) {
  var numbersRandom = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  console.log(numbersRandom);
  numRandomArray.push(numbersRandom);
}
console.log(numRandomArray);
