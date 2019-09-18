/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let [left, right, max] = [0, height.length - 1, 0]

    do {
        let [width, minHeight] = [right - left]
        if (height[left] < height[right]) {
            minHeight = height[left]
            left++
        } else {
            minHeight = height[right]
            right--
        }
        max = minHeight * width > max ? minHeight * width : max
    } while (left !== right)
    return max
}

