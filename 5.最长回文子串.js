/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (str) {
    if (str.length < 2) return str
    for (let i = 0; i < str.length - 1; i++) {
        let len = str.length - i
        for (let j = 0; j <= i; j++) {
            let tempStr = str.substring(j, j + len)
            let leftIndex = Math.floor(tempStr.length / 2) - 1
            let rightIndex = tempStr.length % 2 ? leftIndex + 2 : leftIndex + 1
            if (tempStr.length <= 3 && tempStr[leftIndex] === tempStr[rightIndex]) {
                return tempStr
            }
            while (tempStr[leftIndex] === tempStr[rightIndex]) {
                if (leftIndex === 0) {
                    return tempStr
                } else {
                    --leftIndex
                    ++rightIndex
                }
            }
        }
    }
    return str[0]
}

