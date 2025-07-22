/*
INSTRUCTIONS

You are given a string word consisting of lowercase English letters, and a list of 
strings skeletons consisting of '-' characters and lowercase English letters. Every 
skeleton will always be the same length as word.

Your task is to return a list of skeletons that can form the given word. A skeleton 
can form a word if all - characters can be replaced with other characters taken 
from the same skeleton to make the string equal to the word. If no strings within 
skeletons can form the given word by doing this, return an empty list. The matching 
skeletons should be returned in the same order they appear in skeletons and the 
list of skeletons may not all be unique.

Note: You are not expected to provide the most optimal solution, but a solution 
with time complexity not worse than O(skeletons.length × word.length2) will fit 
within the execution time limit.

EXAMPLE

For word = "hello" and skeletons = ["he-lo", "he--o", "-ell-", "hello"], the output 
should be solution(word, skeletons) = ["he-lo", "hello"].

Explanation:

"he-lo" IS a skeleton of "hello". There is one - character, which should be an l. 
There is an l in the skeleton in the fourth position.

"he--o" is NOT a skeleton of "hello". There are two - characters, which should 
both be l, but there are no l characters in the skeleton.

"-ell-" is NOT a skeleton of "hello". There are two - characters, which should be 
h and o, but there are no other h or o characters in the skeleton.

"hello" is a skeleton of "hello" as they already match.


*/

const oldWordSkeletons = (word, skeletons) => {
    const set = new Set(word)
    const output = []
    for (const skeleton of skeletons) {
        const skeleSet = new Set()
        for (let i = 0; i < skeleton.length; i++) {
            let flag = true
            const char = skeleton[i]
            if (char === "-") continue
            if (char !== word[i]) {
                flag = false
                break
            }
            skeleSet.add(char)
        }
        if (set.size !== skeleSet.size) continue
        output.push(skeleton)
    }
    return output
}

const wordSkeletons = (word, skeletons) => {
  const set = new Set(word)

  function isValidSkeleton(skeleton) {
    const skeleSet = new Set()

    for (let i = 0; i < skeleton.length; i++) {
      const char = skeleton[i]
      if (char === '-') continue
      if (char !== word[i]) return false
      skeleSet.add(char)
    }

    return skeleSet.size === set.size
  }

  return skeletons.filter(isValidSkeleton)
}