/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a, b) => a - b)
    let index = parseInt(arr.length / 2)
    return arr.length % 2 ? arr[index] : (arr[index - 1] + arr[index]) / 2
}

