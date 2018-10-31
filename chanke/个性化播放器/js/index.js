var oAudio = document.getElementById("audio"),
    oCurrentTime = document.getElementsByClassName("current-time")[0],
    oAllTime = document.getElementsByClassName("all-time")[0],
    oBtn = document.getElementsByClassName("btn")[0],
    oIsPlay = document.getElementsByClassName("icon")[0],
    oProActive = document.getElementsByClassName("pro-active")[0],
    oProBox = document.getElementsByClassName("pro-box")[0],
    oRadioBox = document.getElementsByClassName("radio-box")[0],
    oPreviou = document.getElementsByClassName('previou')[0];

var timer,
    duration,
    bgWidth = 232;


//ondurationchange  网络资源加载时用这个，本地资源加载时用oncanplay
//oAudio.oncanplay = function () {
window.onload = function(){
    //oCurrentTime.innerHTML = conversion(0);
    oCurrentTime.innerHTML = conversion(oAudio.currentTime);
    //duration = this.duration;
    duration = oAudio.duration;
    // oAllTime.innerHTML = conversion(this.duration);
    oAllTime.innerHTML = conversion(duration);
}

function  conversion (time) {
    var sec = parseInt(time%60) < 10 ? '0' + parseInt(time%60)  :  parseInt(time%60);
    var min = parseInt(time/60) < 10 ? '0' + parseInt(time/60)  :  parseInt(time/60);
    return min + ":" + sec;
}

oBtn.onmouseup = function() {
    if(oAudio.paused) {
        musicPlay()
    }else{
        musicPause();
    }
}
function musicPlay() {
    oAudio.play();
    oIsPlay.className = "iconfont icon-suspend_icon";
    timer = setInterval(movePro,200);
}
function musicPause() {
    oAudio.pause();
    oIsPlay.className = "iconfont icon-iconset0481";
    clearInterval(timer);
}
function movePro() {
    //这里的oAudio.duration会每一秒更新一次，其实是没有必要的，我们只需要在最开始音频加载完的地方获取一下（this.duration）就可以了，但是this.duration与这里的oAudio.duration处于不同的作用于中，所以我们需要把他们的作用于提到全局
    // oAudio.oCurrentTime/oAudio.duration * allWidth
    var currentTime = oAudio.currentTime;
    oCurrentTime.innerHTML = conversion(currentTime);
    //这个计时器是有延迟的。暂停会出现跳秒的问题，这时候把计时器的刷新时间由1000减少到200；
    oProActive.style.width = currentTime/duration * bgWidth + 'px';
}

oAudio.onended = function () {
    musicPause();
    oAudio.currentTime = 0;
    oCurrentTime.innerHTML = conversion(0);
    oProActive.style.width = 0 + "px";
    musicPlay();
}

//按下之后才能拖
oRadioBox.onmousedown = function() {
    clearInterval(timer);
    var c = oAudio.currentTime;
    document.body.onmousemove = function(e) {
        var newWidth = e.clientX - oProBox.getBoundingClientRect().left;
        //e.clientX代表鼠标距离屏幕左侧的宽度值
        //oProBox.getBoundingClientRect().left代表oProBox这个元素距离屏幕左侧的值
        if(newWidth < 0){
            newWidth = 0;
        }else if(newWidth > 240){
            newWidth = 240;
        }
        oProActive.style.width = newWidth + "px";
        c = newWidth/bgWidth * duration;
        oCurrentTime.innerHTML = conversion(c);
        // musicPlay();
    }
    document.body.onmouseup = function() {
        document.body.onmousemove = null;
        document.body.onmouseup = null;

        musicPlay();
        oAudio.currentTime = c;
    }
}

// oAudio.src = "../source/song2.mp3";

oPreviou.onclick = function(){
    oAudio.src = "../source/son.mp3";
    musicPlay();
}