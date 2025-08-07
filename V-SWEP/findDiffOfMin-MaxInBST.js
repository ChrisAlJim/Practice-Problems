//Find the difference between the largest val and smallest val in a BST
//Edge cases: tree is empty, skewed tree, vals could be strings
//Procedures: if strings is non number, ignore, else turn into num

//v1 without strings
//v2 with strings

// Node
// Node.val
// Node.left
// Node.right

/*
Abstraction:
get smallest value

get largest value

find difference

return difference
*/


// Works only for VALID binary search trees
const findDiffInBST = (root) => {
  if (!root) {
    throw new Error("Input must be a valid tree!")
  }
  const getMaxOrMin = (gettingMin, node) => {
    let curNode = node
    while (gettingMin ? curNode.left : curNode.right) {
      curNode = gettingMin ? curNode.left : curNode.right;
    }
    return curNode.val
  }

  const maxVal = getMaxOrMin(false, root)
  const minVal = getMaxOrMin(true, root)

  return maxVal - minVal
}

try {
  console.log(findDiffInBST(null))
} catch (error) {
  console.error(error)
}

// Works for all trees
const findDiffInTree = (root) => {
  if (!root) {
    throw new Error("Input must be a valid tree!")
  }
  let maxVal = -Infinity
  let minVal = Infinity

  const findMaxAndMinVals = (curNode) => {
    if (!curNode) return

    if (typeof curNode.val === "number") {
      maxVal = Math.max(maxVal, curNode.val)
      minVal = Math.min(minVal, curNode.val)
    }

    findMaxAndMinVals(curNode.left)
    findMaxAndMinVals(curNode.right)
  }

  findMaxAndMinVals(root)

  if (maxVal === -Infinity && minVal === Infinity) {
    throw new Error("There are no numbers in this tree!")
  }

  return maxVal - minVal
}

try {
  console.log(findDiffInTree(null))
} catch (error) {
  console.error(error)
}