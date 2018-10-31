var oAudio = document.getElementById("audio"),
    oCurrentTime = document.getElementsByClassName('current-time')[0],
    oAllTime = document.getElementsByClassName('all-time')[0],
    oIsPlay = document.getElementsByClassName('icon')[0],
    oBtn = document.getElementsByClassName('btn')[0],
    oProActive = document.getElementsByClassName('pro-active')[0],
    oRadioBox = document.getElementsByClassName('radio-box')[0],
    oProBox = document.getElementsByClassName('pro-box')[0],
    oPreviou = document.getElementsByClassName('previou')[0];
var timer,
    duration,
    bgWidth = 232;


window.onload = function() {
    oCurrentTime.innerHTML = conversion(oAudio.currentTime);
    duration = oAudio.duration;
    oAllTime.innerHTML = conversion(duration);
}

function conversion(time) {
    var sec = parseInt(time%60)<10 ? '0' + parseInt(time%60) : parseInt(time%60);
        min = parseInt(time/60)<10 ? '0' + parseInt(time/60) : parseInt(time/60);
    return min + ':' + sec;
}

oBtn.onmouseup = function(){
    if(oAudio.paused){
        musicPlay();
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
    // console.log(oAudio.currentTime);
    var currentTime = oAudio.currentTime;
    oCurrentTime.innerHTML = conversion(currentTime);
    oProActive.style.width = currentTime/duration * bgWidth + 'px';
}

oAudio.onended = function() {
    musicPause();
    oAudio.currentTime = 0;
    oCurrentTime.innerHTML = conversion(0);
    oProActive.style.width = 0 + 'px';
    musicPlay();
}

oRadioBox.onmousedown = function() {
    clearInterval(timer);
    var c = oAudio.currentTime;
    document.body.onmousemove = function(e) {
        var newWidth = e.clientX - oProBox.getBoundingClientRect().left;
        if(newWidth < 0) {
            newWidth = 0;
        }else if(newWidth > 240) {
            newWidth = 240;
        }
        oProActive.style.width = newWidth + 'px';
        c = newWidth/bgWidth * duration;
        oCurrentTime.innerHTML = conversion(c);
    }
    document.body.onmouseup = function () {
        document.body.onmousemove = null;
        document.body.onmouseup = null;
        musicPlay();
        oAudio.currentTime = c;
    }
}
