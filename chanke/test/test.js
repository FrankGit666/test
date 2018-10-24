var ul1 = document.getElementsByTagName("ul")[0];
ul1.addEventListener("click",ul1Click);
function ul1Click(event){
    console.log(event.target);
}