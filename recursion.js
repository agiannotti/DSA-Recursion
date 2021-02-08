//the base case - stopping condition

// the recursive case - continuing conditions
// functions calls iself to smaller subtask

// all calls must CONVERGE to reach a base case
// if none, infinite loop

// integer
// if zero

// if one

// string
// if string has no characers

// if string has one character

//array
// if array is empty

// if array has one item

//countdown using recursion

function countDown(from) {
  //adding a base case
  if (from === 0) {
    return;
  }
  //general case
  console.log('before', from);
  countDown(from - 1);
  console.log('completed the call for countDown(', from, ')');
}

countDown(5);

// there must be a reachable base case
// argument must be modified with each call
// function will not return until recursion is finished

function upperStr(str) {
  if (str === '') {
    return ' ';
  }
  const newChar = str[0].toUpperCase();
  return newChar + upperStr(str.slice(1));
}
console.log(upperStr('hello'));

function doubler(arr) {
  if (arr.length === 0) {
    return arr;
  }

  const [firstValue, ...remaining] = arr;
  const firstValueDoubled = firstValue * 2;

  const remainingDoubled = doubler(remaining);

  return [firstValueDoubled, ...remainingDoubled];
}
console.log(doubler([])); // base case
console.log(doubler([10, 15, 20])); // 20, 30, 40
