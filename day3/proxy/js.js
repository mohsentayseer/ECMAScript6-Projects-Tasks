let obj = {
  name: "mohsen",
  address: "portsaid",
  age: 25,
};
let handler = {
  get(target, prop) {
    // console.log(arguments);
    // console.log(target.hasOwnProperty("Name"));
    // console.log("name" in target);

    if (!target.hasOwnProperty(prop)) {
      throw prop + " is not found";
    }
    return target[prop];
  },

  set(target, prop, val) {
    if (!(prop in target)) {
      throw prop + " is not found";
    }
    if (prop === "name") {
      if (typeof val == "number") {
        throw "this is characters only";
      }
      if (val.length > 7) {
        throw "only 7 characters";
      }
    }
    if (prop === "age") {
      if (!isFinite(val)) {
        throw "this is Numbers only";
      }
      if (val < 25 || val > 60) {
        throw "not between range[25:60]";
      }
    }
    if (prop === "address") {
      if (typeof val == "number") {
        throw "this is characters only";
      }
    }
    target[prop] = val;
  },
};
let prox = new Proxy(obj, handler);
prox.name = 33;
prox.name = "mohamedmahmoud";
console.log(prox.name);

// prox.age = 61;
// prox.age = 22;
// prox.age = 50;
// console.log(prox.age);

// prox.address = 324;
// prox.address = "alex";
// console.log(prox.address);
