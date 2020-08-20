const http = require('http');
const {hostname} = require('os');
const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/html;chartset=UTF-8');
    res.end('hello world\n')
})
server.listen(port,()=>{
    console.log(`服务器运行在${hostname}:${port}`)
})