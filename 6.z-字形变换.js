/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s
    let resArr = [],
        row = 0,
        flag = false
    for (let i = 0; i < s.length; i++) {
        resArr[row] = resArr[row] ? resArr[row] + s[i] : s[i]
        if (row === numRows - 1 || row === 0) {
            flag = !flag
        }
        flag ? row++ : row--
    }
    return resArr.join('')
}

