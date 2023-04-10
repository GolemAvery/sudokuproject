 // create a data variable that stores all the rows, columns, and 3x3 grids
  // get all the rows
    // to get to the row 0 I would say board[0], to get to row 4 => board[3]
    // use a for loop to loop over the board and get each row, and push it into a temporary array variable
  // get all the columns
    // ...
  // get all the 3x3 grids
    // ...
  // by now my data variable holds all the rows, columns, and 3x3 grids
  
  // validate all the rows, columns, and 3x3 grids
    // loop over the data variable and check each array for validity
      // if any of the above don't follow sudoku rules, then return false 
         // - sudoku rules - numbers 1 - 9, no repeating
      // if all of them follow the sudoku rules, return true


// Here i will define a function that will check if a Sudoku grid is valid
function isSudokuValid(grid) {
  // This Creates a data variable that will store all my rows, columns, and 3x3 grids
  let data = [];
  
  // This should retrieve all the rows 
  for (let i = 0; i < 9; i++) {
    // Push each row into the variable
    data.push(getRow(grid, i));
  }

  // I will do the same with the columns
  for (let i = 0; i < 9; i++) {
    // Push each column into the variable
    data.push(getColumn(grid, i));
  }

  // get all the 3x3 grids
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      // Push each 3x3 grid into data
      data.push(getSection(grid, i, j));
    }
  }

  // Create a for loop to loop over the data variable and check each array for validity
  for (let i = 0; i < data.length; i++) {
    // Sort the array in ascending order
    data[i].sort((a, b) => a - b);

    // we need to check that there are no duplicates in the array
    for (let j = 0; j < 9; j++) {
      if (data[i][j] !== j + 1) {
        // If there is a duplicate or a number is missing, return false
        return false;
      }
    }
  }

  // If all the checks pass, return true
  return true;
}

// i make a function that will get the row
function getRow(grid, rowIndex) {
  // this returns the row at the specified index
  return grid[rowIndex];
}

// make a similar function that will get the column 
function getColumn(grid, colIndex) {
  // put an empty array to store the column
  let column = [];

  // Loop over each row in the grid
  for (let i = 0; i < 9; i++) {
    // Push the element at the specified column index into the column array
    column.push(grid[i][colIndex]);
  }

  // Return the column array
  return column;
}

// need to create a function that will get a 3x3 section
function getSection(grid, x, y) {
  // initialize an empty array to store the section
  let section = [];

  // Loop over each row
  for (let i = x; i < x + 3; i++) {
    // Loop over each column
    for (let j = y; j < y + 3; j++) {
      // Push the element into the section
      section.push(grid[i][j]);
    }
  }

  // Return the section
  return section;
}
  
  // Tests
  let puzzle = [
    [8,9,5,7,4,2,1,3,6],
    [2,7,1,9,6,3,4,8,5],
    [4,6,3,5,8,1,7,9,2],
    [9,3,4,6,1,7,2,5,8],
    [5,1,7,2,3,8,9,6,4],
    [6,8,2,4,5,9,3,7,1],
    [1,5,9,8,7,4,6,2,3],
    [7,4,6,3,2,5,8,1,9],
    [3,2,8,1,9,6,5,4,7]
  ];
  
  let p8zzle = [
    [8,9,5,7,4,2,1,3,6],
    [8,7,1,9,6,3,4,8,5],
    [4,6,3,5,8,1,7,9,2],
    [9,3,4,6,1,7,2,5,8],
    [5,1,7,2,3,8,9,6,4],
    [6,8,2,4,5,9,3,7,1],
    [1,5,9,8,7,4,6,2,3],
    [7,4,6,3,2,5,8,1,9],
    [3,2,8,1,9,6,5,4,7]
  ];
  
  console.log(isSudokuValid(puzzle)); // true
  console.log(isSudokuValid(p8zzle)); // false
  
