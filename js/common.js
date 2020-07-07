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
    debugger
    let oldTime = 0;
    if (localStorage.getItem('oldtime')) {
        oldTime = localStorage.getItem('oldtime')
    }else{
        oldTime = new Date().getTime();
        localStorage.setItem('oldtime',oldTime)
    }
    console.log(oldTime)
}