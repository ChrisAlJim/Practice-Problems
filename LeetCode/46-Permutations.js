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


/*
123
132
213
231
312
321

 1234

1
12
123
1234
12
124
1243
124
12
13
1



1234
1243
1324
1342
1423
1432


1
12
123
1234
123
124
1243
124
12
13
1
*/

const permutew = (nums) => {
  const available = new Set(nums)
  const output = []
  const helper = (curPerm, availableEles) => {
    if (availableEles.size === 0) {
      output.push([...curPerm])
    }
    
    for (const ele of availableEles) {
      const newAvailableEles = new Set([...availableEles])
      newAvailableEles.delete(ele)
      helper([...curPerm, ele], newAvailableEles)
    }
  }

  helper([], available)

  return output
}

console.log(permutew([1,2,3]))