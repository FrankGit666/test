var tabs = document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
var lists = document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);
var times = document.getElementById('times');




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




function countTime() {  
    //获取当前时间  
    var date = new Date();  
    var now = date.getTime();  
    //设置截止时间  
    var str="2018/11/17 00:00:00";
    var endDate = new Date(str); 
    var end = endDate.getTime();  
    
    //时间差  
    var leftTime = end-now; 
    //定义变量 d,h,m,s保存倒计时的时间  
    var d,h,m,s;  
    if (leftTime>=0) {  
        d = Math.floor(leftTime/1000/60/60/24);  
        h = Math.floor(leftTime/1000/60/60%24);  
        m = Math.floor(leftTime/1000/60%60);  
        s = Math.floor(leftTime/1000%60); 
    }  
    //将倒计时赋值到div中 
    times.innerHTML = "即将开始<br>局开始" + " " + h + ":" + m + ":" + s ; 
    // document.getElementById("_d").innerHTML = d+"天";  
    // document.getElementById("_h").innerHTML = h+"时";  
    // document.getElementById("_m").innerHTML = m+"分";  
    // document.getElementById("_s").innerHTML = s+"秒";  
    //递归每秒调用countTime方法，显示动态时间效果  
    setTimeout(countTime,1000);  
}  