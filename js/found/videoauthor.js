(function () {
    let share = document.getElementsByClassName('videoauthor-share')[0];
    let text = document.getElementsByClassName('videoauthor-share-text')[0];
    let timerout = null;
    share.addEventListener('click',function (e) {
        console.log('dyk');
    })
    // 粉丝们，老铁们，我的主播间每晚8点共享好听的音乐......
    // let str = text.innerHTML;
    let str = '粉丝们，老铁们，我的主播间每晚8点共享好听的音乐......';
    let strArr = str.split('');
    text.innerHTML = str;
    for (let z=0;z<strArr.length;z++){
        strArr[z] = `<span class="videoauthor-span-randcolor">${strArr[z]}</span>`;
    }
    function startCycle() {
        timerout = setInterval(()=>{
            let displayStr = '';
            strArr.push(strArr[0])
            strArr.splice(0,1)
            for (let z=0;z<strArr.length;z++){
                displayStr += strArr[z]
            }
            text.innerHTML = displayStr;
            let spanColor = document.getElementsByClassName('videoauthor-span-randcolor');
            for (let z=0;z<spanColor.length;z++){
                spanColor[z].style.color = randColor();
            }
        },500)
    }
    startCycle()
})()