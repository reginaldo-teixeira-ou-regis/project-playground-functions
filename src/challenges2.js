// Desafio 11
function generatePhoneNumber(listNumber) {
  if(!listNumber || listNumber.length < 11 ||  listNumber.length > 11) {
    return 'Array com tamanho incorreto.';
  }
  let keys = {};
  for(let i = 0; i < listNumber.length; i += 1) {
    if(listNumber[i] < 0 || listNumber[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if(Object.keys(keys).includes("" + listNumber[i])) {
      keys["" + listNumber[i]] += 1;
    } else {
      keys["" + listNumber[i]] = 1;
    }
    if(keys["" + listNumber[i]] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return "(" + listNumber.slice(0,2).join("") + ") " + listNumber.slice(2,7).join("") + "-" + listNumber.slice(7).join("");
}

// Desafio 12
function triangleCheck(line1, line2, line3) {
  if(line1 < (line2 + line3) && line1 > Math.abs(line2 - line3)) {
    return true;
  }
  if(line2 < (line1 + line3) && line2 > Math.abs(line1 - line3)) {
    return true;
  }
  if(line3 < (line2 + line1) && line3 > Math.abs(line2 - line1)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(Words) {
  let reg = /\d+/g;
  let glasses = Words.match(reg);
  let totalWater = 0;
  for(let glass of glasses) {
    totalWater += Number(glass);
  }
  if(totalWater > 1) {
    return totalWater + " copos de água"
  } else {
    return totalWater + " copo de água"
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
