/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
//恶心解法
var canPlaceFlowers = function(flowerbed, n) {
    let str = flowerbed.join('').split('1') //把输入的数组以1进行切割
    let arr = []//新建一个存放0字符串数组
    let num = 0//新建一个存放棵数的
    for(let i in str) {
        if(str[i]) {
            arr.push(str[i])
        }
    }
    if(flowerbed[0] === 0 || flowerbed[flowerbed.length-1] === 0) {
        arr.forEach(e => {
            let mod = element.length % 2
            let result = element.length / 2
            if(element.length >= 2 && mod) {
                num = num + (element.length - mod ) /2
            } else if(element.length >= 2 && !mod) {
                num = num + result
            } 
        })
    } else {
        arr.forEach(element => {
            let mod = element.length % 2
            let result = element.length / 2
            if(element.length > 2 && mod) {
                num = num + (element.length - mod ) /2
            } else if(element.length > 2 && !mod) {
                num = num + result - 1
            } 
            
        });
    }
    
    console.log(num)
    if(num == n) {
        return true;
    } else {
        return false;
    }
}
canPlaceFlowers([1,0],1)
// module.exports = {
//     canPlaceFlowers
// }