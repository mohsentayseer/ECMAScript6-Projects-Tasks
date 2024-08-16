var min_maxValues = (...values) => {
  document.querySelector("body").innerHTML = `<h1> Max value = ${Math.max(
    ...values
  )}</h1><h2> Min value = ${Math.min(...values)}</h2>`;
};
// min_maxValues(1, 2, 3, 4, 5, 100, 30);
const arr = [1, 2, 3, 4, 5, 100, 30];
min_maxValues(...arr);
