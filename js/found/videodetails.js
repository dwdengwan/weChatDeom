(function () {
    let content = document.getElementsByClassName('videodetails-content')[0];
    let child = document.getElementsByClassName('videodetails-fixed')[0];
    let callback = document.getElementsByClassName('videodetails-callback')[0]
    let fContent = document.getElementsByClassName('fixed-content');
    let height = 0;
    let timerout = null;
    content.addEventListener('click',function (e) {
        clearInterval(timerout)
        console.log('dyk')
        timerout = setInterval(()=>{
            if (height>70){
                clearInterval(timerout)
                return
            }
            height += 1;
            child.style.height = height + '%';
            child.style.display = 'block';
        },10)
    })
    child.addEventListener('click',function (e) {
        console.log('dw');
        e.stopPropagation()
        clearInterval(timerout)
        timerout = setInterval(()=>{
            if (height<0){
                child.style.display = 'none';
                clearInterval(timerout)
                return
            }
            height -= 1;
            child.style.height = height + '%';
        },10)
    })
    callback.addEventListener('click',function (e) {
        e.stopPropagation()
        let url = window.location.href.split('found')[0] + `found/video.html`;
        window.location.href = url;
    })
    for (let z=0;z<fContent.length;z++){
        fContent[z].addEventListener('click',function (e) {
            e.stopPropagation()
            let url = window.location.href.split('found')[0] + `found/videoauthor.html`;
            window.location.href = url;
        })
    }
})()