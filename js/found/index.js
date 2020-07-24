finnerHtml(2)

var fContent = document.getElementsByClassName('found-content')[0];
var contentArr = [
    {
        path:'./friend.html',
        name:'朋友圈'
    },
    {
        path:'./video.html',
        name:'视频号'
    },
    {
        path:'./music.html',
        name:'扫一扫'
    },
    {
        path:'./music.html',
        name:'摇一摇'
    },
    {
        path:'./wellgame.html',
        name:'看一看'
    },
    {
        path:'./friend.html',
        name:'搜一搜'
    },
    {
        path:'./music.html',
        name:'附近的人'
    },
    {
        path:'./music.html',
        name:'购物'
    },
    {
        path:'./game.html',
        name:'游戏'
    },
    {
        path:'./music.html',
        name:'小程序'
    },
    {
        path:'./music.html',
        name:'音乐'
    },
];

for (let i = 0;i<contentArr.length;i++){
    fContent.innerHTML += `<a href="${contentArr[i].path}">
                <div class="found-content-child">
                    <div class="found-content-left">
                        <div class="found-content-img"></div>
                        <div class="found-content-title">${contentArr[i].name}</div>
                    </div>
                    <div class="found-content-right">
                        <div class="found-content-img found-child-img"></div>
                        <div class="found-content-next">&gt;</div>
                    </div>
                </div>
            </a>
            <div class="found-content-kongge"></div>`
    var fChild = document.getElementsByClassName('found-child-img');
    if (i>1){
        fChild[i].style.display = 'none';
    }
}