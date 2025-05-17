/*
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
*/


var iterNumberOfSteps = function(num) {
    let output = 0

    while (num !== 0) {
        num = (num % 2 === 0) ? num / 2 : num - 1

        output ++
    }

    return output
};
/*
???Time Complexity: O(n)
Space Complexity: O(1)
*/

const recurNumberOfSteps = (num) => {
    let output = 0

    const helper = () => {
        if (num === 0) return
        num = (num % 2 === 0) ? num / 2 : num - 1
        output ++
        helper()
    }

    helper()

    return output
}
/*
???Time Complexity: O(n)
Space Complexity: O(n)
*/