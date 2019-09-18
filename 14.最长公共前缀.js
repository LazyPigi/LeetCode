/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return ''
    if (strs.length == 1) return strs[0]
    let [res, flag, index] = ['', true, 0]
    let firstStr = strs[0]
    while (flag) {
        flag = strs.every(v => {
            if (!v[index]) {
                return false
            }
            return v[index] == firstStr[index]
        })
        if (flag) {
            res += firstStr[index]
        }
        index++
    }
    return res
}

