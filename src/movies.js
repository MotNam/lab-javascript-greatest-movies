// --->Iteration 1: All directors? - Get the array of all directors.


const movies = require("./data");

const newArray = movies.map (item => item.director);
console.log (newArray);
  




// --->// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
//How could you "clean" a bit this array and make it unified (without duplicates)?

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





// ---> Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = movies.filter (movies => movies.director.includes('Steven Spielberg')
&& movies.genre.includes ('Drama'))

console.log (howManyMovies);






//---> Iteration 3: All scores average - Get the average of all scores with 2 decimals

const totalScore = movies.reduce ((acc, currentValue) => {
  return acc += currentValue.score; 
}, 0);
const allAvg = totalScore / movies.length;  
console.log (allAvg.toFixed(2));




//---> Iteration 4: Drama movies - Get the average of Drama Movies

const DramaMovies = movies.filter (item => item.genre.includes("Drama"));
//console.log(DramaMovies);

const DramaAvg = DramaMovies.reduce((acc, currentValue) => {
  return acc += currentValue.score; 
}, 0)/ DramaMovies.length;  

console.log (DramaAvg.toFixed(2));





//----> Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//Create a function orderByYear() that receives an array as parameter and returns a new sorted array.
//If two movies have the same year, order them in alphabetical order by their title! 
const listByYear = movies.map (movie => {
  const listByYear = movie.year;
  const listByTitle = movie.title;
  return{
    year: listByYear, 
    title: listByTitle,
  }
});
const sortedList = listByYear.sort((a , b) => (a.year - b.year));
//console.log(sortedList);
const finalL = sortedList.sort();
console.log(finalL);




// --->Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

//List with titles only 
const listOfTitles = movies.map(movie => {
  const myList = movie.title;
  return {
    title: myList
  }
})
//console.log(listOfTitles);

//Get titles into Array
//console.log(Array.from(listOfTitles));  

//Order alphabetically and Print out 20 titles
const myNewList = Array.from(listOfTitles);
myNewList.sort();
//console.log(myNewList);

if (myNewList.length > 20 ){
  myNewList.length = 20 ;
}
console.log(myNewList);



/*____END____*/





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