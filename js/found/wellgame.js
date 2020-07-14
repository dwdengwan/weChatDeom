var start = document.getElementById('start');
var reset = document.getElementById('reset');
var child = document.getElementsByClassName('wellgame-content-child');
var screen = document.getElementsByClassName('screen')[0];
var middle = document.getElementById('middle');
var begain = document.getElementById('begain');
var prompt = document.getElementById('prompt');
var pContent = document.getElementById('pContent');
var arr = [0,1,2,3,4,5,6,7,8];
var timer = null;
var flag = false;//true我方先 false电脑先
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
}

//游戏结束
function endGame(){
    isBegain = false;
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
    debounce(isMyself,500)
})

begain.addEventListener('click',function (e) {
    debounce(begainFc,500)
})

prompt.addEventListener('click',function (e) {
    prompt.style.display = 'none';
})

for(let i = 0;i<child.length;i++){
    child[i].addEventListener('click',function (e) {
        if (!isBegain){
            prompt.style.display = 'flex'
            pContent.innerText = '游戏暂未开始'
            return
        }
        if (arr[i] == -1){
            prompt.style.display = 'flex'
            pContent.innerText = '已经点被击过了'
            return
        }
        clearTimeout(timer)
        child[i].innerHTML = '我点击的'
        myClick(arr[i])
        arr.splice(i,1,-1)
        let brr = [];
        arr.forEach((item,j,arr)=>{
            if (item !== -1){
                brr.push(item)
            }
        })
        let j = parseInt(Math.random()*(brr.length));
        j = brr[j]
        console.log(j,brr)
        if (brr.length == 0){
            prompt.style.display = 'flex'
            pContent.innerText = '游戏已结束'
            return
        }
        timer = setTimeout(()=>{
            itClick(arr[j])
            child[j].innerHTML = '电脑点击的'
            arr.splice(j,1,-1)
        },2000)
        console.log(arr);
    })
}

