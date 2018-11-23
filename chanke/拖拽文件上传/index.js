var content = document.getElementsByClassName('content')[0];
var val = document.getElementsByClassName('val')[0];
var text = document.getElementsByClassName('text')[0];


content.addEventListener('dragover',function(e){
    e.preventDefault();
});

content.addEventListener('drop',function(e){
    e.preventDefault();
    file = e.dataTransfer.files[0];   //这里如果不加下标，那么获取的是一个filelist
    // total = file.size;
    // console.log(file);
    var loader = new FileLoader(file, events);
    // readBlob(reader, 0, step);
    // blidEvent();
});

var events = {
    progressIng: function(){
        val.style.width = per * 250 + 'px';
        text.innerHTML = Math.round(per * 100) + '%';
    },
    stepLoad: function(loaded){
        console.log('上传' + loaded + '部分');
    },
    finish: function(){
        console.log('我终于上传完成了');
    }
}

