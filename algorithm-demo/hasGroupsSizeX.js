/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    //最大公约数计算公式
    function gcd(a,b) {
        if(a%b === 0) return b;
        return gcd(b,a%b)
    }
    //相同的牌出现的次数Map
    let timeMap = new Map()
    deck.forEach(item => {
        timeMap.set(item,timeMap.has(item) ? timeMap.get(item) + 1 : 1);
    });
    let timeArr = [...timeMap.values()];
    //另一种求相同的牌出现的次数Map
    // let timeMap = deck.reduce(function(allDeck, num){
    //     if(num in allDeck) {
    //         allDeck[num]++;
    //     }
    //     else {
    //         allDeck[num] = 1;
    //     }
    //     return allDeck;
    // },{})
    // let timeArr = []
    // for(let i in timeMap) {
    //     timeArr.push(timeMap[i])
    // }
    //默认数组首位对公约数计算无干扰
    let g = timeArr[0]

    //遍历出现次数，计算最大公约数
    timeArr.forEach(time => {
        g = gcd(g, time);
    })
    console.log(g >= 2)
    return g >=2;
};
hasGroupsSizeX([2,3,5,4,2,3,4])