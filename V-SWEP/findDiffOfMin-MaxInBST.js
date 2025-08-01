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

// const findDiffInBST = (root) => {
//     let max
//     let min
    
//     function findMinOrMax (node, findingMin) {
//         if (findingMin) {
//             const curNode = node
//             while (!curNode) {
//                 if (typeOf node.val === "string") {
                    
//                 }
//                 min = curNode.val
//                 curNode = node.left
//             }
//         } else {
//         }
//     }
    
//     return max - min
// }