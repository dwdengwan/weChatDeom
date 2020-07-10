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
    // let oldTime = 0;//1594166828668
    // if (localStorage.getItem('oldtime')) {
    //     oldTime = localStorage.getItem('oldtime')
    // }else{
    //     oldTime = new Date().getTime();
    //     localStorage.setItem('oldtime',oldTime)
    // }
    // console.log(oldTime)
    let oldTime = 1594301899668;
    let newTime = new Date().getTime();
    let apartTime = newTime - oldTime;
    console.log(apartTime,newTime,oldTime)
    let date = nowTime(oldTime)
    console.log(date)
    if (parseInt(apartTime) < (1000*60*60)){ //一小时内
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
        let weekDay = new Date(oldTime).getDay()
        switch (weekDay){
            case 0:
                weekDay = '周日'
                break;
            case 1:
                weekDay = '周一'
                break;
            case 2:
                weekDay = '周二'
                break;
            case 3:
                weekDay = '周三'
                break;
            case 4:
                weekDay = '周四'
                break;
            case 5:
                weekDay = '周五'
                break;
            case 6:
                weekDay = '周六'
                break;
        }
        return weekDay
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