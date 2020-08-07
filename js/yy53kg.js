(function(){
    function xQuery(select){
        return new xQuery.prototype.init(select);
    }
    xQuery.prototype = {
        init: function(select){
            if(typeof select === "string"){
                let nodeList =  document.querySelectorAll(select);
                for(let i = 0, len = nodeList.length; i < len; i++){
                    this[i] = nodeList[i];//this === xQuery.prototype
                }
                this.length = nodeList.length;
            }else if(typeof select === "object"){
                this[0] = select;
                this.length = 1;
            }
            return this;
        },
        extend: function(obj){
            for(let attr in obj){
                this[attr] = obj[attr];
            }
        }
    };
    xQuery.extend = function(obj){
        for(let attr in obj){
            this[attr] = obj[attr];
        }
    };

    xQuery.prototype.extend({
        eq: function(index){
            let t = this[index];
            function This(){
                this[0]= t,
                this.length= 1,
                this.parent= function(){
                    return this[0].parentNode;
                },
                this.childs= function(){
                    return this[0].children;
                }
            };
            This.prototype = xQuery.prototype;
            return new This();
        },
        on: function(type, callback){
            for(let i = 0, len = this.length; i < len; i++){
                if(this[i].addEventListener){
                    this[i].addEventListener(type,callback);
                }else{
                    type = "on" + type;
                    this[i].attachEvent(type,callback);
                }
            };
            return this;
        },
        css: function(attr,value){
            if(typeof attr === "object"){
                for(let i in attr)
                    for(let j = 0, len = this.length; j < len; j++)
                        this[j].style[i] = attr[i];
            }else{
                if(typeof value === "undefined")
                    return window.getComputedStyle ? getComputedStyle(this[0])[attr] : this[0].currentStyle[attr];
                for(let j = 0, len = this.length; j < len; j++)
                    this[j].style[attr] = value;
            }
            return this;
        },
        animate: function(options, duration, easing, callback){
            var defaultDuration = {
                normal : 1000,
                fast : 700,
                slow : 1500
            };
            if(!duration)
                duration = 1000;
            if(typeof duration === "string")
                duration = defaultDuration[duration] ? defaultDuration[duration] : 1000;
            for(let z = 0, len = this.length; z < len; z++){
                let element = this[z];
                clearInterval(element.timer);
                var begin = {}, range = {};
                for(var attr in options){
                    if(/color/i.test(attr)){
                        begin[attr] = {}, range[attr] = {};
                        var beginArr = xQuery.transitColor(xQuery(element).css(attr));
                        var valueArr = xQuery.transitColor(options[attr]);
                        for(var i = 0; i < 3; i++){
                            begin[attr]["r"+i] = beginArr[i];
                            range[attr]["r"+i] = valueArr[i] - begin[attr]["r"+i];
                        }
                    }else{
                        begin[attr] = parseFloat(xQuery(element).css(attr));
                        range[attr] = options[attr] - begin[attr];
                    }
                }
                var date = Date.now();
                element.timer = setInterval(function(){
                    var elapsed = Math.min(Date.now() - date, duration);/*已消耗时间与总时间取最小值以保证结果值没有误差*/
                    for (var attr in options) {
                        var t = elapsed, result;
                        easing = easing || "linear";
                        if(typeof easing === "function"){
                            callback = easing;
                            easing = "linear";
                        }
                        if(/color/i.test(attr)){
                            var r0 = Number(t * range[attr]["r0"] / duration) + Number(begin[attr]["r0"]);
                            var r1 = Number(t * range[attr]["r1"] / duration) + Number(begin[attr]["r1"]);
                            var r2 = Number(t * range[attr]["r2"] / duration) + Number(begin[attr]["r2"]);
                            result = "rgb("+Math.round(r0)+","+Math.round(r1)+","+Math.round(r2)+")";
                        }else{
                            if(easing === "linear")
                            /*每执行一次timer要运动到的结果值 = 已消耗的时间 * 路程 / 总时间 + 初始值*/
                                result = t * range[attr] / duration + begin[attr];
                            if(easing === "easeout")
                            // -c *(t/=d)*(t-2) + bt
                                result = -range[attr] * (t /= duration) * (t - 2) + begin[attr];
                        }
                        xQuery(element).css(attr, result + (attr === "opacity" || /color/i.test(attr) ? "" : "px"));
                    }
                    if (elapsed === duration){
                        clearInterval(element.timer);
                        callback && callback();
                    }
                },1000/60);
            }
            return this;
        },
        offset: function(coord){
            var element = this[0];
            if(typeof coord === "undefined"){
                var _top = 0, _left = 0;
                while(element !== null){
                    _top += element.offsetTop;
                    _left += element.offsetLeft;
                    element = element.offsetParent;
                }
                return {top : _top, left : _left};
            }
            var _top = 0, _left = 0, parent = element.offsetParent;
            while(parent !== null){
                _top += parent.offsetTop;
                _left += parent.offsetLeft;
                parent = parent.offsetParent;
            }
            _left = coord.left - _left;/*要设置的相对文档的定位距离相当于是用此距离减去其父元素在文档中的定位*/
            _top = coord.top - _top;
            this.css({left : _left+"px", top : _top+"px"});
            return this;
        },
        addClass:function (className) {
            if (typeof className == 'string'){
                this[0].classList.add(className)
            }
            return this
        },
        removeClass:function (className) {
            if (typeof className == 'string'){
                this[0].classList.remove(className)
            }
            return this
        },
        findClass:function (className) {
            var str = this[0].className;
            if (str.indexOf(className)>-1){
                return true
            }else{
                return false
            }
        }
    });
    xQuery.extend({
        transitColor: function(color){
            var isRgb = color.indexOf("rgb(") === 0 ? true : false;
            var isHex = color.indexOf("#") === 0 ? true : false;
            var arr = new Array();
            if(isHex){
                color = color.slice(1);
                if(color.length === 6){
                    arr.push(color.slice(0, 2));
                    arr.push(color.slice(2, 4));
                    arr.push(color.slice(4));
                }else if(color.length === 3){
                    arr.push(color.slice(0, 1) + color.slice(0, 1));
                    arr.push(color.slice(1, 2) + color.slice(1, 2));
                    arr.push(color.slice(2) + color.slice(2));
                }
                var each = [];
                arr.forEach(function(value, i){
                    value = "0x" + value;
                    each.push(parseInt(value))
                })
                arr = each;
            }else if(isRgb){
                color = color.slice(4, -1);
                arr = color.split(",");
            }
            return arr;
        }
    });
    xQuery.prototype.init.prototype = xQuery.prototype;
    window.YY53KG = window.xQuery = xQuery;
})();