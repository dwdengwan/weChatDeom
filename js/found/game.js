var child = document.getElementById('child');
var left = document.getElementById('left');
var right = document.getElementById('right');
var up = document.getElementById('up');
var down = document.getElementById('down');
var stop = document.getElementById('stop');
var start = document.getElementById('start');
var timeout = null;//定时器
var t = 0;//运动轨迹 上下
var l = 0;//运动轨迹 左右
var flag = false;//flag false暂停 true开始

// 开始和结束按钮的相互切换
function status() {
    if (flag){
        start.style.display = 'flex';
        stop.style.display = 'none';
    } else{
        start.style.display = 'none';
        stop.style.display = 'flex';
    }
    flag = !flag;
}

//运动的轨迹
function run(t,l){
    setInterval(()=>{
        child.style.top = t + 'px';
        t ++;
    },100)
    console.log(t,l)
}

start.addEventListener('click',function (e) {
    debounce(status,300)
})

stop.addEventListener('click',function (e) {
    debounce(status,300)
})

left.addEventListener('click',function (e) {
    l++;
    console.log('left',l)
})

right.addEventListener('click',function (e) {
    l--;
    console.log('right',l)
})

up.addEventListener('click',function (e) {
    console.log('up')
})

down.addEventListener('click',function (e) {
    console.log('down')
})