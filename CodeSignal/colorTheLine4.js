/*
INSTRUCTIONS

Imagine you are given a number line represented by `[0, length - 1]`, and
you are coloring the coordinates along the line. Specifically, you are 
given a list of `queries` that determines how to color coordinates along 
the line in the following format:

  - [coord, color] - color the coordinate `coord` with the color `color`.
    All existing colors are overwritten.

After processing each query, record the number of consecutive pairs of 
coordinates which currently have the same color on the number line. Your 
task is to return an array of length `querues.length` containing these 
records after processing all queries.

EXAMPLE

For `length = 7` and `queries = [[1,2], [0,2], [3,5], [3,2], [2,2], [6, 1], [1, 3]]`, 
the output should be `solution(length, queries) = [0, 1, 1, 1, 3, 3, 1]

  • [1, 2] - color the coordinate 1 with color 2. After this query, the number line
             becomes: [0, 2, 0, 0, 0, 0, 0]
             There is just 1 colored coordinate on the line, so record 0. 
  • [0, 2] - color the coordinate o with color 2. After this query, the number line 
             becomes: [2, 2, 0, 0, 0, 0, 0] 
             There is one consecutive pair of coordinates with the same color 2 
             coordinates [0] and coordinates [1], so record 1. 
  • [3, 5] - color the coordinate 3 with color 5. After this query, the number line 
             becomes: [2, 2, 0, 5, 0, 0, 0] 
             There is still just one consecutive pair of coordinates with the same 
             color 2, so record 1.
  • [3, 2] - color the coordinate 3 with color 2. After this query, the number line 
             becomes: [2, 2, 0, 2, 0, 0, 0]. 
             There is still just one consecutive pair of coordinates with the same 
             color 2, so record 1.
  • [2, 2] - color the coordinate 2 with color 2. After this query, the number line 
             becomes: [2, 2, 2, 2, 0, 0, 0].
             There are 3 consecutive pairs of coordinates with the same color 2 
             coordinates [0] and coordinates [1], coordinates[1] and coordinates [2], 
             coordinates [2] and coordinates [3]. So, record 3.
  • [6, 1] - color the coordinate 6 with color 1. After this query, the number line 
             becomes: [2, 2, 2, 2, 0, 0, 1].
             There are still 3 consecutive pairs of coordinates with the same color 
             2, so record 3. 
  • [1, 3] - color the coordinate 1 with color 3. After this query, the number line 
             becomes: [2, 3, 2, 2, 0, 0, 1] 
             Now, there is one consecutive pair of coordinates with the same color 2 
             coordinates [2] and coordinates [3], so record 1. 
  • After processing all queries, the final output is [0, 1, 1, 1, 3, 3, 1].
*/

const bruteSolution = (length, queries) => {
  const output = []
  const numLine = new Array(length)

  for (const query of queries) {
    const [index, color] = query
    let count = 0
    numLine[index] = color
    for (let i = 0; i < numLine.length - 1; i++) {
      if (numLine[i] !== undefined && numLine[i] === numLine[i + 1]) count ++
    }
    output.push(count)
  }
  return output
}

const length = 1
const queries = [
  [0, 2]
]
console.time()
console.log("Bru", bruteSolution(length, queries))
console.timeEnd()

/*
Brute Time Compexity: O(n^2) Quadratic
Brute Space Complexity: O(n) Linear
*/

const solution = (length, queries) => {
  const output = []
  const numLine = new Array(length)
  //amount of consecutive pairs
  let count = 0
  
  for (const query of queries) {
    const [index, color] = query
    let currMatches = 0, newMatches = 0
    if (color !== numLine[index]) {
      //calculate the changes made with each query
      if (index > 0 && numLine[index - 1] !== undefined && numLine[index] === numLine[index - 1]) currMatches ++
      if (index < numLine.length - 1 && numLine[index + 1] !== undefined && numLine[index] === numLine[index + 1]) currMatches ++

      if (index > 0 && numLine[index - 1] !== undefined && color === numLine[index - 1]) newMatches ++
      if (index < numLine.length - 1 && numLine[index + 1] !== undefined && color === numLine[index + 1]) newMatches ++

      count += (newMatches - currMatches)
    }
    numLine[index] = color
    output.push(count)
  }
  return output
}
console.time()
console.log("Opt", solution(length, queries))
console.timeEnd()

/*
Optimization Time Optimization: O(n) Linear
Optimization Space Optimization: O(n) Linear
*/