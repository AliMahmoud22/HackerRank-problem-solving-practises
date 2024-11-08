function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appcount = 0,
    orcount = 0;
  for (let i = 0; i < apples.length; i++) {
    if (apples[i] + a >= s && apples[i] + a <= t) appcount++;
  }
  for (let i = 0; i < oranges.length; i++) {
    if (oranges[i] + b <= t && oranges[i] + b >= s) orcount++;
  }
  console.log(appcount);
  console.log(orcount);
}
