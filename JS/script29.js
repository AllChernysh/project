"use strict";

let number0fFilms;

function start() {
     number0fFilms = +prompt('How many films u saw?', '');
     while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
         number0fFilms = +prompt('How many films u saw?', '');

     }

}
start();

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Last one film?', ''),
              b = prompt('Raiting this film?', '');
        if (a != null && b != null && a != '' && a.length < 50) {
            personalMovieDB[a] = b; 
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms(); 

function detectPersonalLevle() {
if (personalMovieDB.count < 10) {
    console.log ("Posmotrel malo filmow");
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log("Klaicheskij zritel");
} else if (personalMovieDB.count >= 30) {
    console.log("Kinoman");
} else {
    console.log("Oshybka");
}
}

detectPersonalLevle();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(); 

function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
        const genre = prompt (`Your favorite genres acc to num ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();