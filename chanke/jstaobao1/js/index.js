// 上下翻页
// var oPrev = document.getElementById('prev'),
//     oNext = document.getElementById('next'),
//     oMain = document.getElementsByClassName('main')[0];


// var timer;

// function moveImg(dis) {
//     var time = 400;
//     var eachTime = 20;
//     var eachDis = dis/(time/eachTime);

//     var newLeft = oMain.offsetLeft + dis;
//     function eachMove(){
//         if(dis>0 && oMain.offsetLeft < newLeft || dis < 0 && oMain.offsetLeft > newLeft){
//             oMain.style.left = oMain.offsetLeft + eachDis + 'px';
//         }else{
//             clearInterval(timer);
//             oMain.style.left = newLeft + 'px';
//             if(newLeft == -3120){
//                 oMain.style.left = -520 + 'px';
//             }if(newLeft == 0){
//                 oMain.style.left = -2600 + 'px';
//             }

//         }
//     }
//     timer = setInterval(eachMove,eachTime);
// }
// oPrev.onclick = function(){
//     moveImg(520);
// }

// oNext.onclick = function(){
//     moveImg(-520);
// }






// ==========================================================================

// 小圆点切换
// var oPrev = document.getElementById('prev'),
//     oNext = document.getElementById('next'),
//     oMain = document.getElementsByClassName('main')[0],
//     oList = document.getElementsByClassName('list')[0],
//     oLi = oList.getElementsByTagName('li');


// var timer,
//     index = 0;

// function moveImg(dis) {
//     var time = 400;
//     var eachTime = 20;
//     var eachDis = dis/(time/eachTime);

//     var newLeft = oMain.offsetLeft + dis;
//     function eachMove(){
//         if(dis>0 && oMain.offsetLeft < newLeft || dis < 0 && oMain.offsetLeft > newLeft){
//             oMain.style.left = oMain.offsetLeft + eachDis + 'px';
//         }else{
//             clearInterval(timer);
//             oMain.style.left = newLeft + 'px';
//             if(newLeft == -3120){
//                 oMain.style.left = -520 + 'px';
//             }if(newLeft == 0){
//                 oMain.style.left = -2600 + 'px';
//             }

//         }
//     }
//     timer = setInterval(eachMove,eachTime);
// }
// oPrev.onclick = function(){
//     moveImg(520);
// }

// oNext.onclick = function(){
//     moveImg(-520);
// }


// // 小圆点切换
// function OLiStyle() {
//     oList.getElementsByClassName('active')[0].className = '';
//     oLi[index].className = 'active';
// }

// for(var i = 0; i < oLi.length; i++){
//     (function(j){
//         oLi[j].onclick = function() {
//             var offeset = (j - index) * -520;
//             moveImg(offeset);
//             index = j;
//             OLiStyle();
//         }
//     })(i)
    
// }






// ==========================================================================

// 自动播放

var oPrev = document.getElementById('prev'),
    oNext = document.getElementById('next'),
    oMain = document.getElementsByClassName('main')[0],
    oList = document.getElementsByClassName('list')[0],
    oLi = oList.getElementsByTagName('li'),
    oContainer = document.getElementsByClassName('container')[0];


var timer, timer2,
    index = 0,
    flag = true;

function moveImg(dis) {
    flag = false;
    var time = 400;
    var eachTime = 20;
    var eachDis = dis/(time/eachTime);

    var newLeft = oMain.offsetLeft + dis;
    function eachMove(){
        if(dis>0 && oMain.offsetLeft < newLeft || dis < 0 && oMain.offsetLeft > newLeft){
            oMain.style.left = oMain.offsetLeft + eachDis + 'px';
        }else{
            clearInterval(timer);
            oMain.style.left = newLeft + 'px';
            if(newLeft == -3120){
                oMain.style.left = -520 + 'px';
            }if(newLeft == 0){
                oMain.style.left = -2600 + 'px';
            }
            flag = true;
        }
    }
    timer = setInterval(eachMove,eachTime);
}
oPrev.onclick = function(){
    if(flag == false) return;
    moveImg(520);
    if(index == 0){
        index = 4;
    }else{
        index--;
    }
    OLiStyle();
}

oNext.onclick = function(){
    if(flag == false) return;
    moveImg(-520);
    if(index == 4){
        index = 0;
    }else{
        index++;
    }
    OLiStyle();
}


// 小圆点切换
function OLiStyle() {
    oList.getElementsByClassName('active')[0].className = '';
    oLi[index].className = 'active';
}

for(var i = 0; i < oLi.length; i++){
    (function(j){
        oLi[j].onclick = function() {
            var offeset = (j - index) * -520;
            moveImg(offeset);
            index = j;
            OLiStyle();
        }
    })(i)
    
}

// 自动播放，调用点解跳转下一张图片oNext.onclick方法
timer2 = setInterval(oNext.onclick,2000);



// 鼠标挪上去，暂停自动播放
oContainer.onmouseover = function() {
    clearInterval(timer2);
}
oContainer.onmouseout = function() {
    timer2 = setInterval(oNext.onclick,2000);
}