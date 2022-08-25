// Desafio 01
function compareTrue(parameter1, parameter2) {
  if (parameter1 === true && parameter2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 02
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 03
function splitSentence(word) {
  let arrayWord = [];
  for (let cont = 0; cont < word.length; cont += 1) {
    arrayWord = word.split(' ');
  }
  return arrayWord;
}

// Desafio 04
function concatName(words) {
  let lastItem = words.pop();
  let firstItem = words.shift();
  return lastItem + ", " + firstItem;
}

// Desafio 05
function footballPoints(wins, ties) {
  let numberWins = wins * 3;
  let numberTies = ties * 1;
  return numberWins + numberTies;
}

// Desafio 06
function highestCount(arrayNumbers) {
  let higherNumber = arrayNumbers[0];
  let counter = 0;
  for(let cont = 0; cont < arrayNumbers.length; cont += 1) {
    if(arrayNumbers[cont] > higherNumber) {
      higherNumber = arrayNumbers[cont];
    }
  }
  for(let cont = 0; cont < arrayNumbers.length; cont += 1) {
    if(arrayNumbers[cont] === higherNumber) {
      counter++;
    }
  }
  return counter;
}

// Desafio 07
function catAndMouse(num1, num2, num3) {
  let mouse = num1;
  let cat1 = num2;
  let cat2 = num3;

  if(((mouse - cat1) > (mouse - cat2))) {
    return "cat1";
  } else if(((mouse - cat1) < (mouse - cat2))) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 08
function fizzBuzz() {
  // seu código aqui
}

// Desafio 09
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
