var tabs = document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
var lists = document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);

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

