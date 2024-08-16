function* fibonacciSeries(x) {
  let a = 0,
    b = 1;
  for (let i = 0; i < x; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Example usage:
const fibCount = fibonacciSeries(10);
for (let num of fibCount) {
  console.log(num);
}
