// var lunbo = document.getElementsByClassName('nearpeople-content-lunbo')[0];
// var left = document.getElementsByClassName('nearpeople-fix-left')[0];
// var right = document.getElementsByClassName('nearpeople-fix-right')[0];
// var buttom = document.getElementsByClassName('nearpeople-fix-buttom')[0];
// var lunbo = YY53KG('.nearpeople-content-lunbo')[0];
// var left = YY53KG('.nearpeople-fix-left')[0];
// var right = YY53KG('.nearpeople-fix-right')[0];
// var buttom = YY53KG('.nearpeople-fix-buttom')[0];
// var buttom = YY53KG('#buttom');
// buttom.classFlag('a','active');
// buttom.classList.add('active')

// YY53KG('#buttom').css({'background':'#f0f','border':'1px solid red'}).addClass('active').on('click',function (e) {
//     console.log('yy53kg')
// })
// YY53KG('#buttom').findClass('active')

// for (let z=0;z<3;z++){
//     lunbo.innerHTML += `<div class="nearpeople-lunbo-child">
//                             <span class="nearpeople-lunbo-span">我的未来不是梦${z}</span>
//                         </div>`;
//     buttom.innerHTML += `<div class="nearpeople-lunbo-li"></div>`;
// }
// var lChild = document.getElementsByClassName('nearpeople-lunbo-child');
// var timer = null;
// lChild[0].style.background = '#f0f'
// lChild[1].style.background = '#f99'
// lChild[2].style.background = '#0ff'
// lChild[0].style.display = 'flex';
// lChild[1].style.display = 'none';
// lChild[2].style.display = 'none';
//
// for (let z=0;z<lChild.length;z++){
//     lChild[z].addEventListener('click',function (e) {
//         clearInterval(timer)
//         timer = setInterval(()=>{
//             if (z<lChild.length){
//                 z++;
//             } else{
//                 z = 0;
//             }
//             lunboRun(z)
//         },2000)
//     })
// }
//
// function lunboRun(z) {
//     switch (z){
//         case 0:
//             lChild[0].style.display = 'flex';
//             lChild[1].style.display = 'none';
//             lChild[2].style.display = 'none';
//             break;
//         case 1:
//             lChild[0].style.display = 'none';
//             lChild[1].style.display = 'flex';
//             lChild[2].style.display = 'none';
//             break;
//         case 2:
//             lChild[0].style.display = 'none';
//             lChild[1].style.display = 'none';
//             lChild[2].style.display = 'flex';
//             break;
//     }
// }
//
// left.addEventListener('click',function (e) {
//     let z = 0;
//     z++;
//     lunboRun(z)
// })
//
// right.addEventListener('click',function (e) {
//     let z=2;
//     z--;
//     lunboRun(z)
// })

