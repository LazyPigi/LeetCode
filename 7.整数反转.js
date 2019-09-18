/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let [flag, str] = [x > 0, x > 0 ? x : -x]
    res = str
        .toString()
        .split('')
        .reverse()
        .join('')
    res = flag ? res : -res
    if (res <= (-2) ** 31 || res >= 2 ** 31 - 1) res = 0
    return res
}

