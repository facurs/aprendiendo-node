// .js por defecto usa CommonJS
// .mjs por defecto usa ES6
// .cjs por defecto usa CommonJS

import { sum, sub, mult } from  './sum.mjs';

console.log(sum(1, 2));
console.log(sub(1, 2));
console.log(mult(1, 2));