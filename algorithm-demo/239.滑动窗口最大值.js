/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let result = []
    if(nums instanceof Array && nums.length !== 0 && k>=1 && k<=nums.length) {
        for(let i =0;i<nums.length-k+1;i++) {
            result.push(Math.max(...nums.slice(i,i+k)))
        }
    }
    
    return result
};
// @lc code=end

