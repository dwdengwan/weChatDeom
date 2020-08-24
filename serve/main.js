// const arr = ['1','2','3'];
// const doSomethingAsync = ()=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve('doing something!')
//         },3000)
//     })
// }
// const wait = async ()=>{
//     console.log(await doSomethingAsync())
// }
// console.log(arr)
// wait()

// 搭建http
// const http = require('http');
// const { hostname } = require('os');

// const port = 3000;

// const serve = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('content-type','text/html;charset=UTF-8')
//     res.end('你好，周妹江\n')
// })

// serve.listen(port,()=>{
//     console.log(`服务器运行在${hostname}:${port}`)
// })

// http get请求
// const https = require('https');
// const options = {
//     hostname:'nodejs.cn',
//     port:443,
//     path:'/todos',
//     method:'GET',
// }
// const req = https.request(options,res=>{
//     console.log(`状态码：${res.statusCode}`)
//     res.on('data',d=>{
//         process.stdout.write(d)
//     })
// })

// req.on('error',error=>{
//     console.error(error)
// })

// req.end()

// http POST
// const https = require('https');
// const data = JSON.stringify({
//     forinlove : 'withzmj'
// })
// const options = {
//     hostname:"nodejs.cn",
//     port:3000,
//     path:"/todos",
//     method:"POST",
//     headers:{
//         'Content-type':"application/json",
//         'Access-Control-Allow-Origin': '*',
//         'Content-Length':data.length,
//     }
// }
// const req = https.request(options,res=>{
//     console.log(`状态码：${res.statusCode}`);
//     res.on('data',d=>{
//         process.stdout.write(d)
//     })
// })

// req.on('error',error=>{
//     console.error(error)
// })
// req.write(data);
// req.end()

// http DELETE 与 POST 一致 method不同

//http POST
const http = require('http');
const querystring = require('querystring');
var url = require('url');

var server = http.createServer(function (req, res) {
    //解决跨域问题
    res.writeHeader(200, {
        // 'Content-Type': 'text/plain;charset=utf-8',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
    });
    // url.parse 方法来解析 URL 中的参数
    //http:127.0.0.1:3000/login?name='dw'&&password='123456'
    //http:127.0.0.1:3000/login/details?youSayCont='["11","22"]'&&mySayContent='["22","33"]'
    let searchObj = url.parse(req.url, true).search.split('?')[1];
    let reqArr = searchObj.split('&&');
    let reqObj = {};
    let encodeArr = [[],[]];
    for (let z=0;z<reqArr.length;z++){
        if (reqArr[z] !== ''){
            let endStr = reqArr[z].split('=')[1];//'["1","2","3"]' string
            let endArr = [];
            endArr = endStr.split(',')//["1","2","3"] array
            console.log(endArr.length,'108')
            if (endArr.length > 0){
                for (let d=0;d<endArr.length;d++){
                    encodeArr[z].push(decodeURI(endArr[d]))
                }
            } else {
                reqObj[reqArr[z].split('=')[0]] = decodeURI(endStr);
            }
            console.log(encodeArr,'105')
        }
    }
    // // decodeURI()  .split('/')[1];
    let path = url.parse(req.url, true).pathname;
    //  /login首页
    if (path == '/login') {
        // 定义了一个body变量，用于暂存请求体的信息
        var body = [
            {
                name:'邓万',
                value:'聊天内容,这是一段很有意思的聊天内容。',
            },
            {
                name:'豆豆',
                value:'聊天内容,这是一段很豆豆的聊天内容。',
            },
            {
                name:'平平',
                value:'聊天内容,这是一段很平平的聊天内容。',
            },
            {
                name:'安安',
                value:'聊天内容,这是一段很安安的聊天内容。',
            },
            {
                name:'快快',
                value:'聊天内容,这是一段很快快的聊天内容。',
            },
            {
                name:'乐乐',
                value:'聊天内容,这是一段很乐乐的聊天内容。',
            },
            {
                name:'潇潇',
                value:'聊天内容,这是一段很潇潇的聊天内容。',
            },
            {
                name:'洒洒',
                value:'聊天内容,这是一段很洒洒的聊天内容。',
            },
            {
                name:'贝贝',
                value:'聊天内容,这是一段很贝贝的聊天内容。',
            },
            {
                name:'晶晶',
                value:'聊天内容,这是一段很晶晶的聊天内容。',
            },
            {
                name:'欢欢',
                value:'聊天内容,这是一段很欢欢的聊天内容。',
            },
            {
                name:'莹莹',
                value:'聊天内容,这是一段很莹莹的聊天内容。',
            },
            {
                name:'妮妮',
                value:'聊天内容,这是一段很妮妮的聊天内容。',
            },
        ];
    }else if (path == '/login/details'){
        // 详情页
        var body = []
        console.log(reqArr[0].split('=')[1].split(',').length ,'180')
        if (reqArr[0].split('=')[1].split(',').length == 1){
            body =[
                {
                    youSayContent:[
                        '你好','最近在干嘛呀','打豆豆','吃了呀。你呢？'
                    ],
                    mySayContent:[
                        '你好','我也好','在干嘛呀','吃饭了嘛'
                    ],
                }
            ]
        }else{
            let zmj = {
                youSayContent:[],
                mySayContent:[],
            }
            zmj.youSayContent = encodeArr[0];
            zmj.mySayContent = encodeArr[1];
            body.push(zmj)
        }
    }
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到body变量中
    req.on('data', function (data) {
        body += data;
    });

    req.on('end', function () {
        var myBody = querystring.parse(body); //querystring.parse将post解析为真正的POST请求格式
        // res.write(JSON.stringify(myBody));
        res.write(JSON.stringify(body))
        res.end();
    })
});

server.listen(3000, function () {
    console.log('server start at localhost:3000');
});