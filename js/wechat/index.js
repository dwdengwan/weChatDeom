function log(text){
    console.log(text)
}
finnerHtml(0)
var index = document.getElementById('index');
var other = document.getElementById('other');
var content = document.getElementById('content');
var screen = document.getElementById('screen');
var sContent = document.getElementById('sContent');
var iContent = document.getElementById('iContent');
// var footer = document.getElementById('footer');
var iChild = document.getElementsByClassName('index-content-child');
var time = document.getElementsByClassName('index-content-time');
var text = document.getElementsByClassName('index-content-child-span')
var timer = null;//定时器
var H = 0;//上下滑动的距离
var targetT = 0;//上下滑动页面 当前y值
var oldT = 0;//上下滑动页面 1ms前的y值
var folgT = false;//true上下滑动 flase左右滑动
var targetL = 0;//左右滑动页面 当前x值
var oldL = 0;//左右滑动页面 1ms前x值
var L = 0;//左右滑动的距离

// time.innerHTML = nowTime()
// time.innerHTML = showDate()

for( let i = 0;i<18;i++){
    iContent.innerHTML += `
            <div class="index-content-child">
                <div class="index-content-img"></div>
                <div class="index-content-middle">
                    <a href="./html/wechat/wechat.html?type=1&id=${i}">
                        <div class="index-content-dd">
                            <span class="index-content-name">测试${i}</span>
                            <span class="index-content-time"></span>
                        </div>
                        <div class="index-content-child-lt">
                            <span class="index-content-child-span"></span>
                        </div>
                    </a>
                </div>
            </div>`;
    time[i].innerHTML = showDate()
    text[i].innerHTML = `我们${time[i].innerHTML}聊了些啥内容呢${i}`;
}

index.addEventListener('touchstart',function (e) {
    // console.log('1',e.target.offsetTop,index.offsetHeight)
    // oldT = e.target.offsetTop;
    // console.log(oldT)
})

index.addEventListener('touchmove',function (e) {
    // console.log(e.changedTouches[0].screenX,e.changedTouches[0].screenY);
    targetL = e.changedTouches[0].screenX;
    targetT = e.changedTouches[0].screenY;
    setTimeout(()=>{
        oldT = e.changedTouches[0].screenY;
        oldL = e.changedTouches[0].screenX;
    },1)
    // let boolA = (targetT > oldT ) && (targetL == oldL)
    // let boolB = (targetT == oldT ) && (targetL > oldL)
    // boolA && !boolB &&
    if(targetT > oldT){
        folgT = true;
    }else{
        folgT = false;
    }
    if(folgT){
        console.log('dykTTT')
        if (targetT > oldT && H < index.offsetHeight){
            H++;
        } else if(targetT < oldT && H >0){
            H--;
        }
        index.style.top = H +'%';
        other.style.bottom = (100 -H) + '%';
        folgT = true;
    }else {
        // !boolA && boolB &&
        console.log('dwLLL')
        if (targetL > oldL && L < index.offsetWidth){
            L++;
        } else if(targetL < oldL && L >0){
            L--;
        }
        index.style.left = L +'%';
        // other.style.right = (100 -H) + '%';
        folgT = false;
    }

})

index.addEventListener('touchend',function (e) {
    if (folgT){
        if (H>50){
            // index.style.top = '100%';
            index.style.display = 'none';
            // other.style.top = 0;
            other.style.bottom = 0;
        } else{
            index.style.top = 0;
            index.style.left = 0;
            other.style.bottom = '100%';
        }
    } else{
        if (L>50){
            // index.style.top = '100%';
            index.style.display = 'none';
            // other.style.top = 0;
            other.style.left = 0;
        } else{
            index.style.top = 0;
            index.style.left = 0;
            other.style.left = '100%';
        }
    }
    H = 0;
    L = 0;
})

other.addEventListener('click',function (e) {
    index.style.display = 'block';
    index.style.top = 0;
    other.style.bottom = '100%';
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

//自动浏览功能
iContent.addEventListener("click",function (e) {
    let hChild = 0;
    let hParent = 0;
    let h = 0;
    let scrollH = iContent.scrollTop;
    hParent = iContent.offsetHeight;
    h = iChild[0].offsetHeight;
    for (let i = 0;i < iChild.length;i++){
        hChild += iChild[i].offsetHeight
    }
    if(hChild > hParent){
        cycle(hParent,hChild)
    }
})

function cycle(hP,hC){
    if (timer) clearInterval(timer)
    timer = setInterval(()=>{
        if (iContent.scrollTop + hP < hC){
            iContent.scrollTop += 1;
        }else if(iContent.scrollTop + hP == hC){
            clearInterval(timer)
            setTimeout(()=>{
                timer = setInterval(()=>{
                    iContent.scrollTop -= 1;
                    if (iContent.scrollTop == 0){
                        clearInterval(timer)
                        setTimeout(()=>{
                            cycle(hP,hC)
                        },3000)
                    }
                },10)
            },3000)
        }
    },10)
}

// footer.addEventListener("click",function (e) {
//     clearInterval(timer)
// })

//获取滚动条的位置
nowLocation(iContent,'wechatScroll')

//返回到指定的位置 id 滚动条区域
backLocation(iContent,'wechatScroll')

//axios POST请求
function getInitData() {
    let params = {
        url:'/login',
        obj:{
            name:'邓万',
            age:'12'
        }
    }
    let data = httpPOST(params)
    console.log(data)
}

getInitData()