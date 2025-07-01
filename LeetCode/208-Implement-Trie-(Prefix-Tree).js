/*
A trie (pronounced as "try") or prefix tree is a tree data structure used 
to efficiently store and retrieve keys in a dataset of strings. There are 
various applications of this data structure, such as autocomplete and 
spellchecker.

Implement the Trie class:

- Trie() Initializes the trie object.
- void insert(String word) Inserts the string word into the trie.
- boolean search(String word) Returns true if the string word is in the trie 
  (i.e., was inserted before), and false otherwise.
- boolean startsWith(String prefix) Returns true if there is a previously 
  inserted string word that has the prefix prefix, and false otherwise.
*/

class Trie {
    constructor () {
        this.root = new Map()
    }

    insert (word) {
        let curNode = this.root
        for (const letter of word) {
            if (!(curNode.has(letter))) {
                curNode.set(letter, new Map())
            }
            curNode = curNode.get(letter)
        }
        curNode.set("end", true)
    }

    search (word) {
        let curNode = this.root
        for (const letter of word) {
            if (!(curNode.has(letter))) return false
            curNode = curNode.get(letter)
        }
        return (curNode.has("end"))
    }

    startsWith (prefix) {
        let curNode = this.root
        for (const letter of prefix) {
            if (!(curNode.has(letter))) return false
            curNode = curNode.get(letter)
        }
        return true
    }
};

/*
Time Complexity for all operations: O(m) 
Space Complexity: All the English letter combinations in the world
*/