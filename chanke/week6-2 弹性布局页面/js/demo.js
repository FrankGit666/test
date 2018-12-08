var oMore = document.getElementsByClassName('more')[0],
    oList = document.getElementsByClassName('list')[0];


// oMore.onclick = function() {
//     if(oList.style.display == 'flex'){
//         oList.style.display = 'none';
//     }else{
//         oList.style.display = 'flex';
//     }
    
// }

oMore.onclick = function() {
    if(document.getElementsByClassName('list-active')[0]){
        oList.classList.remove('list-active');
    }else{
        oList.classList.add('list-active');
    }
}