const rangeIter = (size) => {
  let i = 0;
  return {
    next() {
      if (i < size) {
        return { value: i++ };
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
};

for (let i of rangeIter(3)) {
  console.log(i);
}
/*
0
1
2
*/

// to map an iterable iterator, we must spread it (convert to array)
console.log([...rangeIter(3)].map((x) => x + 1));
// [ 1, 2, 3 ]

// easier with generators
function* rangeGen(size) {
  let i = 0;
  while (i < size) yield i++;
}

for (let i of rangeGen(3)) {
  console.log(i);
}
/*
0
1
2
*/

// to map an iterable iterator, we must spread it (convert to array)
console.log([...rangeGen(3)].map((x) => x + 1));
// [ 1, 2, 3 ]

// if you just need to create N widgets, this is more performant and not any worse syntax
const makeWidget = (id) => ({ id });
let threeWidgts = [...Array(3).keys()].map(makeWidget);
console.log(threeWidgts);
// [ { id: 0 }, { id: 1 }, { id: 2 } ]