// var x=document.getElementsByClassName("nearpeople")[0];
// function getLocation()
// {
//     console.log(navigator.geolocation.getCurrentPosition(showPosition))
//     if (navigator.geolocation)
//     {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else
//     {
//         x.innerHTML="该浏览器不支持获取地理位置。";
//     }
// }
//
// function showPosition(position)
// {
//     x.innerHTML="纬度: " + position.coords.latitude +
//         "<br>经度: " + position.coords.longitude;
// }
//
// getLocation()
//
// // showPosition()
//
// // 基于准备好的dom，初始化echarts实例
// var myChart = echarts.init(document.getElementById('main'));
//
// // Schema:
// // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
// var dataBJ = [
//     [55,9,56,0.46,18,6,1],
//     [25,11,21,0.65,34,9,2],
//     [56,7,63,0.3,14,5,3],
//     [33,7,29,0.33,16,6,4],
//     [42,24,44,0.76,40,16,5],
//     [82,58,90,1.77,68,33,6],
//     [74,49,77,1.46,48,27,7],
//     [78,55,80,1.29,59,29,8],
//     [267,216,280,4.8,108,64,9],
//     [185,127,216,2.52,61,27,10],
//     [39,19,38,0.57,31,15,11],
//     [41,11,40,0.43,21,7,12],
//     [64,38,74,1.04,46,22,13],
//     [108,79,120,1.7,75,41,14],
//     [108,63,116,1.48,44,26,15],
//     [33,6,29,0.34,13,5,16],
//     [94,66,110,1.54,62,31,17],
//     [186,142,192,3.88,93,79,18],
//     [57,31,54,0.96,32,14,19],
//     [22,8,17,0.48,23,10,20],
//     [39,15,36,0.61,29,13,21],
//     [94,69,114,2.08,73,39,22],
//     [99,73,110,2.43,76,48,23],
//     [31,12,30,0.5,32,16,24],
//     [42,27,43,1,53,22,25],
//     [154,117,157,3.05,92,58,26],
//     [234,185,230,4.09,123,69,27],
//     [160,120,186,2.77,91,50,28],
//     [134,96,165,2.76,83,41,29],
//     [52,24,60,1.03,50,21,30],
//     [46,5,49,0.28,10,6,31]
// ];
//
// var dataGZ = [
//     [26,37,27,1.163,27,13,1],
//     [85,62,71,1.195,60,8,2],
//     [78,38,74,1.363,37,7,3],
//     [21,21,36,0.634,40,9,4],
//     [41,42,46,0.915,81,13,5],
//     [56,52,69,1.067,92,16,6],
//     [64,30,28,0.924,51,2,7],
//     [55,48,74,1.236,75,26,8],
//     [76,85,113,1.237,114,27,9],
//     [91,81,104,1.041,56,40,10],
//     [84,39,60,0.964,25,11,11],
//     [64,51,101,0.862,58,23,12],
//     [70,69,120,1.198,65,36,13],
//     [77,105,178,2.549,64,16,14],
//     [109,68,87,0.996,74,29,15],
//     [73,68,97,0.905,51,34,16],
//     [54,27,47,0.592,53,12,17],
//     [51,61,97,0.811,65,19,18],
//     [91,71,121,1.374,43,18,19],
//     [73,102,182,2.787,44,19,20],
//     [73,50,76,0.717,31,20,21],
//     [84,94,140,2.238,68,18,22],
//     [93,77,104,1.165,53,7,23],
//     [99,130,227,3.97,55,15,24],
//     [146,84,139,1.094,40,17,25],
//     [113,108,137,1.481,48,15,26],
//     [81,48,62,1.619,26,3,27],
//     [56,48,68,1.336,37,9,28],
//     [82,92,174,3.29,0,13,29],
//     [106,116,188,3.628,101,16,30],
//     [118,50,0,1.383,76,11,31]
// ];
//
// var dataSH = [
//     [91,45,125,0.82,34,23,1],
//     [65,27,78,0.86,45,29,2],
//     [83,60,84,1.09,73,27,3],
//     [109,81,121,1.28,68,51,4],
//     [106,77,114,1.07,55,51,5],
//     [109,81,121,1.28,68,51,6],
//     [106,77,114,1.07,55,51,7],
//     [89,65,78,0.86,51,26,8],
//     [53,33,47,0.64,50,17,9],
//     [80,55,80,1.01,75,24,10],
//     [117,81,124,1.03,45,24,11],
//     [99,71,142,1.1,62,42,12],
//     [95,69,130,1.28,74,50,13],
//     [116,87,131,1.47,84,40,14],
//     [108,80,121,1.3,85,37,15],
//     [134,83,167,1.16,57,43,16],
//     [79,43,107,1.05,59,37,17],
//     [71,46,89,0.86,64,25,18],
//     [97,71,113,1.17,88,31,19],
//     [84,57,91,0.85,55,31,20],
//     [87,63,101,0.9,56,41,21],
//     [104,77,119,1.09,73,48,22],
//     [87,62,100,1,72,28,23],
//     [168,128,172,1.49,97,56,24],
//     [65,45,51,0.74,39,17,25],
//     [39,24,38,0.61,47,17,26],
//     [39,24,39,0.59,50,19,27],
//     [93,68,96,1.05,79,29,28],
//     [188,143,197,1.66,99,51,29],
//     [174,131,174,1.55,108,50,30],
//     [187,143,201,1.39,89,53,31]
// ];
//
// var lineStyle = {
//     normal: {
//         width: 1,
//         opacity: 0.5
//     }
// };
//
// option = {
//     backgroundColor: '#161627',
//     title: {
//         text: 'AQI - 雷达图',
//         left: 'center',
//         textStyle: {
//             color: '#eee'
//         }
//     },
//     legend: {
//         bottom: 5,
//         data: ['北京', '上海', '广州'],
//         itemGap: 20,
//         textStyle: {
//             color: '#fff',
//             fontSize: 14
//         },
//         selectedMode: 'single'
//     },
//     // visualMap: {
//     //     show: true,
//     //     min: 0,
//     //     max: 20,
//     //     dimension: 6,
//     //     inRange: {
//     //         colorLightness: [0.5, 0.8]
//     //     }
//     // },
//     radar: {
//         indicator: [
//             {name: 'AQI', max: 300},
//             {name: 'PM2.5', max: 250},
//             {name: 'PM10', max: 300},
//             {name: 'CO', max: 5},
//             {name: 'NO2', max: 200},
//             {name: 'SO2', max: 100}
//         ],
//         shape: 'circle',
//         splitNumber: 5,
//         name: {
//             textStyle: {
//                 color: 'rgb(238, 197, 102)'
//             }
//         },
//         splitLine: {
//             lineStyle: {
//                 color: [
//                     'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
//                     'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
//                     'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
//                 ].reverse()
//             }
//         },
//         splitArea: {
//             show: false
//         },
//         axisLine: {
//             lineStyle: {
//                 color: 'rgba(238, 197, 102, 0.5)'
//             }
//         }
//     },
//     series: [
//         {
//             name: '北京',
//             type: 'radar',
//             lineStyle: lineStyle,
//             data: dataBJ,
//             symbol: 'none',
//             itemStyle: {
//                 color: '#F9713C'
//             },
//             areaStyle: {
//                 opacity: 0.1,
//             }
//         },
//         {
//             name: '上海',
//             type: 'radar',
//             lineStyle: lineStyle,
//             data: dataSH,
//             symbol: 'none',
//             itemStyle: {
//                 color: '#B3E4A1'
//             },
//             areaStyle: {
//                 opacity: 0.05,
//             }
//         },
//         {
//             name: '广州',
//             type: 'radar',
//             lineStyle: lineStyle,
//             data: dataGZ,
//             symbol: 'none',
//             itemStyle: {
//                 color: 'rgb(238, 197, 102)'
//             },
//             areaStyle: {
//                 opacity: 0.05,
//             }
//         }
//     ]
// };
//
// // 使用刚指定的配置项和数据显示图表。
// myChart.setOption(option);

