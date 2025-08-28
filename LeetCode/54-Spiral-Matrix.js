/*
Given an m x n matrix, return all elements of the matrix in spiral order.
*/

const spiralOrder = (matrix) => {
    const outputLimit = matrix.length * matrix[0].length
    const visitedRows = new Set()
    const visitedCols = new Set()

    const output = []

    //would be better if it was a class
    const traverseSpiral = {
        start: (r, c) => {
            traverseSpiral.right(r, c)
        },
        right: (r, c) => {
            visitedRows.add(r)
            while (c < matrix[0].length && !(visitedCols.has(c))) {
                output.push(matrix[r][c])
                c++
            }
            if (output.length >= outputLimit) {
                return
            } else {
                traverseSpiral.down(r + 1, c - 1)
            }
        },
        down: (r, c) => {
            visitedCols.add(c)
            while (r < matrix.length && !(visitedRows.has(r))) {
                output.push(matrix[r][c])
                r++
            }
            if (output.length >= outputLimit) {
                return
            } else {
                traverseSpiral.left(r - 1, c - 1)
            }
        },
        left: (r, c) => {
            visitedRows.add(r)
            while (c > -1 && !(visitedCols.has(c))) {
                output.push(matrix[r][c])
                c--
            }
            if (output.length >= outputLimit) {
                return
            } else {
                traverseSpiral.up(r - 1, c + 1)
            }
        },
        up: (r, c) => {
            visitedCols.add(c)
            while (r > -1 && !(visitedRows.has(r))) {
                output.push(matrix[r][c])
                r--
            }
            if (output.length >= outputLimit) {
                return
            } else {
                traverseSpiral.right(r + 1, c + 1)
            }
        }
    }

    traverseSpiral.start(0,0)
    return output
};