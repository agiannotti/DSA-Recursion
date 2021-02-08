function countSheep(num) {
  if (num === 0) {
    return;
  }
  return countSheep(num - 1);
}

console.log(countSheep(3));

function powerCalc(num, exp) {
  if (exp <= 0) {
    return 'exponent should be >= 0';
  }
  const powerVal = Math.pow(num, exp);
  return 'powerVal', powerVal;
}

console.log(powerCalc(10, 2));

function powerCalculator(base, exp) {
  //Base case
  if (exp === 0) {
    return 1;
  }
  //General case
  {
    return base * powerCalculator(base, exp - 1);
  }
}

console.log(powerCalculator(4, 2));

function revStr(str) {
  if (str === '') {
    return '';
  }
  return revStr(str.substr(1)) + str.charAt(0);
}

console.log(revStr('goooooooolligans'));
