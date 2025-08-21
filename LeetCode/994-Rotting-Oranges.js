/*
You are given an m x n grid where each cell can have one of three values:

- 0 representing an empty cell,
- 1 representing a fresh orange, or
- 2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. 
If this is impossible, return -1.
*/

////////
// BRUTE
////////

const orangesRotting = (grid) => {
  let rottenOranges = []
  const freshOranges = new Set()

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const currCell = grid[r][c]
      if (currCell === 2) rottenOranges.push([r, c])
      if (currCell === 1) freshOranges.add(`[${r}, ${c}]`)
    }
  }

  let output = 0

  while (rottenOranges.length) {
    const newlyRottenOranges = []
    for (const [row, col] of rottenOranges) {
      if (freshOranges.has(`[${row - 1}, ${col}]`)) {
        newlyRottenOranges.push([row - 1, col])
        freshOranges.delete(`[${row - 1}, ${col}]`)
      }
      if (freshOranges.has(`[${row + 1}, ${col}]`)) {
        newlyRottenOranges.push([row + 1, col])
        freshOranges.delete(`[${row + 1}, ${col}]`)
      }
      if (freshOranges.has(`[${row}, ${col + 1}]`)) {
        newlyRottenOranges.push([row, col + 1])
        freshOranges.delete(`[${row}, ${col + 1}]`)
      }
      if (freshOranges.has(`[${row}, ${col - 1}]`)) {
        newlyRottenOranges.push([row, col - 1])
        freshOranges.delete(`[${row}, ${col - 1}]`)
      }
    }
    if (newlyRottenOranges.length) output++
    rottenOranges = newlyRottenOranges
  }
  return freshOranges.size ? -1 : output
}


/////////////
// ABSTRACTED
/////////////

const abstractedOrangesRotting = (grid) => {

  const findOranges = (grid) => {
    let rottenOranges = []
    const freshOranges = new Set()

    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        if (grid[r][c] === 2) rottenOranges.push([r, c])
        if (grid[r][c] === 1) freshOranges.add(`[${r},${c}]`)
      }
    }
    return [rottenOranges, freshOranges]
  }

  const spreadRot = (rottenOranges, freshOranges) => {
    let minutes = 0
    const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
    
    while (rottenOranges.length) {
      const newlyRottenOranges = []
      
      for (const [row, col] of rottenOranges) {
        for (const [dr, dc] of directions) {
          const newRow = row + dr
          const newCol = col + dc
          const key = `[${newRow},${newCol}]`
          
          if (freshOranges.has(key)) {
            newlyRottenOranges.push([newRow, newCol])
            freshOranges.delete(key)
          }
        }
      }
      if (newlyRottenOranges.length) minutes++
      rottenOranges = newlyRottenOranges
    }
    return freshOranges.size ? -1 : minutes
  }

  let [rottenOranges, freshOranges] = findOranges(grid)
  return spreadRot(rottenOranges, freshOranges)
}
