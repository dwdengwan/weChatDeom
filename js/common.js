function common(dyk){
    alert(dyk)
}

//小于10 补0
function num(n) {
    if (parseInt(n) < 10){
        n = '0' + n
    }
    console.log(n)
    return n
}

//将当前日期转换为 XX年XX月XX日 XX:XX:XX
function nowTime() {
    let date = new Date();
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
    console.log(year,month,day,hour,minute,second)
    return year+'年'+month+'月'+day+'日 '+hour +':'+minute+':'+second
}

// 今天内的 显示上午/下午/晚上 10:46
// 一周内的 昨天 周五 周四 如果跨周 显示今年内
// 今年内的 7月1日
// 今年外的 2018年8月31日
function showDate(){
    // let oldTime = 0;//1594166828668
    // if (localStorage.getItem('oldtime')) {
    //     oldTime = localStorage.getItem('oldtime')
    // }else{
    //     oldTime = new Date().getTime();
    //     localStorage.setItem('oldtime',oldTime)
    // }
    // console.log(oldTime)
    let oldTime = 1594155828668;
    let newTime = new Date().getTime();
    let apartTime = newTime - oldTime;
    console.log(apartTime,newTime,oldTime)
    if (parseInt(apartTime) < (1000*60*60)){
        let min = parseInt(apartTime / (1000*60))
        return min + '分钟前'
    }else if(parseInt(apartTime) < (1000*60*60*24) && parseInt(apartTime) > (1000*60*60)){
        let hour = parseInt(apartTime / (1000*60*60))
        if (hour < 6){
            return hour + '小时前'
        } else{
            
        }
    }else if (parseInt(apartTime) < (1000*60*60*24*7) && parseInt(apartTime) > (1000*60*60*24)){

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