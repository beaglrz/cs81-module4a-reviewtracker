/*
Beatriz Galarza
Repository: https://github.com/beaglrz/cs81-module4a-reviewtracker
*/

/* Weekly reading data
Array is storing the week's reading activity.
Each line is an object that has the weekday, title of the book, and how long to read.
*/
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

/* Purpose: Adds a new reading entry to the log
Input: (day, book, minutes) = (string, string, number)
Output: Function doesn't return value, it instead updates the readingLog array
*/

function addReadBook(day, book, minutes) {
//Improvement Suggestion: The day/book cannot be empty, and add input validation to prevent negative minutes.
  const newEntry = { day, book, minutes }; //creates object = one reading session
  readingLog.push(newEntry); //pushes object to the readingLog array
}

/*
Purpose: Returns total minutes spent reading all week
Inputs: log 
Output: Returns the number that equals the sum of all minutes read all week
*/
function totalReadingMinutes(log) {
  let total = 0; //starts the running total at 0

//for (let entry of log) loops over each object in the array. Each entry is a reading session.
  for (let entry of log) {
    total += entry.minutes; // Adds the mins from individual entries to the running total
  }
  return total; // After the loop ends, it returns the final total
}

/*
Purpose: Returns the book read most frequently
Inputs: log
Output: Returns the most read book title as a string
*/
function mostReadBook(log) {
  const bookCounts = {}; //Object to store counts (Title + # of time it appears)

//First Loop: Counts how many times each book appears
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1; //Initializes count for a book after the first time it's seen
    } else {
      bookCounts[entry.book]++; //Increment count for books already seen
    }
  }

  let maxBook = null; //Most read book
  let maxCount = 0; //Highest count until now

//Second Loop: Goes through the counts object and finds the book with largest count
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

/*
Purpose: Displays a summary of minutes read per day
Inputs: log
Outputs: No value returned (undefined). Displays readable data to the console using console.log().
*/
function printDailySummary(log) {
// Loops through each individual entry and displays day, minutes, and title of the book
//Template literals ('...') allows us to embed variables with ${} for easier formatting.
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50); //Adds a new entry to the global log
addReadBook("Sunday", "The Hobbit", 35) //(New Test Case): New data is input with another entry to test the functions.
printDailySummary(readingLog); //Display all entries in the log
console.log("Total minutes read:", totalReadingMinutes(readingLog)); //Display total minutes for the week
console.log("Most read book:", mostReadBook(readingLog)); //Display most frequently read book
