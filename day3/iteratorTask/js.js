let user = {
  name: "mohsen",
  age: 25,
  address: "portsaid",
};

user[Symbol.iterator] = objIterator;

function objIterator() {
  let keys = Object.keys(this);
  let counter = -1;
  return {
    next: () => {
      counter++;
      if (counter < keys.length) {
        return { value: [keys[counter], this[keys[counter]]], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}
for (let num of user) {
  console.log(num);
}
console.log(...user);

// function* displayObj() {
//   let keys = Object.keys(user);
//   for (let i = 0; i < keys.length; i++) {
//     yield keys[i];
//   }
// }

// let iterator = displayObj();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
