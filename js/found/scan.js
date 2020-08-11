(function fn() {
    let scanParent = document.getElementsByClassName('scan-content-parent')[0]
    let timer = null
    let timeout = null;
    let num = 0;
    let r = 0;

    function cycleColor(){
        clearInterval(timer)
        clearTimeout(timeout)
        timer = setInterval(()=>{
            num +=5;
            r += 5;
            if (num > 255){
                clearInterval(timer)
                num = 255;
                r = 255;
                timeout = setTimeout(()=>{
                    timer = setInterval(()=>{
                        num -=5;
                        r -=5;
                        if (num < 0){
                            num = 0;
                            r = 0;
                            clearInterval(timer)
                            clearTimeout(timeout)
                            timeout = setTimeout(()=>{
                                cycleColor()
                            },2000)
                        }
                        scanParent.style.border = `1px solid rgb(${num},${num},${num})`;
                        scanParent.style.width = `${r}px`;
                        scanParent.style.height = `${r}px`;
                    },10)
                },2000)
            }
            scanParent.style.border = `1px solid rgb(${num},${num},${num})`;
            scanParent.style.width = `${r}px`;
            scanParent.style.height = `${r}px`;
        },10)
    }
    cycleColor()
})()
