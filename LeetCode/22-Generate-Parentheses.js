/**
 * Given n pairs of parentheses, write a function to generate all 
 * combinations of well-formed parentheses.
 */

const generateParenthesis = n => {
    const output = []
    const str = []
    const helper = (open, close) => {
        if (open === 0 && close === 0) {
            output.push(str.join(""))
            return
        }
        if (open > 0) {
            str.push("(")
            helper(open - 1, close, str)
            str.pop()
        }
        if (open < close) {
            str.push(")")
            helper(open, close - 1, str)
            str.pop()
        }
    }
    helper(n,n)
    return output
};

/**
 * Time Complexity: Exponential?
 * Space Complexity: I was recently informed that the callstack doesn't
 *                   take up space but memory. I will still count it as 
 *                   taking up space though.
 *                   O(n)
 */