window.onLoad  = function(){
    var map = new AMap.Map('main', {
        resizeEnable: true,
        // center: [113.57, 22.27],//珠海
        // center:[108.22,22.48],//南宁
        // center:[113.27,23.17],//广州
        // center:[112.55749,28.25358],//宁乡
        // layers: [//使用多个图层
        //     new AMap.TileLayer.Satellite(),
        //     new AMap.TileLayer.RoadNet()
        // ],
        // zooms: [4,18],//设置地图级别范围
        // zoom: 13
    });

    //路径
    var path = [ [112.55749,28.25358], [108.22,22.48], [113.57, 22.27] ]; //简写

    var polyline = new AMap.Polyline({
        path ,
    })
    map.add(polyline);

    //两地之间的距离
    var lnglat1 = new AMap.LngLat(108.22,22.48);
    var lnglat2 = new AMap.LngLat(112.55749,28.25358);
    var distance = lnglat1.distance(lnglat2);//计算lnglat1到lnglat2之间的实际距离(m)
    console.log((distance/1000).toFixed(2) + 'km')

    //标记某地
    var mapSize = map.getSize();//获取地图大小，返回的是地图容器的像素大小
    var width = mapSize.width;
    var height = mapSize.height;

    var marker = new AMap.Marker({
        position: [113.57, 22.27],
        icon: new AMap.Icon({
            size: new AMap.Size(40, 50),  //图标的大小
            image: "https://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png",
            imageOffset: new AMap.Pixel(0, -60)
        })
    });
    map.add(marker)

    // //实时路况图层
    // var trafficLayer = new AMap.TileLayer.Traffic({
    //     zIndex: 10
    // });
    // map.add(trafficLayer);//添加图层到地图
    //
    // var infoWindow = new AMap.InfoWindow({ //创建信息窗体
    //     isCustom: true,  //使用自定义窗体
    //     content:'<div>信息窗体</div>', //信息窗体的内容可以是任意html片段
    //     offset: new AMap.Pixel(16, -45)
    // });
    // var onMarkerClick  =  function(e) {
    //     infoWindow.open(map, e.target.getPosition());//打开信息窗体
    //     //e.target就是被点击的Marker
    // }
    // var marker = new AMap.Marker({
    //     position: [116.481181, 39.989792]
    // })
    // map.add(marker);
    // marker.on('click',onMarkerClick);//绑定click事件
}
var url = 'https://webapi.amap.com/maps?v=1.4.15&key=789df450d1006813b6fcbc2334914910&callback=onLoad';
var jsapi = document.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);