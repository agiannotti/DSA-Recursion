function countSheep(num) {
  if (num === 0) {
    return;
  }
  return countSheep(num - 1);
}

// console.log(countSheep(3));

function powerCalc(num, exp) {
  if (exp <= 0) {
    return 'exponent should be >= 0';
  }
  const powerVal = Math.pow(num, exp);
  return 'powerVal', powerVal;
}

// console.log(powerCalc(10, 2));

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

// console.log(powerCalculator(4, 2));

function revStr(str) {
  if (str === '') {
    return '';
  }
  return revStr(str.substr(1)) + str.charAt(0);
}

// console.log(revStr('goooooooolligans'));

// Calculate the nth triangular number.
// A triangular number counts the objects that can
// form an equilateral triangle.
// The nth triangular number is the number of
// dots composing a triangle with n dots on a side,
// and is equal to the sum of the n natural numbers from 1 to n.
// This is the Triangular Number Sequence:
// 1, 3, 6, 10, 15, 21, 28, 36, 45.

//                           *
//             *           *    *
// *     |   *   *  |   *    *    *  |

// 1st       2nd           3rd             nth?

function tri(n) {
  if (n <= 1) {
    return n;
  }
  // console.log('before', n);
  return n + tri(n - 1);
}
// console.log(tri(60));

function splitStr(str) {
  if (!str.includes('/')) {
    return str;
  }
  const newArr = [];
  const newStr = str.replace('/', ',');
  newArr.push(newStr);
  const newNewArr = newArr.join(',');

  // console.log('str', newStr);
  // console.log('arr', newArr);
  // console.log('newArr', newNewArr);

  return splitStr(newStr);
}

// console.log(splitStr('20/20/2020'));

// // String Splitter
// function strSplit(str, splitter) {
//   if (str.length === 0) {
//     return '';
//   }
//   const currentChar = str[0] === splitter ? '' : str[0];
//   const newStr = currentChar + strSplit(str.slice(1), splitter);
//   // console.log(newStr)
//   return newStr;
// }

// console.log('teddys', strSplit('20/20/2020', '/'));

// function strSplit(str, split) {
//   if (str.length === 0) {
//     return '';
//   }
//   const currentChar = str[0] === split ? '' : str[0];
//   const newStr = currentChar + strSplit(str.slice(1), split);

//   return newStr;
// }

// console.log(strSplit(20 / 20 / 2020));

function strSplit2(str, splitter) {
  if (!str.includes(splitter)) return str;
  {
    const x = [str.slice(0, str.indexOf(splitter))];
    const y = str.slice(str.indexOf(splitter) + 1);
    return x.concat(strSplit2(y, splitter));
  }
}

// console.log(strSplit2('20/20/2020', '/'));

// Write a recursive function that prints the Fibonacci sequence of a given number.
// The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers.
// For example, the 7th Fibonacci number in a Fibonacci sequence is 13.
// The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

function fibo(n) {
  if (n <= 1) {
    return 1;
  }
  // console.log(n);
  return fibo(n - 1) + fibo(n - 2);
}

// console.log(fibo(6));

function fact(n) {
  if (n === 1) {
    return n;
  }
  return fact(n - 1) * n;
}

console.log(fact(10));
