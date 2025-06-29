/*
Given the root of a binary tree, invert the tree, and return its root.
*/

var invertTree = function(node) {
    if (!node) return node
    const stack = [node]

    while (stack.length) {
        const cur = stack.pop()
        if (!cur) continue;
        [cur.left, cur.right] = [cur.right, cur.left]
        stack.push(cur.left, cur.right)
    }
    return node
};

/*
Time Complexity: O(n)
Space Complexity: O(h) h = height of tree
*/