"use strict";

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }
for (let i = 2; i <= 10; i++) {
    if (i % 2 != 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;
    while(i <16){
        i++;
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }
// do {
//     console.log(num);
//     num++;
// }

// while (num < 55);

for  (let i = 1; i < 10; i++) {
    if (i === 6){
    // break;   //стопає цикл
    continue;  //пропускає умову і продовжує цикл
    }
    console.log(i);
}
