/*
Given the root of a binary tree, imagine yourself standing 
on the right side of it, return the values of the nodes you 
can see ordered from top to bottom.
*/

var rightSideView = function(root) {
    if (root === null) return []
    const output = []

    let queue = [root]

    while (queue.length) {
        const nextQueue = []
        output.push(queue.at(-1).val)

        while (queue.length) {
            const node = queue.shift()
            if (node.left) nextQueue.push(node.left)
            if (node.right) nextQueue.push(node.right)
        }
        queue = nextQueue
    }
    return output
};

/*
Time Complexity: O(n)
Space Complexity: O(h) h = heigh of tree
*/