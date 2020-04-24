/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let arr = s.split('')
    let splitStr = []
    splitStr[0] = arr[0]
    for(let i = 1;i<arr.length;i++) {
        if(arr[i] !== arr[0]) {
            splitStr.push(arr[i])
        } else {
            return splitStr
        }
    }
    console.log(splitStr)
    let result = s.split(splitStr.join(''))
    console.log(result)
    for(let j in result) {
        if(result[0] !== result[j]) {
            return false
        } else {
            return true
        }
    }
};
repeatedSubstringPattern('aba')
