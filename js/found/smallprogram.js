var main = document.getElementsByClassName('smallprogram')[0]
var othermain = document.getElementsByClassName('programother')[0];
var circle = document.getElementsByClassName('smallprogram-fix-circle')[0];
var pContent = document.getElementsByClassName('programother-content')[0];
var pText = document.getElementsByClassName('programother-text')[0];
var foot = document.getElementsByClassName('programother-footer')[0];
var tool = document.getElementsByClassName('smallprogram-fix')[0];
var keyupSpan = document.getElementsByClassName('programother-keyup-span');
var sContent = document.getElementsByClassName('smallprogram-fix-content')[0];
var timer = null;
var Text = '';

for (let z=0;z<keyupSpan.length;z++){
    keyupSpan[z].addEventListener('click',function (e) {
        let text = '';
        switch (z){
            case 0:
                text = 'Q'
                break;
            case 1:
                text = 'W'
                break;
            case 2:
                text = 'E'
                break;
            case 3:
                text = 'R'
                break;
            case 4:
                text = 'T'
                break;
            case 5:
                text = 'Y'
                break;
            case 6:
                text = 'U'
                break;
            case 7:
                text = 'I'
                break;
            case 8:
                text = 'O'
                break;
            case 9:
                text = 'P'
                break;
            case 10:
                text = 'A'
                break;
            case 11:
                text = 'S'
                break;
            case 12:
                text = 'D'
                break;
            case 13:
                text = 'F'
                break;
            case 14:
                text = 'G'
                break;
            case 15:
                text = 'H'
                break;
            case 16:
                text = 'J'
                break;
            case 17:
                text = 'K'
                break;
            case 18:
                text = 'L'
                break;
            case 19:
                text = '!'
                break;
            case 20:
                text = 'Z'
                break;
            case 21:
                text = 'X'
                break;
            case 22:
                text = 'C'
                break;
            case 23:
                text = 'V'
                break;
            case 24:
                text = 'B'
                break;
            case 25:
                text = 'N'
                break;
            case 26:
                text = 'M'
                break;
            case 27:
                text = '+'
                break;
            case 6:
                text = 'A'
                break;
            case 28:
                text = '123'
                break;
            case 29:
                text = ' '
                break;
        }
        pText.innerHTML += text;
        Text = pText.innerHTML;
        console.log(Text)
        if (z == 30){
            foot.style.display = 'none';
            pContent.style.height = '100%';
            setTimeout(()=>{
                othermain.style.display = 'none';
                sContent.innerHTML = Text;
                main.style.display = 'block';
                circle.style.left = '45.75%';
                pText.innerHTML = '';
            },500)
        }
    })
}

//限制最大宽高，不让滑块出去
var maxW = document.body.clientWidth - circle.offsetWidth;
// var maxW = tool.clientWidth;
console.log(maxW)
// var maxH = document.body.clientHeight - circle.offsetHeight;
//手指触摸开始，记录div的初始位置
circle.addEventListener('touchstart', function(e) {
    var ev = e || window.event;
    var touch = ev.targetTouches[0];
    oL = touch.clientX - circle.offsetLeft;
    // oT = touch.clientY - circle.offsetTop;//y轴移动
    document.addEventListener("touchmove", defaultEvent, false);
},{passive:false});
//触摸中的，位置记录
circle.addEventListener('touchmove', function(e) {
    var ev = e || window.event;
    var touch = ev.targetTouches[0];
    var oLeft = touch.clientX - oL;
    // var oTop = touch.clientY - oT;//y轴移动
    if(oLeft < 0) {
        oLeft = 0;
    } else if(oLeft >= maxW) {
        oLeft = maxW;
    }
    if (oLeft>224){
        main.style.display = 'none';
        othermain.style.display = 'block';
        clearInterval(timer)
        var width = 0;
        timer = setInterval(()=>{
            if (width==99){
                clearInterval(timer)
                foot.style.display = 'block';
                pContent.style.height = '70%';
                pContent.style.display = 'flex';
            }
            width++;
            othermain.style.width = width + '%';
            othermain.style.height = width + '%';
        },1)
    }else if(oLeft<163){
        oLeft = 143;
        // window.location.href="file:///D:/work/newWork/demo/wechatjs/weChatDeom/html/found/index.html";
        window.history.back(-1);
    }
    //y轴移动
    // if(oTop < 0) {
    //     oTop = 0;
    // } else if(oTop >= maxH) {
    //     oTop = maxH;
    // }
    circle.style.left = oLeft + 'px';
    // circle.style.top = oTop + 'px';
},{ passive: false });
//触摸结束时的处理
circle.addEventListener('touchend', function() {
    document.removeEventListener("touchmove", defaultEvent,{passive:false});
});
//阻止默认事件
function defaultEvent(e) {
    e.preventDefault();
}