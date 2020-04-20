let {twoSum1,twoSum2,twoSum3,twoSum4} = require('./../algorithm-demo/twoSum');

test('[2, 7, 11, 15] to 9', () =>{
    expect(twoSum1([2, 7, 11, 15],9)).toStrictEqual([0,1]);
})
test('[2, 7, 11, 15] to 9', () =>{
    expect(twoSum2([2, 7, 11, 15],9)).toStrictEqual([0,1]);
})
test('[2, 7, 11, 15] to 9', () =>{
    expect(twoSum3([2, 7, 11, 15],9)).toStrictEqual([0,1]);
})
test('[2, 7, 11, 15] to 9', () =>{
    expect(twoSum4([2, 7, 11, 15],9)).toStrictEqual([0,1]);
})

