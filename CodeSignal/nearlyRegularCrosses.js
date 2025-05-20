/*
INSTRUCTIONS

For a rectangular martrix of integers, a cross is a figure formed by joining one row and one column.
A cross is considered to be regular if all the elements in it are considerd equal. 
A cross is called nearly regular if all of its elements are equal except for, at 
times, the element in the intersection of the row and the column which form the cross. 

You are given a rectangular matrix of integers MATRIX. Your task is to return the number of nearly 
regular crosses within MATRIX. Note that by definition the regular cross is also considered to 
be nearly regular cross.

Note: You are not expected to provide the most optimal solution, but a solution with time 
complexity not worse than O(matrix.length ' matrix[0].length ' (matrix.length + matrix[0].length)) 
will fit within the execution time limit.

EXAMPLE

  - For 
  matrix = [
    [1, 1, 1, 1],
    [2, 3, 1, 1],
    [1, 1, 1, 0],
    [1, 4, 1, 1]
  ]
    the output should be solution(matrix) = 2

    Explanation:
    The only two nearly regular crosses are:
      - The cross formed by the first row and the third column
      - The cross formed by the third row and the last column

  - For
  matrix = [
    [1, 2],
    [2, 1]
  ]
    the output should be solution(matrix) = 4

    Explanation:
    All possible combination of one row and one column form nearly regular crosses.

  - For
  matrix = [[2, 3]]
    the output should be solution(matrix) = 2

    Explanation:
    All possible combination of one row and one column form nearly regular crosses.
*/

const bruteSolution = (matrix) => {
  let output = 0
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      // value we are going be comparing too
      let val

      //checking any neighboring values of currnet cell and
      //first value we can grab gets assigned too val
      if (c > 0) {
        val = matrix[r][c - 1]
      } else if (c < matrix[r].length - 1) {
        val = matrix[r][c + 1]
      } else if (r > 0) {
        val = matrix[r - 1][c]
      } else if (r < matrix.length - 1) {
        val = matrix[r + 1][c]
      }

      //flag for if any element in cross doesn't match with val
      let flag = true
      //check if each element in row of cross is the same
      for (let i = 0; i < matrix[r].length; i++) {
        if (i === c) continue;
        if (matrix[r][i] !== val) {
          flag = false
          break
        }
      }
      //check if each element in column of cross is the same
      if (flag === true) {
        let j = 0
        while (j < matrix.length) {
          if (j === r) {
            j++
            continue
          }
          if (matrix[j][c] !== val) {
            flag = false
            break
          }
          j++
        }
      }
      // if all values match we have found a cross
      if (flag) output ++

    }
  }
  return output
}

const matrix = [
  [2, 2, 2],
  [2, 2, 2],
  [2, 2, 2]
]

const matrix1 = [[1]]

console.log(bruteSolution(matrix))

/*
Time Complexity: O((m * n) * (m * n)) Quadratic???
Space Complexity: O(1) 
*/