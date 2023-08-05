// console.log(arguments)
// console.log(require('module').wrapper);

//module.exports
const C = require("./test-module1");

const calc1 = new C();

console.log(calc1.add(3,4));

//exports
const calc2 = require('./test-modules2')
console.log(calc2.divide(2,5))

//cashing
require('./test-module3')();
require('./test-module3')();
require('./test-module3')();