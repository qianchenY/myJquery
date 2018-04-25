var $ = function(selector, context){
    return new $.fn.init(selector, context);
}

$.fn = $.prototype;

$.fn.init = function(selector, context){
    var nodelist = (context || document).querySelectorAll(selector);
    this.length = nodelist.length;

    for(var i = 0; i < this.length; i++){
        this[i] = nodelist[i];
    };

    this.oldel = [];
    
    return this;
}

$.fn.eq = function(i){
    var length = this.length,  
        el = this[i];
    
    for(var n = 0; n < length; n++){
        this.oldel[n] = this[n];
        delete this[n];
    };
    this.length = 1;
    this[0] = el;

    return this;
}

$.fn.each = function(fn){ 
    var i = 0, length = this.length;

    for(; i < length; i++){
        fn.call(this[i], i, this[i]);
    }

    return this;
}

$.fn.show = function(){
    this.each(function(i, el){ 
        this.style.display = "block";
    });

    return this;  
}

$.fn.hide = function(){
    
    this.each(function(i, el){ 
        this.style.display = "none";
    });

    return this;  
}

$.fn.bind = function(name, fn){
    var  _this = this,
        length = this.length;

    for(var i = 0; i < length; i++){
        if(this[i].addEventListener){
            this[i].addEventListener(name, fn);
        }else{
            this[i].attachEvent("on"+name, fn);
        }
        
    }
}

$.fn.unbind = function(name, fn){
    var  _this = this,
        length = this.length;

    for(var i = 0; i < length; i++){
        if(this[i].removeEventListener){
            this[i].removeEventListener(name, fn);
        }else{
            this[i].detachEvent("on"+name, fn);
        }
        
    }
}

$.fn.init.prototype = $.prototype;
