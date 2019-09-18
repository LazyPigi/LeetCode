/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.trim()
    let [res, min, max] = [str[0], (-2) ** 31, 2 ** 31 - 1]
    for (let i = 1; i < str.length; i++) {
        if (str[i] == ' ' || isNaN(str[i])) {
            break
        }
        res += str[i]
    }
    res = isNaN(res) ? 0 : res
    if (res < min) res = min
    if (res > max) res = max
    return res
}

