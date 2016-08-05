/**
 * Created by DineshBogolu on 04-08-2016.
 */
var array = require('./array');

console.log(array.nth([3,7,9,111,56],3));
console.log(array.nth('abcd',3));
console.log(array.nth({a:1,b:2},1));
console.log(array.nth(1234, 10));
console.log(array.nth(1234, 'sdsd'));
