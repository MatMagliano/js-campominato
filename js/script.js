// alert('Hello')

var numRandomArray = [];

//------- GENERA 16 NUMERI RANDOM ----------------

//            COL FOR

for ( var i = 0; i <= 15; i++) {
  var numbersRandom = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  numRandomArray.push(numbersRandom);
}
console.log(numRandomArray);

//------- INSERISCI 84 NUMERI ----------------

//            COL WHILE

var i = 0;

while (i < 5) {
  var userNumber = parseInt(prompt('Inserisci un numero!'))
  console.log(userNumber);
  if (userNumber == numRandomArray[i]) {
    alert('BUUUUUM! SEI BRILLATO MAN E NON IN SENSO BUONO');
    console.log('BUUUUUM! SEI BRILLATO MAN E NON IN SENSO BUONO');
  }
  i++;
}
