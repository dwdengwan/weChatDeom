//API assert 断言模式
// const assert = require('assert').strict;
//
// let arr = [[1,2,,3],4,{name:'zmj',age:25}];
//
// assert.deepEqual(arr)

//9*9 的算术表
let [a,b] = ['',''];
for (let i =1;i<5;i++){
    for (let j=1;j<5;j++){
        if (j % 2 == 1){
            b += a + '*';
        }else{
            continue
        }
        console.log(b)
    }
}