//定义一个对象，把所有全局变量当做这个对象的属性值，所有的function当做是这个对象下面的方法
function FileLoader(file, events) {
    this.file = file;
    this.step = 1024*1024;
    this.reader = new FileReader();
    this.total = file.size;
    this.loaded = 0;
    this.events = events;
    this.readBlob(this.reader, 0 ,this.step);
    this.blidEvent();
}
//把下面的方法拓展到FileLoader下面
FileLoader.prototype = {
    readBlob: function(reader, start, step) {
        var file = this.file;
        var reader = this.reader;
        if(file.size){
            var blob = file.slice(start, start + step);
        }else{
            var blob = file;
        }
        // console.log('787878');
        reader.readAsText(blob);
    },
    blidEvent: function(){
        var reader = this.reader;
        var _this = this;
        reader.onprogress = function(e){
            // e.loaded;    //相当于delta,每次上传的大小
            _this.onProgress(e.loaded);  //这里的this指的是reader，但是reader下面并没有定义onProgress方法,这里我们定义一个_this接收外面的this对象
        }
        reader.onload = function(){
            _this.onLoad();
        }
    },
    onProgress: function (num) {
        this.loaded += num;
        per = this.loaded/this.total;
        if(per > 1) {
            per = 1;
        }
        // val.style.width = per * 250 + 'px';
        // text.innerHTML = Math.round(per * 100) + '%';
        this.events.progressIng();
    },
    onLoad: function () {
        //执行文件上传操作
        var result = this.reader.result;
        // console.log('上传' + loaded + '部分');
        this.events.stepLoad(this.loaded);
    
        if(this.loaded < this.total){
            this.readBlob(this.reader, this.loaded, this.step);
        }else{
            // console.log('我终于上传完成了');
            this.events.finish();
        }
    }
}




