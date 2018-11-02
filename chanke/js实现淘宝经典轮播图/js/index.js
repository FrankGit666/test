var oPrev = document.getElementById('prev'),
    oNext = document.getElementById('next'),
    oMain = document.getElementsByClassName('main')[0],
    oList = document.getElementsByClassName('list')[0],
    oLi = oList.getElementsByTagName('li'),
    oContainer = document.getElementsByClassName('container')[0];

var timer,timer2,
    oLiLength = oLi.length,
    index = 0,
    flag = true;

function moveImg(dis) {
    flag = false;  //一旦轮播动起来，就要把这个锁加上，不让点击轮播
    var time = 400;    //每次轮播需要的时间
    var eachTime = 20;    //每一小次移动的时间
    var eachDis = dis/(time/eachTime);   //dis是有外部传进来的参数，因为这个地方轮播的距离是不定的，比如往右滑动是520，但是左滑动一次则是-520，但是如果我点击下面的小圆点，可能会挪动好几个520；

    var newLeft = oMain.offsetLeft + dis;   //目标点
    function eachMove(){
        if(dis > 0 && oMain.offsetLeft < newLeft || dis < 0 && oMain.offsetLeft > newLeft){  //if语句判断时用 双等于符号（ == ） 而不是 等于符号（ = ）
            oMain.style.left = oMain.offsetLeft + eachDis + 'px';
        }else{
            clearInterval(timer);
            oMain.style.left = newLeft + 'px';  //当我们不清楚到底要挪动多少的时候,可能会挪超出本该挪动的距离，我们需要强制让他回到目标点上
            
            //保证无缝链接 当往前翻到原队列第一张时，下一次往前翻肯定是到当前队列（首尾加了图片的队列）的第一张，当下次再往前翻的时候，我们会翻到当前队列的第一张，和原队列的第五张图片一样，所以我们需要在这一瞬间让他切换到原队列的第五张，保证无缝链接。
            if(newLeft == -3120) {  //if语句判断时用 双等于符号（ == ） 而不是 等于符号（ = ）
                oMain.style.left = -520 + 'px';
            }if(newLeft == 0){  //if语句判断时用 双等于符号（ == ） 而不是 等于符号（ = ）
                oMain.style.left = -2600 + 'px';
            }
            flag = true;
        }

        // if(dis < 0 && oMain.offsetLeft > newLeft){
        //     oMain.style.left = oMain.offsetLeft + eachDis + 'px';
        // }else{
        //     clearInterval(timer);
        //     oMain.style.left = newLeft + 'px';
        // }
    }
    timer = setInterval(eachMove,eachTime);
}

//这里是左右按钮切换图片
oPrev.onclick = function() {
    if(flag == false) return;  //if语句判断时用 双等于符号（ == ） 而不是 等于符号（ = ）
    moveImg(520);
    if(index == 0) {  //if语句判断时用 双等于符号（ == ） 而不是 等于符号（ = ）
        index = 4;
    }else {
        index--;
    }
    OLiStyle();
}

oNext.onclick = function() {
    if(flag == false) return;
    moveImg(-520);
    if(index == 4) {  //if语句判断时用 双等于符号（ == ） 而不是 等于符号（ = ）
        index = 0;
    }else {
        index++;
    }
    OLiStyle();
}


//这里开始小圆点切换
function OLiStyle() {
    oList.getElementsByClassName('active')[0].className = '';
    oLi[index].className = 'active';
}

for(var i = 0; i < oLiLength; i++) {
    //(function(j){})()立即执行函数
    (function(j){
        oLi[j].onclick = function() {
            var offset = (j - index) * (-520);
            moveImg(offset);
            index = j;
            OLiStyle();
        }
    })(i)
}



timer2 = setInterval(oNext.onclick,2000);

oContainer.onmouseover = function(){
    clearInterval(timer2);
}
oContainer.onmouseout = function() {
    timer2 = setInterval(oNext.onclick,2000);
}