// The function accepts INTEGER n as parameter.
/*
Note: Factorials of n>20  can't be stored even in a 64-bit long long variable.
 Big integers must be used for such calculations.
 Languages like Java, Python, Ruby etc.
 can handle big integers, but we need to write additional code in C/C++ to handle huge values.

i recommend solving this challenge using BigIntegers.*/
function getfact(n) {
  if (n == 1) {
    return n;
  } else {
    return n * getfact(n - BigInt(1));
  }
}
function extraLongFactorials(n) {
  // Write your code here
  let i = getfact(BigInt(n));

  console.log(String(i));
}
