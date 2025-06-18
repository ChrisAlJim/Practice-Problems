/*
Notes

Given the root of a binary find its maximum depth

this.val

this.left
this.right

ALGO

arg: root

queue: [root]
*/

// const mock1 = (root) => {
//   if (root === null) return 0
//   const queue = [root] // []
//   let output = 0 

//   while (queue.length) {
//     let length = queue.length 
//     while(length) {
//       const curr = queue.shift() 
//       if (curr.left) {
//         queue.push(curr.left)
//       }                     
//       if (curr.right) {
//         queue.push(curr.right)
//       } 
//       length --
//     }
//     output ++
//   }
//   return output
// }

const mock2 = (root) => {
  if (root === null) return []
  let currLongPath = [root]
  const currPath = [root]

  const helper = (node) => {
    if (node.left === null && node.right === null) {
      if (currPath.legnth > currLongPath.length) {
        currLongPath = currPath
      }
      return
    }
    if (node.left) {
      currPath.push(node.left)
      helper(node.left)
      currPath.pop()
    }
    if (node.right) {
      currPath.push(node.right)
      helper(node.right)
      currPath.pop()
    }
  }
  helper(root)
  return currLongPath
}
/*
    4
  /. \
  5.  6
  /
  2
*/
