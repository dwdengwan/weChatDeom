var wechat = document.getElementsByClassName('wechat')[0]
// wechat.addEventListener('click',function (e) {
//     console.log('dyk',window.location.href.split("?")[1],e.screenX,e.screenY)
// })

var content = document.getElementById('content');
var main = document.getElementById('main');
var input = document.getElementById('input');
var send = document.getElementById('send');
var name1 = document.getElementsByClassName('wechat-header-name')[0];
var back = document.getElementsByClassName('wechat-back-a')[0]
var time = document.getElementsByClassName('wechat-body-time');
var myInput = document.getElementsByClassName('wechat-body-myself-content');
var answer = document.getElementsByClassName('wechat-body-yourself-content');
var child = document.getElementsByClassName('wechat-body-child')
var height = 0;//文本内容的高度
var timer = null;
var timeout = null;
var sendClickNum = 0;//发送按钮被点击的次数
var opacity = 1;
var html = `<div class="wechat-body-child">
                <div class="wechat-body-time"></div>
                <div class="wechat-body-myself">
                    <div class="wechat-body-myself-content"></div>
                    <div class="wechat-body-myself-img"></div>
                </div>
                <div class="wechat-body-yourself">
                    <div class="wechat-body-yourself-img"></div>
                    <div class="wechat-body-yourself-content"></div>
                </div>
            </div>`;
var resLen = 0;//后端返回数组的长度
var mySayContent = [];
var youSayContent = [];
var resObj = [];

input.focus()//输入框自动获取焦点

var type = parseInt(location.href.split("?")[1].split('type=')[1].split('=')[0].split('&')[0]);
console.log(location.href.split("?")[1].split('type=')[1].split('=')[0].split('&')[0])
let id = location.href.split("?")[1].split('id=')[1]
name1.innerHTML = `${decodeURI(id)}`;

//获取聊天记录
function getWechatData() {
    let params = {
        url:'/login/details',
        obj:{
            mySayContent,
            youSayContent,
        }
    }
    let fn = function (res) {
        console.log('login/details')
        resObj = res[0];
        resLen = resObj.mySayContent.length;
        sendClickNum = resLen;
        for (let z=0;z<resLen;z++){
            content.innerHTML +=  html;
            myInput[z].innerHTML = resObj.mySayContent[z];
            answer[z].innerHTML = resObj.youSayContent[z];
        }
    }
    httpPOST(params,fn)
}

getWechatData()

//显示框里面的点击
function contentClick(e){
    clearInterval(timer);
    clearTimeout(timeout);
    main.style.display = 'block';
    main.style.opacity = 0;
    main.style.top = (e.screenY - 120) + 'px';
    main.style.left = (e.screenX - 20) + 'px';
    opacity = 0;
    timer = setInterval(()=>{
        opacity += 0.02;
        main.style.opacity = opacity;
        if (opacity > 1){
            clearInterval(timer)
            // main.style.display = 'block';
            opacity = 1;
            timeout = setTimeout(()=>{
                timer = setInterval(()=>{
                    opacity -= 0.02;
                    main.style.opacity = opacity;
                    if (opacity < 0){
                        clearInterval(timer)
                        main.style.display = 'none';
                        opacity = 0;
                    }
                },100)
            },2000)
        }
    },100)
}

//发送按钮
function sendClick(e){
    mySayContent = resObj.mySayContent;
    youSayContent = resObj.youSayContent;
    if (input.value == '') return
    let oldTime = parseInt(localStorage.getItem('oldTime')) || 0;
    let newTime = new Date().getTime();
    content.innerHTML += html;
    if(oldTime == 0 || (newTime - oldTime > 1000*60*3) || sendClickNum == 0){
        time[sendClickNum].innerText = nowTime();
    } else {
        time[sendClickNum].innerText = '';
    }
    myInput[sendClickNum].innerText = input.value;
    mySayContent.push(input.value)
    yourSay(sendClickNum)
    height += child[sendClickNum].offsetHeight;
    content.scrollTop = height;
    console.log(height,content.scrollTop)
    sendClickNum ++;
    localStorage.setItem('oldTime',newTime)
    input.value = '';
    getWechatData()
    input.focus()
}

//对方回应语句
function yourSay(n){
    let text = input.value;
    if(text.indexOf('你好') > -1){
        answer[n].innerText = '谢谢你的问候，你也好呀。'
        youSayContent.push('谢谢你的问候，你也好呀。')
    }else if(text.indexOf('在干什么') > -1){
        answer[n].innerHTML = '吃饭，睡觉，打豆豆。';
        youSayContent.push('吃饭，睡觉，打豆豆。')
    }else{
        answer[n].innerHTML = text;
        youSayContent.push(text)
    }
}

content.addEventListener('click',function (e) {
    contentClick(e)
})

send.addEventListener('click',function (e) {
    sendClick(e)
})

input.addEventListener('keyup',function (e) {
    if (e.keyCode == 13){
        sendClick(e)
        input.focus()
    }
})

back.addEventListener('click',function (e) {
    switch (type){
        case 1:
            back.href = "../../../weChatDeom/index.html";
            break
        case 2:
            back.href = "../../../weChatDeom/html/book/index.html";
            break
        case 3:
            break
    }
})

// time.innerHTML = nowTime()