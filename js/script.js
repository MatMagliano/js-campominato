// alert('Hello')
var arrayNumUser = [];
var tries = 3;
var points = 0;


//------- GENERA 16 NUMERI RANDOM ----------------

// while (numRandomArray.length < 16) {
//   var numbersRandom = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
//
//   if (numRandomArray.includes(numbersRandom) == false) {
//     numRandomArray.push(numbersRandom);
//   }
// }
// console.log(numRandomArray);
var numRandomArray = [];
while (numRandomArray.length < 16) {
  var numbersRandom = getRandomNumber(1, 100);
  var find = isInArray(numRandomArray, numbersRandom);
  if (find == false) {
    numRandomArray.push(numbersRandom)
  }
}
console.log(numRandomArray.sort());


//------- INSERIMENTO CONTROLLO NUMERI ----------------


var findBomb = false;
while (arrayNumUser.length < tries && findBomb == false) {
  var userNumber = false;
  do {
    var userNumber = parseInt(prompt('Inserisci un numero da 1 a 100!'));
    console.log('Il numero inserito è' + ' ' + rangeNumber(1, 100, userNumber));
  } while (rangeNumber(1, 100, userNumber) == false);

  
}

console.log(arrayNumUser);

//------- FUNCTION ----------------

//      GET RANDOM NUMBER

function getRandomNumber(numMin, numMax) {
  numMin = Math.ceil(numMin);
  numMax = Math.floor(numMax);
  var result = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
  return result
}

//      CHECK NUMBER IN ARRAY


function isInArray(array, element) {
  var i = 0;
  var result = false;
  while (i < array.length && result == false) {
    if (array[i] == element) {
      result = true;
    }
    i ++;
  }
  return result;
}

//      RANGE NUMERI SELEZIONABILI

function rangeNumber(min, max, number) {
  var result = false;
  if (number >= min && number <= max) {
    result = true;
  }
  return result;
}
