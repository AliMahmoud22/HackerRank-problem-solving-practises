function StrangeCounter(t) {
  let counter = 3;
  let end = 0;
  let start = 1;
  while (t > end) {
    end = counter + start - 1;
    if (t <= end) break;
    counter *= 2;
    start = end + 1;
  }
  return end - t + 1;
}
console.log(StrangeCounter(17)); //should be 5
