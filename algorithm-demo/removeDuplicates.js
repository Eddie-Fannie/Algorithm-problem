/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var newSet = new Set(nums);  //arr变成了set的数据结构，并去除了其中重复元素
    return Array.from(newSet).length;//Array.from方法将set数据结构转为数组数据结构
};
module.exports = removeDuplicates