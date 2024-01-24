var chunk = function (arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    newArr.push(chunk);
  }
  return newArr;
};

console.log(chunk([1, 2, 3, 4, 5], 2));
