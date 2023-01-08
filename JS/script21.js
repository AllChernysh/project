// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log('I like it');
// }

// console.log ((hamburger && fries));


// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'dadada'); // оператор І повертає перше на чому запнулось



// if (hamburger === 3 && cola === 1 && fries === 1) {
//     console.log('We like it');    
// } else {
//     console.log('We leave!');
// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;



if (hamburger ===3 && cola === 2 || fries === 3 && nuggets) {
    console.log('We like it');    
} else {
    console.log('We leave!');
}

console.log(hamburger ===3 && cola === 2);


let johnRepo, AlexRepo, samRepo, mariaRepo = 'done';

console.log(johnRepo || AlexRepo || samRepo || mariaRepo );

console.log(!0);



console.log( NaN || 2 || undefined );
 
console.log( NaN && 2 && undefined );
 
console.log( 1 && 2 && 3 );
 
console.log( !1 && 2 || !3 );
 
console.log( 25 || null && !3 );
 
console.log( NaN || null || !3 || undefined || 5);
 
console.log( NaN || null && !3 && undefined || 5);
 
console.log( 5 === 5 && 3 > 1 || 5);