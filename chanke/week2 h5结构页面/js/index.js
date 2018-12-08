var oNav = document.getElementById('nav').getElementsByTagName("li"),
    oNone = document.getElementsByClassName("none");


window.onload = function(){
    console.log(oNav);
    console.log(oNone);
}

for(var i = 0; i < oNav.length; i++) {
    oNav[i].onclick = showlist;
    // oNone[i].onclick = showlist;
}

function showlist(){
    for(var i = 0; i < oNav.length; i++){
        if(oNav[i] === this){
            oNav[i].className = "active";
            oNone[i].className = "none active";
        }else{
            oNav[i].classList = "";
            oNav[i].style.transition = "0.5s";
            oNone[i].className = "none";
        }
    }
}