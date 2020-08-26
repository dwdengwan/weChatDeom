(function () {
    let content = document.getElementsByClassName('videodetails-content')[0],
         child = document.getElementsByClassName('videodetails-fixed')[0],
         callback = document.getElementsByClassName('videodetails-callback')[0],
         fContent = document.getElementsByClassName('fixed-content'),
         vCanvas = document.getElementsByClassName('videodetails-canvas')[0],
         myCanvas = document.getElementById('myCanvas'),
         height = 0,
         clientWidth = vCanvas.clientWidth,
         clientHeight = vCanvas.clientHeight,
         // document.body.clientWidth  document.body.clientHeight
         timerout = null,
         canvastimerout = null,
         ctx = myCanvas.getContext('2d');
    myCanvas.height = clientHeight;
    myCanvas.width = clientWidth;

    // alert(clientHeight)//671
    // alert(clientWidth)//397

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

    let x = parseInt(Math.random()*clientWidth),
        y = parseInt(Math.random()*clientHeight),
        r = parseInt(Math.random()*100+(clientHeight - 100));
    function draw() {
        ctx.clearRect(0,0,clientWidth,clientHeight); //canvas 绘图 绘制背景图
        ctx.fillStyle = '#22997b';
        ctx.fillRect(0,0,clientWidth,clientHeight)
        for (let z=0;z<5;z++){
            //绘圆
            ctx.fillStyle = randColor();
            ctx.beginPath()
            r -= 10;
            if (r<10){
                r = 10;
                clearInterval(canvastimerout)
                randomDraw()
            }
            ctx.arc(x,y,r,0,2*Math.PI);
            ctx.fill()


            // ctx.beginPath();
            // ctx.arc(parseInt(Math.random()*clientWidth),parseInt(Math.random()*clientHeight),20,0,360);
            // ctx.fillStyle = randColor();
            // ctx.fill();

            // ctx.lineWidth = 20;
            // ctx.strokeStyle = randColor();
            // ctx.globalAlpha = 0.2;
            // ctx.stroke()
            // ctx.closePath()
        }
    }
    // draw()
    function randomDraw(){
        r = parseInt(Math.random()*100+(clientHeight - 100));
        canvastimerout = setInterval(()=>{
            draw()
        },1000)
    }
    // randomDraw()
    
    function rectangle() {//画柱形
        let z = parseInt(clientWidth/20);
        // for (let i=0;i<z;i++){
        //     let h = parseInt(Math.random()*20)
        //     ctx.fillStyle = '#4a2599';
        //     ctx.fillRect(20*i+10,(clientHeight/2 - h),10,(clientHeight/2 + h))
        // }
        ctx.clearRect(0,0,clientWidth,clientHeight); //canvas 绘图 绘制背景图
        ctx.fillStyle = '#22997b';
        ctx.fillRect(0,0,clientWidth,clientHeight)
        //画柱形图
        for (let i=0;i<z;i++) {
            let h = parseInt(Math.random()*20)
            let dz = parseInt(Math.random()*50 + 50)
            ctx.fillStyle = '#4a2599';
            ctx.beginPath();
            ctx.moveTo(20*i+10,clientHeight);
            ctx.quadraticCurveTo(20*i+15,clientHeight - dz,20*i+10,(clientHeight/2 - h));
            // ctx.lineTo(10,clientHeight/2);
            // ctx.arcTo(10,clientHeight/2,20,clientHeight/2,10);
            ctx.arc(20*i+15,(clientHeight/2 - h),5,0,Math.PI,true)
            ctx.lineTo(20*i+20,(clientHeight/2 - h));
            ctx.quadraticCurveTo(20*i+15,clientHeight/2  + dz,20*i+20,clientHeight);
            // ctx.lineTo(20,clientHeight);
            ctx.closePath()
            ctx.fill()
            ctx.strokeStyle = "#4a2599";
            ctx.stroke();
        }
        //画圆
        for (let d=0;d<100;d++){
            let x = parseInt(Math.random()*(clientWidth)),
                y = parseInt(Math.random()*(clientHeight)),
                r = 10;
            ctx.fillStyle = randColor();
            ctx.beginPath()
            ctx.arc(x,y,r,0,2*Math.PI);
            ctx.fill()
        }
        //文字
        let arr = ['贝贝','晶晶','欢欢','莹莹','妮妮','平平','安安','快快','乐乐','江江'];
        arr.forEach((item,m,array)=>{
            let x = parseInt(Math.random()*(clientWidth)),
                y = parseInt(Math.random()*(clientHeight));
            ctx.font="30px Arial";
            if (m % 2 == 1){
                ctx.strokeText(item,x,y);
            } else{
                ctx.fillText(item,x,y);
            }
            ctx.fillStyle = randColor();
        })
    }
    rectangle()

    function randomRectangle(){
        canvastimerout = setInterval(()=>{
            rectangle()
        },500)
    }
    randomRectangle()
})()