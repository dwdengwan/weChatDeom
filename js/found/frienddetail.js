var fdContent = document.getElementsByClassName('frienddetail-content')[0];
var fdContentArr =JSON.parse(localStorage.getItem('fContentArrChild'));
var input = document.getElementById('input');
var send = document.getElementById('send');
var loveNum = 0;
var loveNnum = 0;
var commentImg = [];
var commentSay = [];
var time = [];
var fdComments = '';
var fdCommentsText = [];
var screen = document.getElementsByClassName('screen')[0];
var sChild = document.getElementsByClassName('screen-child')[0];
var timer = null;
var t = 86;
var p = 0;

function fdContentAddInnerHtml(){
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
    fdContent.innerHTML += `<div class="frienddetail-content-comments"></div>`
    fdComments = document.getElementsByClassName('frienddetail-content-comments')[0];
    for (let z = 0;z<parseInt(fdContentArr.tallNum);z++){
        console.log(input.value)
        if (input.value == ''){
            input.value = '我的未来不是梦';
        }
        fdCommentsText.push({
            text:input.value
        })
        // input.value = '';
        console.log(fdCommentsText)
        fdComments.innerHTML += `<div class="frienddetail-comments-child">
            <div class="frienddetail-comments-img"></div>
            <div class="frienddetail-comments-say">${fdCommentsText[z].text}</div>
        </div>`
    }
    loveNum = document.getElementsByClassName('friend-content-love')[0];
    loveNnum = document.getElementsByClassName('friend-content-love-num')[0];
    commentImg = document.getElementsByClassName('frienddetail-comments-img');
    commentSay = document.getElementsByClassName('frienddetail-comments-say');

    for (let z = 0;z<parseInt(fdContentArr.tallNum);z++) {
        commentImg[z].style.background = randColor();
        // commentSay[z].style.color = randColor();
    }

    if (fdContentArr.status == 1){
        loveNum.classList.add('active');
    }else{
        loveNum.classList.remove('active');
    }

    time = document.getElementsByClassName('friend-content-time');
    time[0].innerHTML = showDate()
}

function begain(){
    // ${input.value}
    clearInterval(timer)
    sChild.innerHTML = `<span class='screen-child-text'>${input.value}</span>`
    timer = setInterval(()=>{
        console.log(t)
        sChild.style.top = t + '%';
        sChild.style.opacity = p;
        t --;
        p += 0.1 
        if(t < 62){
            t = 86;
            p = 0;
        }
        if(p > 1){
            p -= 0.1
        }else if(p < 0){
            p += 0.1
        }
    },100)
}

fdContentAddInnerHtml()


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
    let arrParent = JSON.parse(localStorage.getItem('fContentArr'))
    arrParent.splice(fdContentArr.clickNum,1,fdContentArr)
    arrParent = JSON.stringify(arrParent)
    localStorage.setItem('fContentArr',arrParent)
    let arr = JSON.stringify(fdContentArr);
    localStorage.setItem('fContentArrChild',arr);
    loveNnum.innerHTML = num;
})

send.addEventListener('click',function (e) {
    if (input.value == '') return
    console.log(input.value);
    // fdCommentsText.push({
    //     text:input.value
    // })
    fdComments.innerHTML += `<div class="frienddetail-comments-child">
        <div class="frienddetail-comments-img"></div>
        <div class="frienddetail-comments-say">${input.value}</div>
    </div>`
    fdContentArr.tallNum = parseInt(fdContentArr.tallNum)+1;
    fdContentAddInnerHtml()
    begain()
    // input.value = '';
    console.log(fdContentArr)
    // localStorage.setItem('fContentArrChild',fdContentArr)
})

// screen.addEventListener('click',function(e){

// })