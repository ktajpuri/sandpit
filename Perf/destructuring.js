const obj = {
  prop1: 'A'
};


const start = process.hrtime.bigint();
for(let i=0; i< 1000; i++) {
  console.log(obj.prop1);
}
console.log('time taken', process.hrtime.bigint() - start);

// const obj = {
//       prop1: 'A'
// };

// const { prop1 } = obj;
// const start = process.hrtime.bigint();
// for(let i=0; i< 1000; i++) {
//   console.log(prop1); // 22076272n
// }
// console.log('time taken', process.hrtime.bigint() - start);