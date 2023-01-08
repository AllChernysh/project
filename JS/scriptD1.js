"use strict";

first: for(let i = 20; i >=10; i--){
    if(i === 13) break first
    console.log(i);
}
for(let i = 2; i <= 10; i++){
    if(i === 3 || i === 5 || i === 7 || i === 9){
        continue; 
    }
        console.log(i);
    
}

const arrayOfNumbers = [];
for(let i = 5; i <= 10; i++){
    arrayOfNumbers[arrayOfNumbers.length] = i;}

    console.log(arrayOfNumbers);

