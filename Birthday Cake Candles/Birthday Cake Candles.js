function birthdayCakeCandles(candles) {
  let max = Math.max.apply(null, candles);
  console.log(max);
  let max_counts = 0;
  candles.reduce(function (total, value, index, array) {
    console.log(value);
    if (value == max) {
      max_counts++;
    }
  }, 0);
  return max_counts;
}

const array = [3, 1, 2, 3, 3];
console.log(birthdayCakeCandles(array)); // result should be 3.
