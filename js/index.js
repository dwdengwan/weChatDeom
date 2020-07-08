function log(text){
    console.log(text)
}
var time = document.getElementById('time');
var content = document.getElementById('content')
var timer = null;
// time.innerHTML = nowTime()

// showDate()
time.innerHTML = showDate()
content.ondbclick = function(){
    console.log('dyk')
}

content.addEventListener("touchstart", function (e) {
    console.log('touchstart');
    timer = setTimeout(function () {
        console.log('LongPress');
        e.preventDefault();
    }, 800);
});
content.addEventListener("touchmove", function (e) {
    console.log('touchmove');
    clearTimeout(timer);
    timer = 0;
});
content.addEventListener("touchend", function (e) {
    console.log('touchend');
    clearTimeout(timer);
    //if (timer != 0) {
    //    alert('这是点击，不是长按');
    //}
    return false;
});