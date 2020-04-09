//本人一开始解答
var twoSum = function(nums, target) {
    let arr = []
    let newArr = []
    let diff
    for(let i in nums) {
        diff = (target - nums[i])
        if(diff !== nums[i]) {
            arr.push(diff)
        }
    }
    for(let i in arr){ // [3,4,2]
        nums.find(item => {
            if(item === arr[i]){
                let index = nums.indexOf(item)
                newArr.push(index)
            }
            
        })
    }
    return newArr.reverse()
};
twoSum([2, 7, 11, 15],9)

//大神解答
//1. 利用map
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0; i< nums.length; i++) {
        let k = target-nums[i]
        if(map.has(k)) {
            return [map.get(k), i]
        }
        map.set(nums[i], i)
    }
    return [];
};

//2.暴力解法
/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function(nums, target) {
    for(var i = 0; i<nums.length; i++) {
      var dif = target - nums[i];
      // j = i+1 的目的是减少重复计算和避免两个元素下标相同
      for(var j = i+1;j<nums.length;j++) {
        if(nums[j] == dif)
          return [i,j]
      }
    }
  }

//3.数组减少查询时间
/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function(nums, target) {
    var temp = []
    for(var i = 0;i<nums.length;i++) {
      var dir = target - nums[i];
      if(temp[dif] != undefined){
        return [temp[dir], i];
      }
      temp[nums[i]] = i;
    }
}