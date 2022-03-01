// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.


const movies = require("./data");
const newArray = movies.map (movies => movies.director);
console.log (newArray);
   

// How could you "clean" a bit this array and make it unified (without duplicates)?

//const movies = require("./data");
//const newArray = movies.map (movies => movies.director);

function cleanArray(array) {
let noDupsArray = [];
  array.forEach((element) => {
  if (noDupsArray.includes(element)) {
  } else {
    noDupsArray.push(element);
  }
});
return noDupsArray;
}
console.log (cleanArray (newArray))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const updatedArr = (cleanArray (newArray));

function howManyMovies(array) {
 const ssSelection = updatedArr.filter (updatedArr => updatedArr.director === 'Steven Spielberg' 
  && updatedArr.genre === 'Drama');
return ssSelection;
}
console.log (howManyMovies (updatedArr))



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
/*const totalReviews = product.reviews.reduce(function (acc, review) {
  return acc + review.rate;
}, 0); // starts acc to 0

console.log(`averageRate rate: ${averageRate}`); // <== averageRate rate:  3.2
*/

function scoresAverage(array) {
  const totalScore = movies.score.reduce (function (acc, score){
  return acc + score.rate;
  }, 0);
  const Average = totalScore / movies.score.length;  
  }
console.log (scoresAverage (movies.score))

// Iteration 4: Drama movies - Get the average of Drama Movies
// As in #3 ?
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//*---SORT
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
//*---SORT
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
/*if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
*/