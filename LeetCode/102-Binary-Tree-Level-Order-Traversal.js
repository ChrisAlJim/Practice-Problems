/*
Given the root of a binary tree, return the level order traversal of 
its nodes' values. (i.e., from left to right, level by level).
*/

const slowLevelOrder = (root) => {
    if (!root) return []
    let queue = [root]
    const output = [[root.val]]

    while (queue.length) {
        const newQueue = []
        const level = []
        while (queue.length) {
            const curNode = queue.shift()
            if (curNode.left) {
                newQueue.push(curNode.left)
                level.push(curNode.left.val)
            }
            if (curNode.right) {
                newQueue.push(curNode.right)
                level.push(curNode.right.val)
            }
        }
        queue = newQueue
        if (level.length) output.push(level)
    }

    return output
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * Slower due to it reassigning queue causing extra array allocations and 
 * garbage collection
 */

const levelOrder = (root) => {
    if (!root) return []
    let queue = [root]
    const output = []

    while (queue.length) {
        const level = []
        const len = queue.length 
        for (let i = 0; i < len; i++) {
            const curNode = queue.shift()
            level.push(curNode.val)
            if(curNode.left !== null) queue.push(curNode.left)
            if(curNode.right !== null) queue.push(curNode.right)
        }
        output.push(level)
    }

    return output
};

/**
 * Time Complexity: O(n)
 * Sapce Complexity: O(n)
 */