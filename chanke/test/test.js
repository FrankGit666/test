var p1 = document.getElementById("p1");
p1.textContent = "这是innerHTML <a href='http://www.baidu.com'> this is a</a>"    //这是修改纯文本
var ul1 = document.getElementsByTagName("ul")[0];
ul1.addEventListener("click",ul1Click);
function ul1Click(event){
    console.log(event.target);
}
