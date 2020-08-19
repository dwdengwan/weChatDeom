// http 搭建
// const http = require('http');
// const { hostname } = require('os');
// const port = 3000;
// const serve = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('content-type','text/html;charset=UTF-8')
//     res.end('你好,世界\n')
// })
// serve.listen(port,()=>{
//     console.log(`服务器运行在${hostname}:${port}`)
// })

//http GET
const https = require('https');
const options = {
    hostname:'nodejs.cn',
    port:334,
    path:"/todos",
    method:"GET"
}
const req = https.request(options,res=>{
    console.log(`状态码:${res.statusCode}`)
    res.on('data',d=>{
        process.stdout.write(d)
    })
})
req.on('error',error=>{
    console.error(error)
})
req.end()