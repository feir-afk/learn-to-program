// filter array without using array.filter()

var filter = function (arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i) === true || fn(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

function plusOne(n) {
  return n + 1;
}

function greaterThan10(n) {
  return n > 10;
}

console.log(filter([-2, -1, 0, 1, 2], plusOne), "Test");
