# COMP3123 – Full Stack Development I
## Lab Test 1 – ES6 and Node.js

**Student:** Nicole Diamantino  
**Student ID:** 101394035  
**Course:** COMP3123 – Full Stack Development I  
**College:** George Brown Polytechnic

## Project Description
This project contains three JavaScript exercises demonstrating ES6 features, Promises, and Node.js file system operations.

## Question 1 – ES6 Features
**File:** `question-1/question1.js`

- Creates a function named `lowerCaseWords`.
- Accepts an array containing mixed data types.
- Uses a Promise to resolve or reject the result.
- Filters out non-string values.
- Converts the remaining strings to lowercase.

**Run:**
```bash
node question-1/question1.js
```

## Question 2 – Promises
**File:** `question-2/question2.js`

- Creates `resolvedPromise()` and `rejectedPromise()`.
- Uses `setTimeout()` with a 500ms delay.
- Handles successful results using `.then()`.
- Handles rejected results using `.catch()`.
- Displays both results in the console.

**Run:**
```bash
node question-2/question2.js
```

## Question 3 – File Module
**Files:** `question-3/add.js` and `question-3/remove.js`

Uses the Node.js `fs` and `path` modules.

**add.js**
- Creates a `Logs` directory if it does not exist.
- Changes the current working directory to `Logs`.
- Creates 10 text log files.
- Displays the filenames in the console.

**remove.js**
- Checks whether the `Logs` directory exists.
- Displays the filenames being deleted.
- Deletes all log files.
- Removes the `Logs` directory.

**Run from the project root:**
```bash
cd question-3
node add.js
node remove.js
```

## Technologies Used
- JavaScript (ES6)
- Node.js
- Visual Studio Code
- Git and GitHub

## Author
Nicole Diamantino  
George Brown Polytechnic – Computer Programming and Analysis