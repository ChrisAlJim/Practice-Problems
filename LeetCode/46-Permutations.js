/*
Given an array nums of distinct integers, return all the possible permutations. 
You can return the answer in any order.
*/

const permute = (nums) => {
  if (!Array.isArray(nums)) {
    throw new Error("Input must be an array!")
  }
  const buildPermutations = (curPerm, allPerms) => {
    if (curPerm.length === nums.length) {
      allPerms.push([...curPerm])
    }
    // I feel like there is a better way of doing this for the 
    // sake of time complexity
    for (let i = 0; i < nums.length; i++) {
      if (typeof nums[i] !== "number") {
        throw new Error(`Element at index ${i} of nums is not a number!`)
      }
      if (curPerm.includes(num)) continue //Expensive in time complexity
      curPerm.push(num)
      buildPermutations(curPerm, allPerms)
      curPerm.pop()
    }
    return allPerms
  }
  return buildPermutations([], [])
}