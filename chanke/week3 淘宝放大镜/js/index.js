var oMin = document.getElementsByClassName('min')[0],
    oCover = document.getElementsByClassName('cover')[0],
    oMax = document.getElementsByClassName('max')[0],
    oMaxImg = oMax.getElementsByTagName('img')[0];

oMin.onmouseover = function(){
    oCover.style.display = 'block';
    oMax.style.display = 'block';

    console.log(oMax.offsetWidth);
    console.log(oMax.offsetHeight);
    console.log(oCover.offsetWidth);
    console.log(oCover.offsetHeight);

}

oMin.onmouseleave = function(){
    oCover.style.display = 'none';
    oMax.style.display = 'none';
}

oMin.onmousemove = function(e){
    var x = e.clientX - this.offsetLeft - 100;    //  oCover.offsetWidth/2 = 100
    var y = e.clientY - this.offsetTop - 100;
    var minX = 0;
    var maxX = oMin.offsetWidth - oCover.offsetWidth;
    if(x < 0){
        x = minX;
    }else if(x >= maxX){
        x = maxX;
    }
    var minY = 0;
    var maxY = oMin.offsetHeight - oCover.offsetHeight;
    if(y < 0){
        y = minY;
    }else if(y >= maxY){
        y = maxY;
    }
    oCover.style.left = x + 'px';
    oCover.style.top = y + 'px';

    // x/maxX = L/(oMaxImg.offsetWidth - oMax.offsetWidth);
    // L = x/maxX * (oMaxImg.offsetWidth - oMax.offsetWidth);
    
    var imgX = x/maxX * (oMax.offsetWidth - oMaxImg.offsetWidth);
    var imgY = y/maxY * (oMax.offsetHeight - oMaxImg.offsetHeight);

    oMaxImg.style.left = imgX + 'px';
    oMaxImg.style.top = imgY + 'px';
}