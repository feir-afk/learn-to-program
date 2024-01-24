// array.reduce without using .reduce()

var reduce = function (nums, fn, init) {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  return init;
};

function sum(accum, curr) {
  return accum + curr;
}
console.log(reduce([1, 2, 3, 4], sum, 0));
