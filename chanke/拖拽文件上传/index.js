var content = document.getElementsByClassName('content')[0];

content.addEventListener('dragover',function(e){
    e.preventDefault();
});

content.addEventListener('drop',function(e){
    e.preventDefault();
    var file = e.dataTransfer.files;
    console.log(file);
});

