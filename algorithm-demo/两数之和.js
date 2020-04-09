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