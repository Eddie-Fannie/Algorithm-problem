let {canPlaceFlowers} = require('./../algorithm-demo/canPlaceFlowers');

test('[1,0,0,0,1] to 2', () =>{
    expect(canPlaceFlowers([1,0,0,0,1],2)).toStrictEqual(2);
})