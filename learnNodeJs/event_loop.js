console.log("first");

setTimeout(() => {
  console.log("third");
}, 0.0);

/**
 * This setInterval will keep running
 * because no process stop function
 */

setInterval(() => {
  console.log("forth");
}, 1000 * 5);

console.log("second");
