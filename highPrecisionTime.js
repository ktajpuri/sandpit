const start = process.hrtime.bigint();
console.log("abababc");
console.log('time taken', process.hrtime.bigint() - start);
