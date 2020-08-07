var li = document.getElementsByClassName('goshopping-content-li');
var child = document.getElementsByClassName('goshopping-content-child')[0];
var timer = null;
var z = li.length -1;
var t = 0;
var l = 0;
function fontOpacity(z) {
    clearInterval(timer)
    let opacity = 0
    timer = setInterval(()=>{
        opacity += 0.01;
        t += 1;
        if (opacity > 1){
            opacity = 0;
            z--;
            fontOpacity(z)
        }
        if (t > 60){
            t = 0
            l += 1;
            if (l>70)l=0;
        }
        child.style.top = t + '%';
        child.style.left = l + '%';
        if (z < 0){
            for (let m=0;m<li.length;m++){
                li[m].style.opacity = 0;
            }
            z = li.length - 1;
        }
        li[z].style.opacity = opacity;
    },16)
}
fontOpacity(z)