var timeout = null;
//给共同底部加内容
var fParent = document.getElementById('footer-parent')
var fParentArr = [
    {
        path:'../../../weChatDeom/index.html',
        name:'微信'
    },
    {
        path:'../../../weChatDeom/html/book/index.html',
        name:'通讯录'
    },
    {
        path:'../../../weChatDeom/html/found/index.html',
        name:'发现'
    },
    {
        path:'../../../weChatDeom/html/myself/index.html',
        name:'我'
    },
];
var fParentArr1 = [
    {
        path:'../weChatDeom/index.html',
        name:'微信'
    },
    {
        path:'../weChatDeom/html/book/index.html',
        name:'通讯录'
    },
    {
        path:'../weChatDeom/html/found/index.html',
        name:'发现'
    },
    {
        path:'../weChatDeom/html/myself/index.html',
        name:'我'
    },
];

//给共同的底部加内容
function finnerHtml(num) {
    if (num == 0){
        addInnerHtml(fParentArr1,num)
    } else{
        addInnerHtml(fParentArr,num)
    }
}

function addInnerHtml(arr,num) {
    for (let i = 0;i<arr.length;i++){
        fParent.innerHTML += `<div class="footer-child">
                <a href="${arr[i].path}">
                    <div class="footer-img"></div>
                    <div class="footer-title">
                        <a href="${arr[i].path}">${arr[i].name}</a>
                    </div>
                </a>
            </div>`
        var fChild = document.getElementsByClassName('footer-child')
        if(parseInt(num) == parseInt(i)){
            fChild[i].classList.add('active')
        }else{
            fChild[i].classList.remove('active')
        }
    }
}

function common(dyk){
    alert(dyk)
}

//小于10 补0
function num(n) {
    if (parseInt(n) < 10){
        n = '0' + n
    }
    return n
}

//将当前日期转换为 XX年XX月XX日 XX:XX:XX
function nowTime(num) {
    let date;
    if (num == undefined){
        date = new Date()
    }else{
        date = new Date(parseInt(num))
    }
    // if (date == undefined) {
    //     date = new Date();
    // }
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    // num(month)
    if (parseInt(month) < 10){
        month = '0' + month
    }
    let day = date.getDate();
    // num(day)
    if (parseInt(day) < 10){
        day = '0' + day
    }
    let hour = date.getHours();
    // num(hour)
    if (parseInt(hour) < 10){
        hour = '0' + hour
    }
    let minute = date.getMinutes();
    // num(minute)
    if (parseInt(minute) < 10){
        minute = '0' + minute
    }
    let second = date.getSeconds();
    // num(second)
    if (parseInt(second) < 10){
        second = '0' + second
    }
    return year+'年'+month+'月'+day+'日 '+hour +':'+minute+':'+second
}

// 今天内的 显示上午/下午/晚上 10:46
// 一周内的 昨天 周五 周四 如果跨周 显示今年内
// 今年内的 7月1日
// 今年外的 2018年8月31日
function showDate(){
    let oldTime = 0;//1594166828668
    if (localStorage.getItem('oldtime')) {
        oldTime = localStorage.getItem('oldtime')
    }else{
        oldTime = new Date().getTime();
        localStorage.setItem('oldtime',oldTime)
    }
    // let oldTime = 1594301899668;
    let newTime = new Date().getTime();
    let apartTime = newTime - oldTime;
    let date = nowTime(oldTime)
    if(parseInt(apartTime) < (1000*60)){
        let s = parseInt(apartTime / 1000)
        return s + '秒钟前'
    } else if (parseInt(apartTime) > (1000*60) && parseInt(apartTime) < (1000*60*60)){ //一小时内
        let min = parseInt(apartTime / (1000*60))
        return min + '分钟前'
    }else if(parseInt(apartTime) < (1000*60*60*24) && parseInt(apartTime) > (1000*60*60)){ //当日内
        let hour = parseInt(apartTime / (1000*60*60))
        if (hour < 6){
            return hour + '小时前'
        } else{
            let middle =parseInt(date.split('日')[1].split(':')[0])
            if (middle > 0 && middle < 6) {
                middle = '凌晨'
            }else if(middle >= 6 && middle < 11){
                middle = '上午'
            }else if(middle >= 12 && middle < 14){
                middle = '中午'
            }else if(middle >= 14 && middle < 18){
                middle = '下午'
            }else if(middle >= 18 && middle < 22){
                middle = '晚上'
            }else if(middle >= 22 && middle < 24){
                middle = '深夜'
            }
            let h = date.split('日')[1].split(':')[0] + ':' + date.split('日')[1].split(':')[1]
            return middle + ' ' + h
        }
    }else if (parseInt(apartTime) < (1000*60*60*24*7) && parseInt(apartTime) > (1000*60*60*24)){ //本周内
        // nowTime()
        let n = new Date(oldTime).getDay()
        weekDay(n)
    }else if (parseInt(apartTime) > (1000*60*60*24*7) && parseInt(apartTime) < (1000*60*60*24*365)){ //今年内
        let mon = date.split('年')[1].split('日')[0]+'日'
        return mon
    }else { //往年
        return nowTime()
    }
}

//将0->周日 日期转换
function weekDay(n) {
    switch (n){
        case 0:
            return '周日'
            break;
        case 1:
            return '周一'
            break;
        case 2:
            return '周二'
            break;
        case 3:
            return '周三'
            break;
        case 4:
            return '周四'
            break;
        case 5:
            return '周五'
            break;
        case 6:
            return '周六'
            break;
        default:
            return '周八'
            break
    }
}

/*防抖*/
function debounce(fn, wait) {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
}

//记录当前位置  id 滚动条区域 scrollLocation 存储在localstorage 里面的名字
function nowLocation(id,scrollLocation) {
    id.addEventListener('scroll',function (e) {
        let scrollH = id.scrollTop;
        localStorage.setItem(scrollLocation,scrollH);
    })
}

//返回到指定的位置 id 滚动条区域  scrollLocation 存储在localstorage 里面的名字
function backLocation(id,scrollLocation) {
    let scrollH = parseInt(localStorage.getItem(scrollLocation)) || 0;
    id.scrollTop = scrollH;
}

//随机选择一种颜色
function  randColor() {
    let r,g,b,a;
    r = parseInt(Math.random()*255);
    g = parseInt(Math.random()*255);
    b = parseInt(Math.random()*255);
    a = Math.random()+0.5;
    return `rgba(${r},${g},${b},${a})`
}