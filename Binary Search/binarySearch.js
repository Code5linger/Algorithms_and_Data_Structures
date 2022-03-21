/*
const search = (val, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      return i;
    }
  }
  return -1;
};

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(search(7, values));
*/
/*
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const search = (val, arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (val === arr[i]) {
      return i;
    }
  }
  return -1;
};

console.log("\n" + search(15, values) + " Output");
*/
/*
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const search = (val, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      return i;
    }
  }
  return -404;
};

console.log(search(7, values));
*/
/*
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let search = (val, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      return i;
    }
  }
  return -1;
};
console.log(search(100, values));
*/
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const valueNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const search = (val, arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (val === arr[i]) {
      return i;
    }
  }
  return -1;
};

//  console.log(search(7, valueNum2));

const binary = (val, arr) => {
  let lower = 0;
  let upper = arr.length - 1;

  while (lower <= upper) {
    const middle = lower.Math.floor(upper - lower) / 2;

    if (val === arr[middle]) {
      return middle;
    }

    if (val < arr[middle])
  }

  return -1;
};
