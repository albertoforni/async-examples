// no async execution
new Promise((resolve) => {
  console.log("1-inPromise");
  resolve(undefined);
});
console.log("1");
new Promise((resolve) => {
  console.log("2-inPromise");
  resolve(undefined);
});
console.log("2");
new Promise((resolve) => {
  console.log("3-inPromise");
  resolve(undefined);
});
console.log("3");

// // ------
// // async execution with then
// new Promise((resolve) => {
//   console.log("1-inPromise");
//   resolve(undefined);
// }).then(() => {
//   console.log("1-inPromise-then");
// });
// console.log("1");
// new Promise((resolve) => {
//   console.log("2-inPromise");
//   resolve(undefined);
// }).then(() => {
//   console.log("2-inPromise-then");
// });
// console.log("2");
// new Promise((resolve) => {
//   console.log("3-inPromise");
//   resolve(undefined);
// }).then(() => {
//   console.log("3-inPromise-then");
// });
// console.log("3");

// // ------
// // async execution with then, with Promise.resolve
// console.log(
//   Promise.resolve("1").then((val) => {
//     console.log(val + "-1");
//   })
// );
// console.log("1");
// console.log(
//   Promise.resolve("2").then((val) => {
//     console.log(val + "-1");
//   })
// );
// console.log("2");
// console.log(
//   Promise.resolve("3").then((val) => {
//     console.log(val + "-1");
//   })
// );
// console.log("3");
