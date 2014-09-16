
var klass = require("hsp/klass");

exports.AlertController = new klass({
    attributes : {        
        "closebutton": {type: "boolean", defaultValue:true},
        "fade": {type: "boolean", defaultValue: true},
        "type": {type: "string", defaultValue: "danger"},    
        "content" : {type: "template", defaultContent: true},
        "close" : {type: "boolean", defaultValue:false, binding : "2-way"}, // used to bind the onclose method 
        "onclosestart": { type: "callback" },
        "oncloseend": { type: "callback" }        
    },    
    $init : function () {       
        this.typeClass = 'alert-' + this.type;
        this.fadeClass = (this.fade) ? 'fade in' : '';       
    },  
    onCloseChange : function () {        
        if (this.close) {
            this.onclose();
        } else {
            this._close = false;
        }
    },
    onclose : function () {       
        this.close = true;         
        if (this.onclosestart) {            
            this.onclosestart();
        }      
        var transitionEnd = getTransitionEnd();        
        if (transitionEnd && this.fade) {
            this.fadeClass = 'fade out';               
            this.$getElement(0).addEventListener(transitionEnd, this.onTransitionEnd.bind(this), false);         
        } else {
            this._closeEnd(); 
        }           
    },
    onTransitionEnd : function () {        
        this._closeEnd(); 
    },
    _closeEnd : function () {
        this._close = true;
        if (this.oncloseend) {
            this.oncloseend();
        }  
    }

});

//CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
//============================================================
function getTransitionEnd() {
 var el = document.createElement('hashspace-bootstrap');
 var transEndEventNames = {
     WebkitTransition : 'webkitTransitionEnd',
     MozTransition    : 'transitionend',
     OTransition      : 'oTransitionEnd otransitionend',
     transition       : 'transitionend'
 };
 for (var name in transEndEventNames) {
     if (el.style[name] !== undefined) {
         return transEndEventNames[name];
     }
 }
 return false;
}
