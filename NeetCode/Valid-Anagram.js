/**
 * Given two strings s and t, return true if the two strings are anagrams 
 * of each other, otherwise return false.
 * 
 * An anagram is a string that contains the exact same characters as another 
 * string, but the order of the characters can be different.
 */

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const freq = {}

        for (let i = 0; i < s.length; i++) {
            (s[i] in freq) ? freq[s[i]] += 1 : freq[s[i]] = 1;
            (t[i] in freq) ? freq[t[i]] -= 1 : freq[t[i]] = -1;
        }
        for (const char in freq) {
            if (freq[char] !== 0) return false
        }
        return true
    }
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */