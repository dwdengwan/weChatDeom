var fdContent = document.getElementsByClassName('frienddetail-content')[0]
var fdContentArr =JSON.parse(localStorage.getItem('fContentArr'));

fdContent.innerHTML = `<div class="friend-content-child">
        <div class="friend-content-child-img"></div>
        <div class="friend-content-child-text">
            <div class="friend-content-title">
                <span class="friend-content-spical">${fdContentArr.content}</span>
            </div>
            <div class="friend-content-function">
                <span class="friend-content-time"></span>
                <span class="friend-content-call">
                    <span class="friend-content-love"></span><span class="friend-content-love-num">${fdContentArr.loveNum}</span>
                    <span class="friend-content-tall"></span><span class="friend-content-tall-num">${fdContentArr.tallNum}</span>
                </span>
            </div>
        </div>
    </div>`
var loveNum = document.getElementsByClassName('friend-content-love')[0];
var loveNnum = document.getElementsByClassName('friend-content-love-num')[0];

if (fdContentArr.status == 1){
    loveNum.classList.add('active');
}else{
    loveNum.classList.remove('active');
}

var time = document.getElementsByClassName('friend-content-time');
time[0].innerHTML = showDate()

loveNum.addEventListener('click',function (e) {
    // numAdd(parseInt(item.loveNum),i)
    let num = parseInt(loveNnum.innerHTML)
    if (loveNum.classList.contains('active')){
        num --;
        loveNum.classList.remove('active');
        fdContentArr.status = 0;
    } else{
        num ++;
        loveNum.classList.add('active');
        fdContentArr.status = 1;
    }
    fdContentArr.loveNum = num;
    let arr = JSON.stringify(fdContentArr);
    localStorage.setItem('fContentArr',arr);
    loveNnum.innerHTML = num;
})