///////////
/// MY CODE
///////////

function solution(connections) {
    const seenNodes = new Set()
    
    let flag = false
    
    const currSeenPath = new Set()
    
    const helper = (i) => {
        if (currSeenPath.has(i)) {
            flag = true
            return
        }
        
        currSeenPath.add(i)
        seenNodes.add(i)
        
        for (const node of connections[i]) {
            if (flag) return;
            helper(node)
        }
        
        currSeenPath.delete(i)
    }
    
    for (let i = 0; i < connections.length && !flag; i++) {
        if (!seenNodes.has(i)) {
            helper(i)
        }
    }
    
    return flag
}

// Time Complexity: O(V + E)
// Space Complexity: O(V)


////////////////
/// AI GENERATED
////////////////

function solution(graph) {
    const visited = new Set()
    const inPath = new Set()
    
    const dfs = (node) => {
        if (inPath.has(node)) return true
        if (visited.has(node)) return false
        
        visited.add(node)
        inPath.add(node)
        
        for (const neighbor of graph[node]) {
            if (dfs(neighbor)) return true
        }
        
        inPath.delete(node)
        return false
    }
    
    for (let i = 0; i < graph.length; i++) {
        if (dfs(i)) return true
    }
    
    return false
}