var content = document.getElementById('content')
var li = document.getElementsByClassName('clickLi')
var text = document.getElementsByClassName('book-content-kongge')
var timer = null;
for (let i = 0;i<li.length;i++){
    li[i].addEventListener('click',function (e) {
        clearInterval(timer)
        for (let j = 0;j<text.length;j++){
            if (li[i].innerHTML == text[j].innerHTML){
                timer = setInterval(()=>{
                    if (content.scrollTop < text[j].offsetTop){
                        content.scrollTop += 1;
                    } else if(content.scrollTop > text[j].offsetTop){
                        console.log(content.scrollTop)
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
}