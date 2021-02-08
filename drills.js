function countSheep(num) {
  if (num === 0) {
    return;
  }
  countSheep(num - 1);
}

countSheep(3);

function powerCalc(num, exp) {
  if (exp <= 0) {
    return 'exponent should be >= 0';
  }
  const powerVal = Math.pow(num, exp);
  console.log('powerVal', powerVal);
}

powerCalc(10, 2);
