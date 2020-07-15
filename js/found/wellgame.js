var start = document.getElementById('start');
var reset = document.getElementById('reset');
var child = document.getElementsByClassName('wellgame-content-child');
var screen = document.getElementsByClassName('screen')[0];
var middle = document.getElementById('middle');
var begain = document.getElementById('begain');
var prompt = document.getElementById('prompt');
var pContent = document.getElementById('pContent');
var arr = [0,1,2,3,4,5,6,7,8];
var myselfStr = '';
var itselfStr = '';
var timer = null;
var flag = false;//true我方先 false电脑先
var isWin = false;//游戏赢了 结束
var isBegain = false;//游戏是否开始
//debounce 防抖
//重置
function resetFn(){
    for (let i = 0;i<child.length;i++){
        child[i].classList.add('normal');
        child[i].classList.remove('myself');
        child[i].classList.remove('itself');
        child[i].innerHTML = '';
    }
    screen.style.display = 'none';
    arr = [0,1,2,3,4,5,6,7,8];
    isWin = false;
    myselfStr = '';
    itselfStr = '';
}

//我方点击
function myClick(i){
    child[i].classList.add('myself');
    child[i].classList.remove('normal');
    child[i].classList.remove('itself')
}

//电脑方点击
function itClick(i){
    child[i].classList.add('itself');
    child[i].classList.remove('normal');
    child[i].classList.remove('myself')
}

//我方先手还是电脑方先手
function isMyself(){
    if (flag){
        middle.style.justifyContent = 'flex-start';
    }else{
        middle.style.justifyContent = 'flex-end';
    }
    flag = !flag;
}

//游戏开始
function begainFc(){
    isBegain = true;
    resetFn()
    console.log(flag)
    if (!flag){
        itFirstRun()
    }
}

//游戏结束
function endGame(){
    isBegain = false;
}

//电脑先下
function itFirstRun() {
    let brr = [];
    arr.forEach((item,j,arr)=>{
        if (item !== -1 && item !== 9){
            brr.push(item)
        }
    })
    let j = parseInt(Math.random()*(brr.length));
    j = brr[j]
    if (brr.length == 0){
        adviceInfo('游戏已结束')
        return
    }
    itClick(arr[j])
    // child[j].innerHTML = '电脑点击的'
    child[j].innerHTML = `<div class="cha"></div>`
    arr.splice(j,1,9)
    myselfWin(itselfStr,9)
    if (brr.length == 0){
        adviceInfo('游戏已结束')
        return
    }
}

//运行信息
function runInfo(i){
    // flag
    if (!isBegain){
        adviceInfo('游戏暂未开始')
        return
    }
    if (arr[i] == -1){
        // adviceInfo('您已经点击过了')
        return
    }
    if (arr[i] == 9){
        // adviceInfo('电脑已经点击过了')
        return
    }
    clearTimeout(timer)
    // child[i].innerHTML = '我点击的'
    child[i].innerHTML = `<div class="container"></div>`
    myClick(arr[i])
    arr.splice(i,1,-1)
    myselfWin(myselfStr,-1)
    if(isWin){
        return
    }
    itFirstRun()
}

//判断我方赢
function myselfWin(myselfStr,num){
    let myselfArr = [];
    arr.forEach((item,i,arr)=>{
        if (item == num){
            myselfArr.push(i);
            myselfStr = myselfArr.join('')
        }
    })
    isWin = ( myselfStr.indexOf('0') > -1 && myselfStr.indexOf('1') > -1 && myselfStr.indexOf('2') > -1 )  ||
               ( myselfStr.indexOf('3') > -1 && myselfStr.indexOf('4') > -1 && myselfStr.indexOf('5') > -1 )  ||
               ( myselfStr.indexOf('6') > -1 && myselfStr.indexOf('7') > -1 && myselfStr.indexOf('8') > -1 )  ||
               ( myselfStr.indexOf('0') > -1 && myselfStr.indexOf('3') > -1 && myselfStr.indexOf('6') > -1 )  ||
               ( myselfStr.indexOf('1') > -1 && myselfStr.indexOf('4') > -1 && myselfStr.indexOf('7') > -1 )  ||
               ( myselfStr.indexOf('2') > -1 && myselfStr.indexOf('5') > -1 && myselfStr.indexOf('8') > -1 )  ||
               ( myselfStr.indexOf('0') > -1 && myselfStr.indexOf('4') > -1 && myselfStr.indexOf('8') > -1 )  ||
                ( myselfStr.indexOf('2') > -1 && myselfStr.indexOf('4') > -1 && myselfStr.indexOf('6') > -1 )
    console.log(isWin,myselfStr,num)
    if (isWin && num == -1){
        adviceInfo('您赢了')
    }else if(isWin && num == 9){
        adviceInfo('您输了')
    }
}

//判断电脑方赢
function itselfWin(){

}

//提示信息
function adviceInfo(text){
    prompt.style.display = 'flex'
    pContent.innerText = text
    if (isWin){
        pContent.style.color = 'green'
    }
}

start.addEventListener('click',function (e) {
    console.log('start')
    screen.style.display = 'flex';
})

reset.addEventListener('click',function (e) {
    console.log('reset')
    resetFn()
})

middle.addEventListener('click',function (e) {
    console.log(flag)
    debounce(isMyself,500)
})

begain.addEventListener('click',function (e) {
    debounce(begainFc,500)
})

prompt.addEventListener('click',function (e) {
    prompt.style.display = 'none';
    resetFn()
})

for(let i = 0;i<child.length;i++){
    child[i].addEventListener('click',function (e) {
        debounce(runInfo(i),2000)
    })
}

