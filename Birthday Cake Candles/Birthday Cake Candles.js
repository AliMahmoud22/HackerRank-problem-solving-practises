function birthdayCakeCandles(candles) {
  let max = Math.max.apply(null, candles);
  let max_counts = 0;
  candles.reduce(function (total, value, index, array) {
    if (value == max) max_counts++;
  }, 0);
  return max_counts;
}

const array = [3, 1, 2, 3, 3, 3];
console.log(birthdayCakeCandles(array)); // result should be 4.
