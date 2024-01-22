var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

console.log(
  sortBy([5, 4, 1, 2, 3], function fn(x) {
    return x;
  })
);

console.log(
  sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], function fn(x) {
    return x.x;
  })
);

console.log(
  sortBy(
    [
      [10, 1],
      [3, 4],
      [5, 2],
    ],
    function fn(x) {
      return x[1];
    }
  )
);
