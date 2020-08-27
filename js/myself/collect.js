(function () {
   let collect = document.getElementsByClassName('collect')[0];
   let content = document.getElementsByClassName('collect-content')[0];
   let count = document.getElementsByClassName('collect-footer-number')[0];
   let countNum = 0;
   let countTop = 0;
   let countLeft = 0;
   let nowTop = 0;
   let nowLeft = 0;
   let numberArr = [1,2,3,4,5,6,7,8];
   let timer = null;
   function selectNumber() {
       content.innerHTML = '';
       numberArr = [1,2,3,4,5,6,7,8];
       for (let z=0;z<8;z++){
           let disNumber = parseInt(Math.random()*(numberArr.length));
           content.innerHTML += `<div class="collect-child">
                <span>${numberArr[disNumber]}</span>
           </div>`
           numberArr.splice(disNumber,1)
       }
   }
   selectNumber()
   let childArr = document.getElementsByClassName('collect-child');
   for (let z=0;z<8;z++){
       if (z >= 0 && z < 3){
           childArr[z].style.top = '2%';
           childArr[z].style.left = 3 + 32*z + '%';
       }else if (z >=3 && z < 6){
           childArr[z].style.top = '34%';
           childArr[z].style.left = 3 + 32*(z-3) + '%';
       }else{
           childArr[z].style.top = '66%';
           childArr[z].style.left = 3 + 32*(z-6) + '%';
       }
       childArr[z].addEventListener('touchstart',function (e) {
            e.preventDefault()
            console.log(childArr[z].style.top)
            countTop = parseInt(childArr[z].style.top.split('%'));
            nowTop = parseInt(childArr[z].style.top.split('%'));
            timer = setTimeout(()=>{
                localStorage.setItem('nowTop',nowTop);
            },1)
            switch (countTop){
                case 2:
                    break;
                case 34:
                    break;
                case 66:
                    break;
            }
            // if (countTop)
            // console.log('touchstart',e.changedTouches[0].clientX,e.changedTouches[0].clientY)
       })
       childArr[z].addEventListener('touchmove',function (e) {
           e.preventDefault()
           timer = setTimeout(()=>{
               localStorage.setItem('nowTop',nowTop);
           },1)
           nowTop = parseInt(childArr[z].style.top.split('%'));
           if (nowTop>parseInt(localStorage.getItem('nowTop'))){
               countTop ++;
           } else{
               countTop --;
           }
           console.log(nowTop,parseInt(localStorage.getItem('nowTop'),countTop))
           childArr[z].style.top = countTop + '%';
           // console.log('touchmove',e.changedTouches[0].clientX,e.changedTouches[0].clientY)
       })
       childArr[z].addEventListener('touchend',function (e) {
           e.preventDefault()
           // console.log(countTop)
           if (countTop < 17){
               childArr[z].style.top = '2%';
           }else if (countTop < 49){
               childArr[z].style.top = '34%';
           } else if (countTop < 81) {
               childArr[z].style.top = '66%';
           }
           countNum ++;
           count.innerHTML = countNum;
           // console.log('touchend',e.changedTouches[0].clientX,e.changedTouches[0].clientY)
       })
   }
   collect.addEventListener('click',function (e) {
       // console.log('1')
       // selectNumber()
   })
})()