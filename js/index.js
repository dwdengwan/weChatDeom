function log(text){
    console.log(text)
}
var time = document.getElementById('time');
var index = document.getElementById('index');
var content = document.getElementById('content');
var screen = document.getElementById('screen');
var sContent = document.getElementById('sContent');
var iContent = document.getElementById('iContent');
var footer = document.getElementById('footer');
var iChild = document.getElementsByClassName('index-content-child');
var timer = null;
var H = 0;//滑动页面
var targetT = 0;
var oldT = 0;
// time.innerHTML = nowTime()

// showDate()
time.innerHTML = showDate()

index.addEventListener('touchstart',function (e) {
    // console.log('1',e.target.offsetTop,index.offsetHeight)
    oldT = e.target.offsetTop;
    console.log(oldT)
})

index.addEventListener('touchmove',function (e) {
    targetT = e.target.offsetTop;
    console.log(targetT,oldT,H)
    if (targetT > oldT && H < index.offsetHeight){
        H++;
    } else if(targetT < oldT && H > 0){
        H--;
    }
    index.style.top = H +'%';
})

index.addEventListener('touchend',function (e) {

})

// content.ondbclick = function(){
//     console.log('dyk')
// }

// content.addEventListener("touchstart", function (e) {
//     console.log('touchstart');
//     timer = setTimeout(function () {
//         console.log('LongPress');
//         e.preventDefault();
//     }, 800);
// });

// content.addEventListener("touchmove", function (e) {
//     console.log('touchmove');
//     clearTimeout(timer);
//     timer = 0;
// });

// content.addEventListener("touchend", function (e) {
//     console.log('touchend',e);
//     clearTimeout(timer);
//     screen.style.display = 'block';//出现遮罩层
//     //if (timer != 0) {
//     //    alert('这是点击，不是长按');
//     //}
//     return false;
// });

screen.onclick = function () {
    console.log('screen')
    screen.style.display = 'none';
}

sContent.addEventListener("click",function (e) {
    console.log('sContent',e)
    e.stopPropagation()
    screen.style.display = 'block';
})

iContent.addEventListener("click",function (e) {
    let hChild = 0;
    let hParent = 0;
    let h = 0;
    let scrollH = iContent.scrollTop;
    hParent = iContent.offsetHeight;
    h = iChild[0].offsetHeight;
    // iChild.forEach((item)=>{
    //     hChild += item.offsetHeight
    // })
    for (let i = 0;i < iChild.length;i++){
        hChild += iChild[i].offsetHeight
    }
    if(hChild > hParent){
        if (timer) clearInterval(timer)
        timer = setInterval(()=>{
            if (iContent.scrollTop + hParent < hChild){
                // iContent.scrollTop += h;
                iContent.scrollTop += 1;
            }else{
                iContent.scrollTop = 0;
            }

        },10)
    }
})

footer.addEventListener("click",function (e) {
    clearInterval(timer)
})