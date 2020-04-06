var singleNumber = function(nums) {
    var newArr = []
    var result
    for(let i in nums) {
        console.log(!!newArr[nums[i]])
        newArr[nums[i]] = !!newArr[nums[i]] + 1
    }
    for(let i in newArr){
        if(newArr[i] === 1) {
            result = i
        }
    }
    return result
}
console.log(singleNumber([2,2,1]))
