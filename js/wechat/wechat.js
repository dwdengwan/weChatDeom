var wechat = document.getElementsByClassName('wechat')[0]
wechat.addEventListener('click',function (e) {
    console.log('dyk',window.location.href.split("?")[1])
})

var time = document.getElementById('time');
var input = document.getElementById('input');
var send = document.getElementById('send');

send.addEventListener('click',function (e) {
    console.log(input.value+'1111')
})

time.innerHTML = nowTime()