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
    <div class="found-content-child">
        <div class="found-content-left">
            <div class="found-content-img"></div>
            <div class="found-content-title">支付</div>
        </div>
        <div class="found-content-right">
            <div class="found-content-next">&gt;</div>
        </div>
    </div>
    <div class="found-content-kongge"></div>`
myContentArr.forEach((item,i,arr)=>{
    myContent.innerHTML +=
        `<div class="found-content-child">
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
       <div class="found-content-child">
            <div class="found-content-left">
                 <div class="found-content-img"></div>
                 <div class="found-content-title">设置</div>
            </div>
            <div class="found-content-right">
                 <div class="found-content-next">&gt;</div>
            </div>
       </div>`