// var lunbo = document.getElementsByClassName('nearpeople-content-lunbo')[0];
// var left = document.getElementsByClassName('nearpeople-fix-left')[0];
// var right = document.getElementsByClassName('nearpeople-fix-right')[0];
// var buttom = document.getElementsByClassName('nearpeople-fix-buttom')[0];
// var lunbo = YY53KG('.nearpeople-content-lunbo')[0];
// var left = YY53KG('.nearpeople-fix-left')[0];
// var right = YY53KG('.nearpeople-fix-right')[0];
// var buttom = YY53KG('.nearpeople-fix-buttom')[0];
// var buttom = YY53KG('#buttom');
// buttom.classFlag('a','active');
// buttom.classList.add('active')
YY53KG('#buttom').css({'background':'#f0f','border':'1px solid red'}).addClass('active').on('click',function (e) {
    console.log('yy53kg')
})
YY53KG('#buttom').findClass('active')

// for (let z=0;z<3;z++){
//     lunbo.innerHTML += `<div class="nearpeople-lunbo-child">
//                             <span class="nearpeople-lunbo-span">我的未来不是梦${z}</span>
//                         </div>`;
//     buttom.innerHTML += `<div class="nearpeople-lunbo-li"></div>`;
// }
// var lChild = document.getElementsByClassName('nearpeople-lunbo-child');
// var timer = null;
// lChild[0].style.background = '#f0f'
// lChild[1].style.background = '#f99'
// lChild[2].style.background = '#0ff'
// lChild[0].style.display = 'flex';
// lChild[1].style.display = 'none';
// lChild[2].style.display = 'none';
//
// for (let z=0;z<lChild.length;z++){
//     lChild[z].addEventListener('click',function (e) {
//         clearInterval(timer)
//         timer = setInterval(()=>{
//             if (z<lChild.length){
//                 z++;
//             } else{
//                 z = 0;
//             }
//             lunboRun(z)
//         },2000)
//     })
// }
//
// function lunboRun(z) {
//     switch (z){
//         case 0:
//             lChild[0].style.display = 'flex';
//             lChild[1].style.display = 'none';
//             lChild[2].style.display = 'none';
//             break;
//         case 1:
//             lChild[0].style.display = 'none';
//             lChild[1].style.display = 'flex';
//             lChild[2].style.display = 'none';
//             break;
//         case 2:
//             lChild[0].style.display = 'none';
//             lChild[1].style.display = 'none';
//             lChild[2].style.display = 'flex';
//             break;
//     }
// }
//
// left.addEventListener('click',function (e) {
//     let z = 0;
//     z++;
//     lunboRun(z)
// })
//
// right.addEventListener('click',function (e) {
//     let z=2;
//     z--;
//     lunboRun(z)
// })
