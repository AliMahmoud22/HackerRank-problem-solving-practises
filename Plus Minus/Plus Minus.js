/*Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
 Print the decimal value of each fraction on a new line with  places after the decimal.
 There are n =5  elements, two positive, two negative and one zero. Their ratios are 2/5,2/5,1/5.
 0.400000
0.400000
0.200000*/

function plusMinus(arr) {
  let size = arr.length;
  let neg = 0,
    pos = 0,
    zero = 0;
  for (let i in arr) {
    if (arr[i] > 0) {
      pos++;
    } else if (arr[i] < 0) {
      neg++;
    } else zero++;
  }
  console.log(parseFloat(pos / size).toFixed(6));
  console.log(parseFloat(neg / size).toFixed(6));
  console.log(parseFloat(zero / size).toFixed(6));
}
let array = [1, 1, 0, -1, -1];
plusMinus(array);
