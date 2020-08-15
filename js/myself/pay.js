(function () {
    class JQUERY {
        sayFn(text) {
            console.log(text)
        }
        postion(x,y){
            this.x = x;
            this.y = y;
            console.log('x:'+this.x+',y:'+this.y)
        }
    }
    let jquery = new JQUERY();
    jquery.sayFn('name');
    jquery.postion(250,251);
    var myCanvas = document.getElementById("myCanvas");
    var object = {
         //初始化
         init: function() {
             //棋盘外框
             this.ctx = myCanvas.getContext("2d");
             this.ctx.lineWidth = 5;
             this.ctx.strokeStyle = "brown";
             this.ctx.strokeRect(100, 100, 800, 900);

             this.row();
             this.cols();
             this.drawFont();
             //注意：现在的原点中心为（100,100），所以下面的所有坐标在原来的基础上加（x+100,y+100）；
             //中心点一（1000,200）
             this.center(200, 300);
             //中心点二（700,200）
             this.center(800, 300);
             //中心点三（5,300）
             this.center(105, 400);
             //中心点四（200,300）
             this.center(300, 400);
             //中心点五（400,300）
             this.center(500, 400);
             //中心点六（600,300）
             this.center(700, 400);
             //中心点七（800,300）
             this.center(900, 400);
             //中心点八（800,600）
             this.center(900, 700);
             //中心点九（600,600）
             this.center(700, 700);
             //中心点十（400,600）
             this.center(500, 700);
             //中心点十一（200,600）
             this.center(300, 700);
             //中心点十二（5,600）
             this.center(105, 700);
             //中心点十三（700,700）
             this.center(800, 800);
             //中心点十四（100,700）
             this.center(200, 800);

             //必须当页面中的图片资源加载成功,再画棋子
             window.onload = function() {
                 //棋子图片
                 var ju = document.getElementById("ju");
                 var ma = document.getElementById("ma");
                 var xiang = document.getElementById("xiang");
                 var shi = document.getElementById("shi");
                 var jiang = document.getElementById("jiang");
                 var bing = document.getElementById("bing");
                 var pao = document.getElementById("pao");

                 var r_ju = document.getElementById("r_ju");
                 var r_ma = document.getElementById("r_ma");
                 var r_xiang = document.getElementById("r_xiang");
                 var r_shi = document.getElementById("r_shi");
                 var r_jiang = document.getElementById("r_jiang");
                 var r_bing = document.getElementById("r_bing");
                 var r_pao = document.getElementById("r_pao");
                 //将棋子图像绘制到画布上
                 object.ctx.drawImage(ju, 50, 50, 100, 100);
                 object.ctx.drawImage(ma, 150, 50, 100, 100);
                 object.ctx.drawImage(xiang, 250, 50, 100, 100);
                 object.ctx.drawImage(shi, 350, 50, 100, 100);
                 object.ctx.drawImage(jiang, 450, 50, 100, 100);
                 object.ctx.drawImage(shi, 550, 50, 100, 100);
                 object.ctx.drawImage(xiang, 650, 50, 100, 100);
                 object.ctx.drawImage(ma, 750, 50, 100, 100);
                 object.ctx.drawImage(ju, 850, 50, 100, 100);
                 object.ctx.drawImage(pao, 150, 250, 100, 100);
                 object.ctx.drawImage(pao, 750, 250, 100, 100);
                 object.ctx.drawImage(bing, 50, 350, 100, 100);
                 object.ctx.drawImage(bing, 250, 350, 100, 100);
                 object.ctx.drawImage(bing, 450, 350, 100, 100);
                 object.ctx.drawImage(bing, 650, 350, 100, 100);
                 object.ctx.drawImage(bing, 850, 350, 100, 100);

                 object.ctx.drawImage(r_ju, 50, 950, 100, 100);
                 object.ctx.drawImage(r_ma, 150, 950, 100, 100);
                 object.ctx.drawImage(r_xiang, 250, 950, 100, 100);
                 object.ctx.drawImage(r_shi, 350, 950, 100, 100);
                 object.ctx.drawImage(r_jiang, 450, 950, 100, 100);
                 object.ctx.drawImage(r_shi, 550, 950, 100, 100);
                 object.ctx.drawImage(r_xiang, 650, 950, 100, 100);
                 object.ctx.drawImage(r_ma, 750, 950, 100, 100);
                 object.ctx.drawImage(r_ju, 850, 950, 100, 100);
                 object.ctx.drawImage(r_pao, 150, 750, 100, 100);
                 object.ctx.drawImage(r_pao, 750, 750, 100, 100);
                 object.ctx.drawImage(r_bing, 50, 650, 100, 100);
                 object.ctx.drawImage(r_bing, 250, 650, 100, 100);
                 object.ctx.drawImage(r_bing, 450, 650, 100, 100);
                 object.ctx.drawImage(r_bing, 650, 650, 100, 100);
                 object.ctx.drawImage(r_bing, 850, 650, 100, 100);
             }
         },
         //此方法用来画棋盘线
         LineDrawing: function(mx, my, lx, ly) {
             this.ctx.beginPath();
             this.ctx.moveTo(mx, my);
             this.ctx.lineTo(lx, ly);
             this.ctx.stroke();
         },
        //棋盘行
         row: function() {
            for(var i = 200; i <= 900; i += 100) {
                 this.ctx.beginPath();
                 this.ctx.moveTo(105, i);
                 this.ctx.lineTo(900, i);
                 this.ctx.stroke();
             }
         },
        //棋盘列
         cols: function() {
            for(var i = 200; i <= 800; i += 100) {
                    this.ctx.beginPath();
                     this.ctx.moveTo(i, 105);
                     this.ctx.lineTo(i, 1000);
                     this.ctx.stroke();
                 }
             //清除指定的矩形区域
             //this.ctx.clearRect(5, 402,795, 95);
             this.ctx.clearRect(102.5, 502, 795, 95);
             //斜线
             this.LineDrawing(400, 105, 600, 300);
             this.LineDrawing(400, 805, 600, 1000);
             //反斜线
             this.LineDrawing(600, 105, 400, 300);
             this.LineDrawing(600, 805, 400, 1000);
         },
        //坐标的中心点
         center: function(x, y) {
             this.ctx.lineWidth = 5;
             //中心点一（100,200）
             //左上
             this.LineDrawing(x - 10, y - 30, x - 10, y - 10);
             this.LineDrawing(x - 10, y - 10, x - 30, y - 10);
             //右上
             this.LineDrawing(x + 10, y - 30, x + 10, y - 10);
             this.LineDrawing(x + 10, y - 10, x + 30, y - 10);
             //左下
             this.LineDrawing(x - 10, y + 30, x - 10, y + 10);
             this.LineDrawing(x - 10, y + 10, x - 30, y + 10);
             //右下
             this.LineDrawing(x + 10, y + 30, x + 10, y + 10);
             this.LineDrawing(x + 10, y + 10, x + 30, y + 10);
         },
         drawFont: function() {
             this.ctx.lineWidth = 1;
             //绘制文字
             this.ctx.font = "60px microsoft yahei";
             this.ctx.save(); //保存点
             //将坐标中心作为起启点
             this.ctx.translate(myCanvas.width / 2, myCanvas.height / 2);
             var radian = Math.PI / 2; // 弧度制 Math.PI=π
             this.ctx.rotate(radian); // 旋转画布绘制刻度
             //填充
             this.ctx.fillText("楚", -30, -270);
             this.ctx.fillText("河", -30, -150);
            this.ctx.restore(); //恢复到保存点
             this.ctx.save();
             //将坐标中心作为起点
             this.ctx.translate(myCanvas.width / 2, myCanvas.height / 2);
            var radian = Math.PI / -2;
             this.ctx.rotate(radian);
            this.ctx.fillText("汉", -30, -270);
            this.ctx.fillText("界", -30, -150);
             this.ctx.restore();
        },
     };
    object.init();
    myCanvas.addEventListener('mousedown',function (e) {
        console.log(e)
    })
})()