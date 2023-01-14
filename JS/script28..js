"use strict";

const str = "test";
const arr = [1, 2, 4];

console.log(arr.length);
// console.log(str[2] = 'd'); // ne rabatoaet tak
console.log(str.toUpperCase()); // в кожен метод ставим ()
console.log(str.toLowerCase());
console.log(str);

let fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); // пошук по тексту

const logg = "Hello world";

console.log(logg.slice(6, 11)); // вирізати текст (початок строки, кінець)

// const fr = "Vasis Pupkin";
// console.log(fr.slice(3, 10));

console.log(logg.slice(6)); // з 6 позиції і до кінця

console.log(logg.slice(-5, -1)); // мінусові(починає з кінця)

console.log(logg.substring(6, 11)); // не бере - числа

console.log(logg.substr(6, 5));


const num = 12.2; 
console.log(Math.round(num));

const test = "12.2px";
// console.log(parseInt(test)); переводить число в другу систему числення
console.log(parseFloat(test));