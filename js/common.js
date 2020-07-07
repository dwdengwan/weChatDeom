function common(dyk){
    alert(dyk)
}

//小于10 补0
function num(n) {
    if (parseInt(n) < 10){
        n = '0' +n
    }
    console.log(n)
    return n
}

//将当前日期转换为 XX年XX月XX日 XX:XX:XX
function nowTime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    num(month)
    let day = date.getDate();
    num(day)
    let hour = date.getHours();
    num(hour)
    let minute = date.getMinutes();
    num(minute)
    let second = date.getSeconds();
    num(second)
    return year+'年'+month+'月'+day+'日 '+hour +':'+minute+':'+second
}
