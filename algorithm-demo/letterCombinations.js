/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let wordArray = ['',1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']//显而易见的可以看出数组序列为2-9时分别对应什么字母字符串
    let digitsArray = digits.split('')//把输入的数字字符串转换为一个一个数组，如'23'-> ['2','3']
    let codeArray = []//字母字符串数组
    digitsArray.forEach(item =>{
        //判断输入的字符串有没有1
        if(wordArray[item]) {
            codeArray.push(wordArray[item])
        }
    })
    // 还需要加一个判断, 如果只输入一个数字, 如 "2" 的时候, 只进行一次循环.
  if(codeArray.length === 1) {
    var temp = []
    for(let i = 0; i < code[0].length; i ++) {
      temp.push(codeArray[0][i])
    }
    return temp
  }
    let comb = arr => {
        let resultArray = []
        for(let i = 0,lh=codeArray[0].length;i<lh;i++) {
            for(let j = 0, lh=codeArray[1].length;j<lh;j++) {
                // let result = codeArray[0][i]+codeArray[1][j]
                // resultArray.push(result)
                //等换于
                resultArray.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0,2,resultArray)//把映射完成的数组从第一项开始替换前两项为resultArray
        if(arr.length > 1) {
            comb(arr)
        } else {
            console.log(resultArray)
            return resultArray
        }
        return arr[0]
    }
    return comb(codeArray)
};
letterCombinations("789")