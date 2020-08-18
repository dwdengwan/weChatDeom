const arr = ['1','2','3'];
const doSomethingAsync = ()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('doing something!')
        },3000)
    })
}
const wait = async ()=>{
    console.log(await doSomethingAsync())
}
console.log(arr)
wait()