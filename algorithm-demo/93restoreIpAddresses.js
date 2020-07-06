/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result = []; // 结果集
    let item = []; // 每次分割的字符串集
    // let str = '';// 字符串
    funHelper(s,result,item,0)
    return result;
};
function helper(s,result,item,str) {
    console.log(s)
    for(let i =0;i<3;i++) {
        if(s.slice(i+1).length >=3 && parseInt(s.slice(0,i+1))>=0 && parseInt(s.slice(0,i+1))<=0) {
            item.push(s.slice(0,i+1))
            helper(s.slice(i+1),result,item,str)
        } else {
            return
        }
        str = item.join('.')
        result.push(str)
    }
    console.log(result)
}
restoreIpAddresses('197233111200')