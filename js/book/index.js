var content = document.getElementById('content');
// for (let j = 0;j<26;j++){
//     content.innerHTML += `<a href="../wechat/wechat.html?id=0">
//                                 <div class="book-content-child">
//                                     <div class="book-content-img"></div>
//                                     <div class="book-content-name">张三</div>
//                                 </div>
//                             </a>
//                             <div class="book-content-kongge">${String.fromCodePoint(65+j)}</div>`
// }
var text = document.getElementsByClassName('book-content-kongge')
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
                    console.log(content.scrollTop,text[j].offsetTop)
                },10)
            }
            if(i == j){
                li[j].classList.add('active')
            }else{
                li[j].classList.remove('active')
            }
        }
    })
}