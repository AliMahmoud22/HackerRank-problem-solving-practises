// helper function to sort array.
function sorting(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[0];
  let less = [];
  let great = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i]);
    }
    if (arr[i] >= pivot) {
      great.push(arr[i]);
    }
  }
  return sorting(less).concat([pivot]).concat(sorting(great));
}
function miniMaxSum(arr) {
  let array_sorted = [];
  array_sorted = sorting(arr);

  let sum = 0;

  for (let i = 0; i < array_sorted.length - 1; i++) {
    sum += array_sorted[i];
  }
  let min = sum;
  sum = 0;
  for (let i = 1; i < array_sorted.length; i++) {
    sum += array_sorted[i];
  }
  let max = sum;
  console.log(min + " " + max);
}
