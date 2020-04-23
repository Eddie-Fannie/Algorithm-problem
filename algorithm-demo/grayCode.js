/**
 * @param {number} n
 * @return {number[]}
 */
// 慕课网
var grayCode = function(n) {
    if(n === 1) {
        return ['0', '1']
    } else {
        let prev = grayCode(n - 1)
        console.log(prev)
        let result = [] //存放格雷编码
        let max = Math.pow(2,n) - 1  //数组长度
        for(let i = 0;i<prev.length;i++) {
            result[i] = `0${prev[i]}`
            result[max-i] = `1${prev[i]}`
        }
        let endResult = []
        result.forEach(item => {
            endResult.push(parseInt(item,2))
        })
        return endResult
    }
};

// 自己到解法
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let map = new Map()
    let endResult = []
    map.set(1,['0','1'])
    if(n === 1) {
        return map.get(1)
    } else if(n === 0){
        return [0]
    } else {
        for(let j = 2;j<= n;j++){
            let result = []
            let max = Math.pow(2,j) - 1
            let newArr = map.get(j-1)
            let lh = newArr.length
            for(let i = 0;i<lh;i++) {
                result[i] = `0${newArr[i]}`
                result[max - i] = `1${newArr[i]}`
            }
            map.set(j, result)
        }
        let testArr = map.get(n)
        for(let z in testArr) {
            endResult.push(parseInt(testArr[z], 2))
        }
        return endResult
    }
};
