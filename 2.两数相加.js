/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    l1 = listNode2arr(l1)
    l2 = listNode2arr(l2)
    var res = []
    len = l1.length > l2.length ? l1.length : l2.length
    for (var i = 0; i < len; i++) {
        var tmp = (l1[i] || 0) + (l2[i] || 0)
        res[i] = res[i] || 0
        res[i] += tmp
        if (res[i] > 9) {
            res[i] = res[i] - 10
            res[i + 1] = 1
        }
    }
    return arr2listNode(res)
}

function ListNode(val) {
    this.val = val
    this.next = null
}

function arr2listNode(arr) {
    var next = new ListNode(arr[arr.length - 1])
    var res = next
    for (var i = arr.length - 1; i > 0; i--) {
        res = new ListNode(arr[i - 1])
        res.next = next
        next = res
    }
    return res
}

function listNode2arr(listnode, arr = []) {
    arr.push(listnode.val)
    if (listnode.next) {
        listNode2arr(listnode.next, arr)
    }
    return arr
}

