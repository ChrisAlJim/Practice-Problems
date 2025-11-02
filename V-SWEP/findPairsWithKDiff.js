/*
Given an array a of positive integers, find the number of pairs of integers 
for which the difference between the two numbers is equal to a given number k. 
Since the number of pairs could be quite large, take it modulo 109 + 7 for your output.

Example

For k = 3 and a = [1, 6, 8, 2, 4, 9, 12], the output should be
solution(k, a) = 3.

There are three pairs of integers whose difference is equal to 3: (1, 4), (6, 9) and (9, 12).
*/


///////////
/// BRUTE
///////////

/*
This is the solution I came up with. The reason this doesn't work is because it
fails tp keep track of the frequency of the numbers when searching for pairs. 

For example:

k = 50
a = [150, 150, 100]
Expected output = 2
Actual output = 1

Once we hit index 2, it will treat the seperate instances of 150 as one instance, therefore only making one pair and adding one to the output.
*/

// const solution = (k, a) => {
//     const nums = {}
//     let output = 0
    
//     for (let i = 0; i < a.length; i++) {
//         const currInt = a[i]
//         if (!(currInt in nums)) nums[currInt] = new Set()
        
        
//         if (currInt + k in nums && !(nums[currInt + k].has(i))) {
//             output ++
//             nums[currInt + k].add(i)
//         }
//         if (currInt - k in nums && !(nums[currInt - k].has(i))) {
//             output ++
//             nums[currInt - k].add(i)
//         }
//     }
//     return output % (10 ** 9 + 7)     
// }

///////////
/// AI
///////////

/*
By keeping track of the frequency of integers in the array, we can make the correct amount of pairs based on how many times we have seen an integer.
*/

const solution = (k, a) => {
  const freq = {}  // store how many times we've seen each number
  let output = 0

  for (let i = 0; i < a.length; i++) {
    const curr = a[i]

    // Check if there are previous numbers that form a valid pair with curr
    if (freq[curr + k]) output += freq[curr + k]
    if (freq[curr - k]) output += freq[curr - k]

    // Record the current number for future comparisons
    freq[curr] = (freq[curr] || 0) + 1
  }

  return output % (10 ** 9 + 7)
}

/*
Takeaways:
- Make sure you think of all possible edge cases
- Speak clearly
- Stay focused on one stap at a time
- Write out the problem requirements
*/



// 2 % 5 = 2
// 3 % 5 = 3
// 6 % 5 = 1
// 12 % 5 = 2
// 35 % 20 = 15
// 45 % 20 = 5  