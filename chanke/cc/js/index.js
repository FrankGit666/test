var tabs = document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
var lists = document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);
var times = document.getElementById('tabs').getElementsByClassName('active')[0],
    timesOut = times.getElementsByTagName('span');




for(var i = 0; i<tabs.length; i++){
    tabs[i].onclick = showlist;
    lists[i].onclick = showlist;

}

// 监听滚动高度
//var scrollTop = document.documentElement.scrollTop;
//console.log(scrollTop);

function showlist(){
    for(i = 0; i<tabs.length; i++){
        if(tabs[i] === this){
            tabs[i].className = "active";
            lists[i].className = "clearfix active";
        }
        else{
            tabs[i].className = "";
            lists[i].className = "clearfix";
        }
    }
}

var seckillNav = document.getElementById("seckillNav");
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || window.pageXOffset || document.body.scrollTop;
    
    if( scrollTop >= 260 ){
        seckillNav.className = "seckill-nav seckill-navfixed";
    }else{
        seckillNav.className = "seckill-nav";
    }
    // console.log(scrollTop); 
}



var myDate = new Date();
var hour = myDate.getHours();
var min = myDate.getMinutes();
var sec = myDate.getSeconds();

function timesOut() {
    var H = hour - 0;
    var M = min - 0;
    var S = sec - 0;
    msg = "即将开始" + '<br>' + "局开始" + " " + H + ':' + M + ':' + S;
    timesOut.innerHTML = msg;
    setInterval(timesOut,1000);
    console.log(setInterval(timesOut,1000));
}



