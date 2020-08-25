(function () {
    let share = document.getElementsByClassName('videoauthor-share')[0];
    let text = document.getElementsByClassName('videoauthor-share-text')[0]
    let timerout = null;
    share.addEventListener('click',function (e) {
        console.log('dyk');
    })
    console.log(text.innerHTML)
    let str = text.innerHTML;
    console.log(str.split('')[0])
    function startCycle() {
        timerout = setInterval(()=>{
            // text.innerHTML += str;
            str = str.substring(1, str.length) + str.substring(0, 1);
            text.innerHTML = str;
            text.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
        },500)
    }
    startCycle()
})()