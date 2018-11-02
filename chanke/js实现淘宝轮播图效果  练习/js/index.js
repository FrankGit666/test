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






var oPrev = document.getElementById('prev'),
    oNext = document.getElementById('next'),
    oMain = document.getElementsByClassName('main')[0];


var timer;

function moveImg(dis) {
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

        }
    }
    timer = setInterval(eachMove,eachTime);
}
oPrev.onclick = function(){
    moveImg(520);
}

oNext.onclick = function(){
    moveImg(-520);
}