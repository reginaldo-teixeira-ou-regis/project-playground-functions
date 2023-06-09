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
  return lastItem + ', ' + firstItem;
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
  for (let cont = 0; cont < arrayNumbers.length; cont += 1) {
    if (arrayNumbers[cont] > higherNumber) {
      higherNumber = arrayNumbers[cont];
    }
  }
  for (let cont = 0; cont < arrayNumbers.length; cont += 1) {
    if (arrayNumbers[cont] === higherNumber) {
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
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat2';
  }
}

// Desafio 08
function fizzBuzz(arrayNumbers) {
  let arrayStrings = [];
  for (let cont = 0; cont < arrayNumbers.length; cont += 1) {
    if (arrayNumbers[cont] % 3 === 0 && arrayNumbers[cont] % 5 === 0) {
      arrayStrings.push('fizzBuzz');
    } else if (arrayNumbers[cont] % 3 === 0) {
      arrayStrings.push('fizz');
    } else if (arrayNumbers[cont] % 5 === 0) {
      arrayStrings.push('buzz');
    } else {
      arrayStrings.push('bug!');
    }
  }
  return arrayStrings;
}

// Desafio 09
function encode(words) {
  let arrayString = words.split('');
  for (let cont = 0; cont < arrayString.length; cont += 1) {
    if (arrayString[cont] === 'a') {
      arrayString[cont] = '1';
    } else if (arrayString[cont] === 'e') {
      arrayString[cont] = '2';
    } else if (arrayString[cont] === 'i') {
      arrayString[cont] = '3';
    } else if (arrayString[cont] === 'o') {
      arrayString[cont] = '4';
    } else if (arrayString[cont] === 'u') {
      arrayString[cont] = '5';
    }
  }
  return arrayString.join('');
}

function decode(numberWords) {
  let arrayString = numberWords.split('');
  for (let cont = 0; cont < arrayString.length; cont += 1) {
    if (arrayString[cont] === '1') {
      arrayString[cont] = 'a';
    } else if (arrayString[cont] === '2') {
      arrayString[cont] = 'e';
    } else if (arrayString[cont] === '3') {
      arrayString[cont] = 'i';
    } else if (arrayString[cont] === '4') {
      arrayString[cont] = 'o';
    } else if (arrayString[cont] === '5') {
      arrayString[cont] = 'u';
    }
  }
  return arrayString.join('');
}

// Desafio 10
function techList(arrayTech, name) {
  let arrayListObj = [];
  //console.log(!arrayTech, arrayTech.length === 0);
  if(!arrayTech || arrayTech.length === 0) {
    return "Vazio!";
  }
  arrayTech = arrayTech.sort();
  for(let cont = 0; cont < arrayTech.length; cont += 1) {
      arrayListObj[cont] = {
        tech: arrayTech[cont],
        name: name,
      }
  }
  return arrayListObj;
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
