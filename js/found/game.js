var child = document.getElementById('child');
var left = document.getElementById('left');
var right = document.getElementById('right');
var up = document.getElementById('up');
var down = document.getElementById('down');
var stop = document.getElementById('stop');
var start = document.getElementById('start');
var gContent = document.getElementsByClassName('game-content')[0]

var timer = null;//定时器
var t = 0;//运动轨迹 上下
var l = 0;//运动轨迹 左右
var nowT = 53;//方块当前的位置 top
// var nowT = `calc(7.2% + 1 -1)`
var nowL = 0;//方块当前的位置 left
var nowNh = 1;//当前方块的高度小方块的个数
var nowNw = 4;//当前方块的宽度小方块的个数
var nowRote = 0;//当前方块旋转的角度 nowRote*90
var flag = false;//flag false暂停 true开始

var nowArr = [3,4,5,6]//当前方块的位置
var isLeft = false;//是否触碰到右边边界
var isRight = false;//是否触碰到左边边界
var isButtom = false;//是否触碰到低边边界
var num = 1;//

for(let i = 0;i<120;i++){
    gContent.innerHTML += `<div class="game-content-child"></div>`;
}
var gChild = document.getElementsByClassName('game-content-child')

nowArr.forEach((item,i,arr)=>{
    gChild[item].style.background ='rgba(100,50,200,0.8)'
})

//方块的运行路线
function runInfo(l) {
    //l == 1 left l == -1 right
    let n = 0;
    clearInterval(timer)
    timer = setInterval(()=>{
        let bool = false;
        for (let j=0;j<nowArr.length;j++){
            nowArr[j] += l + 10;
            if (nowArr[j] % 10 == 9){
                isLeft = true;
            }else if(nowArr[j] % 10 == 0){
                isRight = true;
            }
            bool = nowArr[j] > 119
            if (bool){
                clearInterval(timer)
                reset()
                return
            }
        }
        l = 0;
        rand()
        n++;
    },1000)
}

//方块的转换
function transform(num) {
    switch (num){
        case 1:
            // 横向转竖向
            let transformArr1 = [];
            transformArr1.push(nowArr[1])
            transformArr1.push(nowArr[1]+10)
            transformArr1.push(nowArr[1]+20)
            transformArr1.push(nowArr[1]+30)
            nowArr = transformArr1
            touchEdge()
            if ((nowArr[1] + 30) > 110 && (nowArr[1] + 30) < 119){
                let lastNum = nowArr[1] % 10
                let transformArr1 = [];
                transformArr1.push(lastNum + 80)
                transformArr1.push(lastNum + 90)
                transformArr1.push(lastNum + 100)
                transformArr1.push(lastNum + 110)
                nowArr = transformArr1
                touchEdge()
            }
            rand()
            // }
            break;
        case 2:
            //竖向转横向
            let transformArr2 = [];
            if (nowArr[0] % 10 == 0 || nowArr[0] % 10 == 9) return
            transformArr2.push(nowArr[0]-1);
            transformArr2.push(nowArr[0]);
            transformArr2.push(nowArr[0]+1);
            transformArr2.push(nowArr[0]+2);
            nowArr = transformArr2;
            touchEdge()
            rand()
            break;
    }
}

//方块的渲染
function rand() {
    for (let i=0;i<gChild.length;i++){
        if (nowArr.includes(i)){
            gChild[i].style.background ='rgba(100,50,200,0.8)'
        } else{
            gChild[i].style.background = 'red';
        }
    }
}

//是否触碰到边缘
function touchEdge() {
    nowArr.forEach((item,i,arr)=>{
        if(item >= 110 && item <= 119){//触碰到底边了
            console.log('isButtom')
            isButtom  = true;
            clearInterval(timer)
            // let transformArr = [];
            // let lastNum = nowArr[1] % 10;
            // transformArr.push(lastNum + 80)
            // transformArr.push(lastNum + 90)
            // transformArr.push(lastNum + 100)
            // transformArr.push(lastNum + 110)
            // nowArr = transformArr
            // rand()
            return
        }else if(item % 10 == 0){//触碰到左边
            console.log('isRight')
            isRight = true;
            // let transformArr = [];
            // transformArr.push(nowArr[0] - 10)
            // transformArr.push(nowArr[0])
            // transformArr.push(nowArr[0] + 10)
            // transformArr.push(nowArr[0] + 20)
            // nowArr = transformArr
            // rand()
            return
        } else if (item % 10 == 9){//触碰到右边
            console.log('isLeft')
            isLeft = true;
            // let transformArr = [];
            // transformArr.push(nowArr[3] - 10)
            // transformArr.push(nowArr[3])
            // transformArr.push(nowArr[3] + 10)
            // transformArr.push(nowArr[3] + 20)
            // nowArr = transformArr
            // rand()
            return
        }
        reset()
    })
}

// 开始和结束按钮的相互切换
function status() {
    flag = !flag;
    if (flag){
        start.style.display = 'flex';
        stop.style.display = 'none';
    } else{
        start.style.display = 'none';
        stop.style.display = 'flex';
    }
}

//状态初始化
function reset(){
    isLeft = false;
    isRight = false;
    isButtom = false;
}

start.addEventListener('click',function (e) {
    debounce(status,300)
    clearInterval(timer)
})

stop.addEventListener('click',function (e) {
    debounce(status,300)
    runInfo(0)
})

left.addEventListener('click',function (e) {
    if (isLeft){
        debounce(runInfo(0),1000)
    } else{
        debounce(runInfo(1),1000)
    }
})

right.addEventListener('click',function (e) {
    if (isRight){
        debounce(runInfo(0),1000)
    } else{
        debounce(runInfo(-1),1000)
    }
})

up.addEventListener('click',function (e) {
    debounce(transform(num),1000)
    if (num == 1){
        num = 2;
    } else if(num == 2){
        num = 1;
    }
})

down.addEventListener('click',function (e) {

})














































































































//
// //运动的轨迹 t距顶部的高度 nh*42 自身的高度
// function run(t,nh){
//     timer = setInterval(()=>{
//         child.style.top = t + 'px';
//         child.style.left = `calc(4% + ${84+l*42}px)`
//         t += 42;
//         nowT = t;
//         if (t > (546 - 42*nh) ) {
//             clearInterval(timer)
//             nowT = 53;
//         }
//     },1000)
// }
//
// //转换
// function conversion(n){
//     child.style.transform = `rotate(${90*n}deg)`
//     child.style.left = nowL;
//     child.style.top = nowT;
// }
//
//
//