/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

var setZeroes = function(matrix) {
    const coords = []

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) coords.push([i, j])
        }
    }

    for (const coord of coords) {
        const [row, column] = coord

        matrix[row].fill(0)

        for (const row of matrix) {
            row[column] = 0
        }
    }
};
/*
???Time Complexity: O(m * n)
Space Complexity: O(m * n)
*/