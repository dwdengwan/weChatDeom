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
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });
    // url.parse 方法来解析 URL 中的参数
    var pathname = url.parse(req.url, true).pathname;
    let path = pathname.split('/')[0]+'/';
    console.log(path)
    if (path == '/') {
        // 定义了一个body变量，用于暂存请求体的信息
        var body = {
            name:'dw',
            value:'',
        };
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
    }
});

server.listen(3000, function () {
    console.log('server start at localhost:3000');
});