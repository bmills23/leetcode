// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function(s, p) {
    if (p === '') return s === '';

    if (p[1] === '*') {
        return isMatch(s, p.slice(2)) || s !== '' && (s[0] === p[0] || p[0] === '.') && isMatch(s.slice(1), p);
    } else {
        return s !== '' && (s[0] === p[0] || p[0] === '.') && isMatch(s.slice(1), p.slice(1));
    }
};

console.log(isMatch("a", "a*")); // false