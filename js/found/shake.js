window.onload = function () {
    var x = 0, y = 0;
    var ul = document.getElementById('ul');
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i<inputs.length; i++){
        inputs[i].onclick = run;
    }
    function run() {
        /*渐变*/
        ul.style.webkitTransition = '-webkit-transform 3s linear';
        ul.style.oTransition = '-o-transform 3s linear';
        ul.style.transition = 'transform 3s linear';
        /*旋转的规则，就是x，y方向的deg改变*/
        if(inputs[0]==this){x+=90;}
        if(inputs[1]==this){y+=90;}
        if(inputs[2]==this){y-=90;}
        if(inputs[3]==this){x-=90;}
        if (inputs[4] == this){
            x = 0; y = 0;
            ul.style.webkitTransition = '-webkit-transform .1s linear';
            ul.style.oTransition = '-o-transform .1s linear';
            ul.style.transition = 'transform .1s linear';
        }
        ul.style.webkitTransform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
        ul.style.oTransform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
        ul.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
    }
    document.addEventListener('keydown', function(e){
        ul.style.webkitTransition='-webkit-transform 3s linear';
        switch(e.keyCode){
            case 37:  y -= 90;  //左箭头
                break;
            case 38:  x += 90;  //上箭头
                break;
            case 39:  y += 90;  //下箭头
                break;
            case 40:  x -= 90;  //右箭头
                break;
            case 13:  x=0; y=0;  //回车 （当回车时，迅速转回初始状态）
                ul.style.webkitTransition='-webkit-transform 0.1s linear';
                break;
        }
        ul.style.webkitTransform = "rotateX("+x+"deg) rotateY("+y+"deg)"; //变换效果（沿X轴和Y轴旋转）
    }, false);document.addEventListener("keydown", function (e) {
        ul.style.webkitTransition = '-webkit-transform 3s linear';
        ul.style.oTransition = '-o-transform 3s linear';
        ul.style.transition = 'transform 3s linear';
        switch(e.keyCode){
            case 37:
        }
    })
    /* function run(){
      ul.style.webkitTransition='-webkit-transform 3s linear'; //设置立方体变换的属性、持续时间、动画类型
      if(inputs[0]==this){x+=90;}
      if(inputs[1]==this){y+=90;}
      if(inputs[2]==this){y-=90;}
      if(inputs[3]==this){x-=90;}
      if(inputs[4]==this){x=0;y=0; ul.style.webkitTransition='-webkit-transform 0.1s linear';}  //当点击重置按钮时，迅速转回到初始状态。
      ul.style.webkitTransform = "rotateX("+x+"deg) rotateY("+y+"deg)";  //变换效果（沿X轴和Y轴旋转）
    }*/
}