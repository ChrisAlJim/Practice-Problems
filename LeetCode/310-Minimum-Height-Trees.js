/*

*/

const findMinHeightTrees = (n, edges) => {
    if (n === 1) return [0]
    const adjacencyList = {}

    for (const [node1, node2] of edges) {
        (node1 in adjacencyList) ? adjacencyList[node1].add(node2) : adjacencyList[node1] = new Set([node2]);
        (node2 in adjacencyList) ? adjacencyList[node2].add(node1) : adjacencyList[node2] = new Set([node1]);
    }

    let minHeight = Infinity
    let minHeightRoots = []

    const getHeight = (queue, visited) => {
        if (!(queue.length)) return 1
        const nextQueue = []
        for (const node of queue) {
            for (const child of adjacencyList[node]) {
                if (!(visited.has(child))) {
                    nextQueue.push(child)
                    visited.add(child)
                }
            }
        }
        return getHeight(nextQueue, visited) + 1
    }

    for (const root in adjacencyList) {
        const curHeight = getHeight([root], new Set([Number(root)]))
        if (curHeight < minHeight) {
            minHeight = curHeight
            minHeightRoots = [Number(root)]
            continue
        }
        if (curHeight === minHeight) {
            minHeightRoots.push(Number(root))
        }
    }

    return minHeightRoots
};