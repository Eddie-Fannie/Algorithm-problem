/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let num = 0;
    for(let i in flowerbed) {
        if(flowerbed[i] === flowerbed[i+1]) {
            flowerbed[i+1] = 1
            num++;
        } else {
            return false;
        }
    }
    if(num === n) {
        return true;
    } else {
        return false;
    }
}
canPlaceFlowers([1,0,0,0,1],1)