const twoSum = require('./algorithm-demo/twoNumSum');
test('[2, 7, 11, 15] to 9', () =>{
    expect(twoSum([2, 7, 11, 15],9)).toStrictEqual([0,1]);
})