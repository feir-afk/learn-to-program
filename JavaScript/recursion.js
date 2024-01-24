// recursive function
function recursion(v) {
  if (v <= 0) {
    return;
  }
  console.log(v);
  recursion(v - 1);
}

recursion(10);
