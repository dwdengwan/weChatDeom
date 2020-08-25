(function () {
    // let j = 0;
    // let [a,b,c] = [1,2,3];
    // let [foo, [[bar], baz]] = [1, [[2,4], 3,5]];
    // const PI = 3.14;
    // j = PI;
    // console.log(j,a,b,c,foo,bar,baz)
    // let modelName = 'getValue'
    // class point {
    //     constructor(){
    //         console.log('dyk')
    //     }
    //     toString(){
    //         console.log('dw')
    //     }
    //     [modelName](){
    //         point.toString
    //     }
    //     get handle(){
    //         return 'getter'
    //     }
    //     set handle(value){
    //         console.log('setter' + value)
    //     }
    // }
    // let obj = new point();
    // obj
    // obj.toString()
    // obj.handle = 'dyk';
    // console.log(obj.handle + 'dw')
    // obj.getValue()
    // console.log('28' + obj.getValue())
    let child = document.getElementsByClassName('video-child')
    for (let i=0;i<child.length;i++){
        child[i].addEventListener('click',function (e) {
            // "file:///D:/work/newWork/demo/wechatjs/weChatDeom/html/found/video.html"
            let url = window.location.href.split('found')[0] + `found/videodetails.html?id=${i}`;
            window.location.href = url;
        })
    }
})()