var wechat = document.getElementsByClassName('wechat')[0]
// wechat.addEventListener('click',function (e) {
//     console.log('dyk',window.location.href.split("?")[1],e.screenX,e.screenY)
// })

var content = document.getElementById('content');
var main = document.getElementById('main');
var timer = null;
var time = document.getElementById('time');
var input = document.getElementById('input');
var send = document.getElementById('send');
var opacity = 1;

content.addEventListener('click',function (e) {
    console.log(e.screenX,e.screenY);
    clearInterval(timer)
    main.style.display = 'block';
    main.style.opacity = 1;
    main.style.top = (e.screenY - 120) + 'px';
    main.style.left = (e.screenX - 70) + 'px';
    opacity = 1;
    timer = setInterval(()=>{
        opacity -= 0.02;
        main.style.opacity = opacity;
        if (opacity < 0){
            clearInterval(timer)
            main.style.display = 'none';
        }
    },100)
    // timer = setTimeout(()=>{
    //     main.style.display = 'none';
    // },3000)
})

send.addEventListener('click',function (e) {
    console.log(input.value+'1111')
})

time.innerHTML = nowTime()