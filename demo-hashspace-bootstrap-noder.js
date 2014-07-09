(function(define) {
define("samples/$demoList.js", ["hsp/$set","noder-js/asyncRequire"], function (module, global){
var require = module.require, exports = module.exports, __filename = module.filename, __dirname = module.dirname;

var $set=require("hsp/$set"); var asyncRequire = require("noder-js/asyncRequire");

//The list of demos to be loaded is defined here
var demos = [
    {id: 'carousel', prettyName: 'Carousel'}
];

$set(exports, "getDemo", function() {
    var demosTpl = [];
    for (var i = 0; i < demos.length; i++) {
        demosTpl.push({
            id: demos[i].id,
            prettyName: demos[i].prettyName,
            demo: require('./' + demos[i].id + '/demo.hsp').demo,
            description: require('./' + demos[i].id + '/README.hsp').description
        });
    }
    return demosTpl;
});

$set(exports.getDemo, "$preload", function() {
    var modules = [];
    for (var i = 0; i < demos.length; i++) {
        modules.push('./samples/' + demos[i].id + '/demo.hsp');
        modules.push('./samples/' + demos[i].id + '/README.hsp');
    }
    return asyncRequire.apply(null, modules);
});

});
define("samples/index.hsp", ["hsp/$set","./$demoList",{"module":"./$demoList","method":"getDemo","args":[]},"hsp/rt"], function (module, global){
var require = module.require, exports = module.exports, __filename = module.filename, __dirname = module.dirname;

var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 
var demos = require('./$demoList').getDemo();


var index =$set(exports, "index", require("hsp/rt").template([], function(n){
  var _demos;try {_demos=demos} catch(e) {_demos=n.g('demos')};
  return [n.elt("div",0,{"class":"navbar navbar-inverse navbar-fixed-top","role":"navigation"},0,[n.elt("div",0,{"class":"container-fluid"},0,[n.elt("div",0,{"class":"navbar-header"},0,[n.elt("a",0,{"class":"navbar-brand","href":"#"},0,[n.$text(0,["Hashspace-Bootstrap"])]),n.$foreach({e1:[2,1,_demos]},"demo_key","demo",0,1,[n.elt("a",{e1:[1,2,"demo","id"]},{"class":"navbar-brand","href":["#",1]},0,[n.$text({e1:[1,2,"demo","prettyName"]},["",1])])]),n.$text(0,[" "])]),n.elt("div",0,{"class":"collapse navbar-collapse"},0,[n.elt("ul",0,{"class":"nav navbar-nav navbar-right"},0,[n.elt("li",0,0,0,[n.elt("a",0,{"href":"https://github.com/ariatemplates/hashspace-bootstrap"},0,[n.$text(0,["Github"])])])])]),n.$text(0,[" "])])]),n.elt("div",0,{"class":"container-fluid"},0,[n.elt("div",0,{"class":"content"},0,[n.elt("h1",0,0,0,[n.$text(0,["Hashspace-Bootstrap"])]),n.elt("p",0,{"class":"lead"},0,[n.$text(0,["Hashspace components for Bootstrap."])]),n.$foreach({e1:[2,1,_demos]},"demo_key","demo",0,1,[n.elt("section",0,0,0,[n.elt("hr",0,0,0),n.elt("h1",{e1:[1,2,"demo","id"]},{"id":["",1]},0,[n.$text({e1:[1,2,"demo","prettyName"]},["",1])]),n.elt("div",0,{"class":"row"},0,[n.elt("div",0,{"class":"col-md-6"},0,[n.cpt([null,"demo","demo"],0,0,0)]),n.elt("div",0,{"class":"col-md-6"},0,[n.cpt([null,"demo","description"],0,0,0)])])])]),n.$text(0,[" "])])])];
}));

});
define("samples/carousel/README.hsp", ["hsp/$set","hsp/rt"], function (module, global){
var require = module.require, exports = module.exports, __filename = module.filename, __dirname = module.dirname;

var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 
var description =$set(exports, "description", require("hsp/rt").template([], function(n){
  return [n.elt("p",0,0,0,[n.$text(0,["A carousel component similar to "]),n.elt("a",0,{"href":"http://getbootstrap.com/javascript/#carousel"},0,[n.$text(0,["Bootstrap javascript carousel"])])]),n.elt("h4",0,{"id":"attributes"},0,[n.$text(0,["Attributes"])]),n.elt("table",0,{"class":"table table-bordered"},0,[n.elt("thead",0,0,0,[n.elt("tr",0,0,0,[n.elt("th",0,0,0,[n.$text(0,["Name"])]),n.elt("th",0,0,0,[n.$text(0,["Binding"])]),n.elt("th",0,0,0,[n.$text(0,["Type"])]),n.elt("th",0,0,0,[n.$text(0,["Default"])]),n.elt("th",0,0,0,[n.$text(0,["Description"])])])]),n.elt("tbody",0,0,0,[n.elt("tr",0,0,0,[n.elt("td",0,0,0,[n.elt("strong",0,0,0,[n.$text(0,["index"])])]),n.elt("td",0,0,0,[n.$text(0,["2-way"])]),n.elt("td",0,0,0,[n.$text(0,["int"])]),n.elt("td",0,0,0,[n.$text(0,["0"])]),n.elt("td",0,0,0,[n.$text(0,["Index (0-based) of the active slide."])])]),n.elt("tr",0,0,0,[n.elt("td",0,0,0,[n.elt("strong",0,0,0,[n.$text(0,["interval"])])]),n.elt("td",0,0,0,[n.$text(0,["1-way"])]),n.elt("td",0,0,0,[n.$text(0,["int"])]),n.elt("td",0,0,0,[n.$text(0,["5000"])]),n.elt("td",0,0,0,[n.$text(0,["The amount of time to delay between automatically cycling an item. If false or negative, carousel will not automatically cycle."])])]),n.elt("tr",0,0,0,[n.elt("td",0,0,0,[n.elt("strong",0,0,0,[n.$text(0,["pause"])])]),n.elt("td",0,0,0,[n.$text(0,["none"])]),n.elt("td",0,0,0,[n.$text(0,["string"])]),n.elt("td",0,0,0,[n.$text(0,["\"hover\""])]),n.elt("td",0,0,0,[n.$text(0,["Pauses the cycling of the carousel on mouseover and resumes the cycling of the carousel on mouseout."])])]),n.elt("tr",0,0,0,[n.elt("td",0,0,0,[n.elt("strong",0,0,0,[n.$text(0,["wrap"])])]),n.elt("td",0,0,0,[n.$text(0,["none"])]),n.elt("td",0,0,0,[n.$text(0,["boolean"])]),n.elt("td",0,0,0,[n.$text(0,["true"])]),n.elt("td",0,0,0,[n.$text(0,["Whether the carousel should cycle continuously or have hard stops."])])]),n.elt("tr",0,0,0,[n.elt("td",0,0,0,[n.elt("strong",0,0,0,[n.$text(0,["noTransition"])])]),n.elt("td",0,0,0,[n.$text(0,["none"])]),n.elt("td",0,0,0,[n.$text(0,["boolean"])]),n.elt("td",0,0,0,[n.$text(0,["false"])]),n.elt("td",0,0,0,[n.$text(0,["Whether transitions are activated."])])])])]),n.elt("h4",0,{"id":"elements"},0,[n.$text(0,["Elements"])]),n.elt("table",0,{"class":"table table-bordered"},0,[n.elt("thead",0,0,0,[n.elt("tr",0,0,0,[n.elt("th",0,0,0,[n.$text(0,["Name"])]),n.elt("th",0,0,0,[n.$text(0,["Description"])]),n.elt("th",0,0,0)])]),n.elt("tbody",0,0,0,[n.elt("tr",0,0,0,[n.elt("td",0,0,0,[n.elt("strong",0,0,0,[n.$text(0,["@slide"])])]),n.elt("td",0,0,0,[n.$text(0,["A slide of the carousel."])]),n.elt("td",0,0,0)]),n.elt("tr",0,0,0,[n.elt("td",0,0,0,[n.elt("strong",0,0,0,[n.$text(0,["@slide / @body"])])]),n.elt("td",0,0,0,[n.$text(0,["The body of the slide, any HTML element."])]),n.elt("td",0,0,0,[n.elt("strong",0,0,0,[n.$text(0,["Default"])])])]),n.elt("tr",0,0,0,[n.elt("td",0,0,0,[n.elt("strong",0,0,0,[n.$text(0,["@slide / @caption"])])]),n.elt("td",0,0,0,[n.$text(0,["The caption of the slide, a block of HTML displayed at the bttom center."])]),n.elt("td",0,0,0,[n.$text(0,["Optionnal"])])])])]),n.elt("h4",0,{"id":"events"},0,[n.$text(0,["Events"])]),n.elt("table",0,{"class":"table table-bordered"},0,[n.elt("thead",0,0,0,[n.elt("tr",0,0,0,[n.elt("th",0,0,0,[n.$text(0,["Name"])]),n.elt("th",0,0,0,[n.$text(0,["Description"])])])]),n.elt("tbody",0,0,0,[n.elt("tr",0,0,0,[n.elt("td",0,0,0,[n.elt("strong",0,0,0,[n.$text(0,["onslidestart"])])]),n.elt("td",0,0,0,[n.$text(0,["This event fires immediately when the transition starts."])])]),n.elt("tr",0,0,0,[n.elt("td",0,0,0,[n.elt("strong",0,0,0,[n.$text(0,["onslideend"])])]),n.elt("td",0,0,0,[n.$text(0,["This event is fired when the carousel has completed its slide transition."])])])])])];
}));

});
define("samples/carousel/demo.hsp", ["hsp/$set","../../carousel/carousel.hsp","hsp/rt"], function (module, global){
var require = module.require, exports = module.exports, __filename = module.filename, __dirname = module.dirname;

var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 
var carousel = require('../../carousel/carousel.hsp').carousel;


var demo =$set(exports, "demo", require("hsp/rt").template([], function(n){
  var _carousel;try {_carousel=carousel} catch(e) {_carousel=n.g('carousel')};
  return [n.let({e1:[5,0]},['slideIndex',1]),n.let({e1:[5,2000]},['slideInterval',1]),n.cpt([_carousel,"carousel"],{e1:[1,1,"slideInterval"],e2:[1,1,"slideIndex"]},{"interval":["",1],"index":["",2]},0,[n.catt("slide",0,0,0,[n.catt("body",0,0,0,[n.elt("img",0,{"style":"width: 800px; height: 400px;","src":"http://placekitten.com/800/400"},0)]),n.catt("caption",0,0,0,[n.elt("h3",0,0,0,[n.$text(0,["First slide label"])]),n.elt("p",0,0,0,[n.$text(0,["Nulla vitae elit libero, a pharetra augue mollis interdum."])])])]),n.catt("slide",0,0,0,[n.catt("body",0,0,0,[n.elt("img",0,{"style":"width: 800px; height: 400px;","src":"http://placekitten.com/801/400"},0)]),n.catt("caption",0,0,0,[n.elt("h3",0,0,0,[n.$text(0,["Second slide label"])]),n.elt("p",0,0,0,[n.$text(0,["Lorem ipsum dolor sit amet, consectetur adipiscing elit."])])])]),n.catt("slide",0,0,0,[n.elt("img",0,{"style":"width: 800px; height: 400px;","src":"http://placekitten.com/800/401"},0)])]),n.$text(0,[" "]),n.elt("form",0,{"role":"form"},0,[n.elt("div",0,{"class":"form-group"},0,[n.elt("label",0,{"for":"indexField"},0,[n.$text(0,["Index (0-based)"])]),n.elt("input",{e1:[1,1,"slideIndex"]},{"type":"number","class":"form-control","id":"indexField","value":["",1]},0)]),n.elt("div",0,{"class":"form-group"},0,[n.elt("label",0,{"for":"intervalField"},0,[n.$text(0,["Interval (negative number to stop the cycle)"])]),n.elt("input",{e1:[1,1,"slideInterval"]},{"type":"number","class":"form-control","id":"intervalField","value":["",1]},0)])])];
}));

});
})(noder.define);