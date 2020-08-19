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
//     port:443,
//     path:"/todos",
//     method:"POST",
//     headers:{
//         'Content-type':"application/json",
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