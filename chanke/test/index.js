

console.log("start");
working(10*1000);
console.log("end");

function working(time){
    var nowTime = Date.now();
    var exitTime = nowTime + time;

    while(nowTime < exitTime){
        nowTime = Date.now();
    }
}


