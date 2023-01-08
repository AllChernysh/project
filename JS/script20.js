"use strict";

if (1) {
    console.log('Ok!');
} else {
    console.log('Error');
}



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Too much');
// } else {
//     console.log('OK');
// }

// (num === 50) ? console.log('OK') : console.log('Error');

const num = 50;

switch (num) {
    case 49:
        console.log('Fallse');
        break;
    case 100:
        console.log('Fallse');
        break;
    case 50:
        console.log('Good Job');
        break;
    default:
        console.log('Not now');
        break;

}