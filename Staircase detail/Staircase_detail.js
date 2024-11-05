function staircase(n) {
  // Write your code here
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = 0; j < n - i; j++) {
      str += " ";
    }
    for (let k = 1; k <= i; k++) str += "#";

    console.log(str);
  }
}

staircase(5);
