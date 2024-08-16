function* fibonacciByMaxValue(maxValue) {
  let a = 0,
    b = 1;
  while (a <= maxValue) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Example usage:
const fibMaxValue = fibonacciByMaxValue(40);
for (let num of fibMaxValue) {
  console.log(num);
}
