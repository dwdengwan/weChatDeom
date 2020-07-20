var content = document.getElementById('content');
var ul = document.getElementsByClassName('fix-ul')[0]
for (let i = 0; i < 5; i++) {
    content.innerHTML += `<a href="../wechat/wechat.html?type=2&id=0">
                                <div class="book-content-child">
                                    <div class="book-content-img"></div>
                                    <div class="book-content-name">张三${i}</div>
                                </div>
                            </a>`
}
for (let j = 0;j<26;j++){
    content.innerHTML += `<div class="book-content-kongge">${String.fromCodePoint(65+j)}</div>
                           <a class="book-content-a">
                                <div class="book-content-child">
                                    <div class="book-content-img"></div>
                                    <div class="book-content-name">${String.fromCodePoint(65+j)}张三${j}</div>
                                </div>
                           </a>`
    ul.innerHTML += `<li class="clickLi">${String.fromCodePoint(65+j)}</li>`;
}
var text = document.getElementsByClassName('book-content-kongge');
var back = document.getElementsByClassName('book-content-a')
var timer = null;
var li = document.getElementsByClassName('clickLi')
for (let i = 0;i<li.length;i++){
    li[i].addEventListener('click',function (e) {
        clearInterval(timer)
        for (let j = 0;j<text.length;j++){
            if (li[i].innerHTML == text[j].innerHTML){
                timer = setInterval(()=>{
                    if (content.scrollTop < text[j].offsetTop){
                        content.scrollTop += 1;
                    } else if(content.scrollTop > text[j].offsetTop){
                        content.scrollTop -= 1;
                    }else if (content.scrollTop == text[j].offsetTop){
                        clearInterval(timer)
                    }
                },10)
            }
            if(i == j){
                li[j].classList.add('active')
            }else{
                li[j].classList.remove('active')
            }
        }
    })
    back[i].addEventListener('click',function (e) {
        console.log(i)
        back[i].href = `../wechat/wechat.html?type=2&id=${i}`;
    })
}

//获取滚动条的位置
nowLocation(content,'bookScroll')

//返回到指定的位置 id 滚动条区域
backLocation(content,'bookScroll')