finnerHtml(3)
var myContent = document.getElementsByClassName('myself-content')[0];
var myContentArr = [
    {
        name:'收藏',
    },
    {
        name:'相册',
    },
    {
        name:'卡包',
    },
    {
        name:'表情',
    }
];

myContent.innerHTML +=
    `<div class="found-content-kongge"></div>
    <div class="found-content-child pay" onclick="goWay(event,0)">
        <div class="found-content-left">
            <div class="found-content-img"></div>
            <div class="found-content-title">支付</div>
        </div>
        <div class="found-content-right">
            <div class="found-content-next">&gt;</div>
        </div>
    </div>
    <div class="found-content-kongge"></div>`
var pay = document.getElementsByClassName('pay')[0];
console.log(pay)
let pathUrl = window.location.href.split('index.html')[0]
pay.addEventListener('click',function (e) {
    console.log('dyk');
})
function goWay(e,i){
    let url = '';
    switch (i){
        case 0:
          url = 'pay.html';
          break;
        case 1:
          url = 'setting.html';
          break;
        case 2:
          url = 'collect.html';
          break;  
    }
    window.location.href = pathUrl+url;
}
myContentArr.forEach((item,i,arr)=>{
    myContent.innerHTML +=
        `<div class="found-content-child" onclick="goWay(event,${i+2})">
            <div class="found-content-left">
                <div class="found-content-img"></div>
                <div class="found-content-title">${item.name}</div>
            </div>
            <div class="found-content-right">
                <div class="found-content-next">&gt;</div>
            </div>
        </div>`;
})

myContent.innerHTML += `
       <div class="found-content-kongge"></div>
       <div class="found-content-child" onclick="goWay(event,1)">
            <div class="found-content-left">
                 <div class="found-content-img"></div>
                 <div class="found-content-title">设置</div>
            </div>
            <div class="found-content-right">
                 <div class="found-content-next">&gt;</div>
            </div>
       </div>`