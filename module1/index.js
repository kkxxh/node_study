const {odd, even} = require('./var');
const checkNumber = require('./func');
//import {odd,even} from './var';
//import checkNumber from './func.mjs';

function checkStringOddOrEven(str) {
    if (str.length % 2 ) {
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));