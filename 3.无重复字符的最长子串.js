/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let res = 0
    let tempStr = ''
    for (let i = 0; i < s.length; i++) {
        let index = tempStr.indexOf(s[i])
        if (index >= 0) {
            tempStr = tempStr.substring(index + 1)
        }
        tempStr += s[i]
        res = Math.max(res, tempStr.length)
    }
    return res
}

