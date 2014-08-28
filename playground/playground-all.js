!function(a){a("playground/layout.hsp.js",["hsp/$set","./splitter.hsp.js","./plunker.js","hsp/klass","hsp/rt"],function(a){function b(a,b,d){i(b,"splitterPos",a+"px"),c(d)}function c(a,b){b=b||0,setTimeout(function(){a.editor.resize(!0)},b)}function d(a,b,d){i(b,"navCollapsed",!b.navCollapsed),i(b,"navHover",!1),c(d,218),a.preventDefault()}function e(a,b){i(b,"navHover",!b.navHover),a.preventDefault(),a.stopPropagation()}function f(a,b){b.navHover&&i(b,"navHover",!1)}{var g=a.require,h=a.exports,i=(a.filename,a.dirname,g("hsp/$set")),j=g("./splitter.hsp.js"),k=g("./plunker.js"),l=g("hsp/klass"),m=l({attributes:{sample:{type:"object",binding:"1-way"}},$init:function(){this.onSampleChange()},$refresh:function(){if(this.sample){var a,b,c=this.$getElement(0);c&&(a=c.querySelector(".before"),b=c.querySelector(".after"),i(a,"innerHTML",this.before),i(b,"innerHTML",this.after))}},onSampleChange:function(){if(this.sample){var a=this.sample.description.split("[#output]");i(this,"before",a[0]),i(this,"after",a[1])}}}),n=g("hsp/rt").template({ctl:[m,"DescriptionCtrl"],ref:"ctrl"},function(a){var b;try{b=ctrl}catch(c){b=a.g("ctrl")}var d={ctrl:"undefined"==typeof ctrl?void 0:ctrl};return[d,a.elt("div",0,{id:"description"},0,[a.$if({e1:[9,"ctrl.sample"]},1,[a.elt("div",0,{"class":"before"},0)]),a.elt("div",0,{id:"output","class":"output"},0),a.elt("div",0,{id:"logs","class":"logoutput"},0),a.$if({e1:[9,"ctrl.sample"]},1,[a.elt("div",0,{"class":"after"},0)])])]}),o=(i(h,"mainLayout",g("hsp/rt").template(["data","playground"],function(a){var c,d,e,g,h,i;try{c=o}catch(l){c=a.g("sampleList")}try{d=f}catch(l){d=a.g("hideNavHover")}try{e=k}catch(l){e=a.g("plunkerExport")}try{g=b}catch(l){g=a.g("splitterReleased")}try{h=j}catch(l){h=a.g("splitter")}try{i=n}catch(l){i=a.g("desc")}var m={sampleList:"undefined"==typeof o?void 0:o,hideNavHover:"undefined"==typeof f?void 0:f,plunkerExport:"undefined"==typeof k?void 0:k,splitterReleased:"undefined"==typeof b?void 0:b,splitter:"undefined"==typeof j?void 0:j,desc:"undefined"==typeof n?void 0:n};return[m,a.cpt([c,"sampleList"],{e1:[1,1,"data"],e2:[1,1,"playground"]},{data:["",1],playground:["",2]},0),a.$text(0,[" "]),a.elt("div",{e1:[6,function(a){return["hsp-sample",a?"hsp-sample-full":""].join(" ")},2],e2:[1,2,"data","navCollapsed"],e3:[4,1,d,1,4,1,5],e4:[0,1,"event"],e5:[1,1,"data"]},{"class":["",1]},{click:3},[a.$text(0,[" "]),a.elt("h4",0,{"class":"title"},0,[a.$text({e1:[1,2,"data","sampleTitle"]},["",1])]),a.$text(0,[" "]),a.elt("div",{e1:[1,2,"data","splitterPos"]},{"class":"editor",style:["width: ",1]},0,[a.elt("button",{e1:[4,1,e,1,2,1,3],e2:[0,1,"event"],e3:[1,1,"playground"]},{"class":"plunker",title:"Export this code to Plunker"},{click:1},[a.$text(0,["Edit in Plunker"])]),a.elt("div",0,{id:"editor"},0)]),a.$text(0,[" "]),a.cpt([h,"splitter"],{e1:[4,1,g,1,2,1,3,1,4],e2:[0,2,"event","position"],e3:[1,1,"data"],e4:[1,1,"playground"]},{type:"horizontal",size:"3"},{release:1}),a.$text(0,[" "]),a.elt("div",{e1:[1,2,"data","splitterPos"]},{"class":"description",style:["left: ",1]},0,[a.elt("div",0,0,0,[a.elt("h4",0,0,0,[a.$text(0,["Description"])]),a.cpt([i,"desc"],{e1:[7,2,function(a,b,c){return[b,c][a]},2,3],e2:[1,2,"data","samples"],e3:[1,2,"data","sampleIndex"]},{sample:["",1]},0)])])])]})),g("hsp/rt").template(["data","playground"],function(a){var b,c,g,h,i;try{b=f}catch(j){b=a.g("hideNavHover")}try{c=d}catch(j){c=a.g("collapseNav")}try{g=data}catch(j){g=a.g("data")}try{h=e}catch(j){h=a.g("showListHover")}try{i=sample}catch(j){i=a.g("sample")}var k={hideNavHover:"undefined"==typeof f?void 0:f,collapseNav:"undefined"==typeof d?void 0:d,data:"undefined"==typeof data?void 0:data,showListHover:"undefined"==typeof e?void 0:e,sample:"undefined"==typeof sample?void 0:sample};return[k,a.elt("div",{e1:[6,function(a){return["samples-list",a?"samples-list-collapsed":""].join(" ")},2],e2:[1,2,"data","navCollapsed"],e3:[4,1,b,1,4,1,5],e4:[0,1,"event"],e5:[1,1,"data"]},{"class":["",1]},{click:3},[a.$text(0,[" "]),a.elt("a",{e1:[6,function(a){return a?"Expand sidebar":"Collapse sidebar"},2],e2:[1,2,"data","navCollapsed"],e3:[4,1,c,1,4,1,5,1,6],e4:[0,1,"event"],e5:[1,1,"data"],e6:[1,1,"playground"]},{href:"","class":"collapse",title:["",1]},{click:3},[a.elt("span",0,{"class":"icon"},0)]),a.$text(0,[" "]),a.$if({e1:[9,"data.navCollapsed"]},1,[a.elt("a",{e1:[4,1,h,1,2,1,3],e2:[0,1,"event"],e3:[1,1,"data"]},{href:"","class":"showlist action",title:"See samples list"},{click:1},[a.elt("span",0,{"class":"icon"},0)]),a.$text(0,[" "])],[a.elt("h4",0,0,0,[a.$text(0,["Samples"])])]),a.$text(0,[" "]),a.elt("div",{e1:[6,function(a){return a?"list-hover":"list"},2],e2:[1,2,"data","navHover"]},{"class":["",1]},0,[a.$foreach({e1:[9,"data.samples"]},"index","sample",0,1,[a.$if({e1:[9,"sample.category"]},1,[a.elt("div",0,{"class":"category"},0,[a.$text({e1:[1,2,"sample","category"]},["",1])])],[a.elt("div",{e1:[6,function(a,b){return["item",a===b?"selected":""].join(" ")},2,3],e2:[1,2,"data","sampleIndex"],e3:[1,1,"index"]},{"class":["",1]},0,[a.elt("a",{e1:[6,function(a){return"#"+a},2],e2:[1,2,"sample","folder"]},{href:["",1]},0,[a.$text({e1:[1,2,"sample","title"]},["",1])])])])]),a.$text(0,[" "])])])]}));i(h,"errorList",g("hsp/rt").template(["errors"],function(a){var b,c;try{b=errors}catch(d){b=a.g("errors")}try{c=error}catch(d){c=a.g("error")}var e={errors:"undefined"==typeof errors?void 0:errors,error:"undefined"==typeof error?void 0:error};return[e,a.$if({e1:[9,"errors && errors.length"]},1,[a.elt("div",0,{"class":"errorlist"},0,[a.elt("ul",0,0,0,[a.$foreach({e1:[9,"errors"]},"error_key","error",0,1,[a.elt("li",0,0,0,[a.elt("div",{e1:[1,2,"error","type"]},{"class":["",1]},0,[a.$text({e1:[1,2,"error","message"]},[" ",1," "])]),a.$if({e1:[9,"error.line || error.file"]},1,[a.elt("div",0,{"class":"ctxt"},0,[a.$text({e1:[1,2,"error","file"]},["[",1,"] "]),a.$if({e1:[9,"error.line"]},1,[a.$text({e1:[1,2,"error","line"],e2:[1,2,"error","column"]},["line: ",1,", column: ",2])])])]),a.$if({e1:[9,"error.code"]},1,[a.elt("div",0,{"class":"code"},0,[a.$text(0,[">> code: "]),a.elt("span",0,{"class":"codetext"},0,[a.$text({e1:[1,2,"error","code"]},["",1])])])])])]),a.$text(0,[" "])])])])]}))}}),a("playground/playground.js",["hsp/$set","hsp/rt","hsp/klass","hsp/rt/log","./layout.hsp.js","../samples/samples"],function(a){for(var b,c=a.require,d=(a.exports,a.filename,a.dirname,c("hsp/$set")),e=(c("hsp/rt"),c("hsp/klass")),f=c("hsp/rt/log"),g=c("./layout.hsp.js"),h=c("../samples/samples"),i={},j=0,k=h.length;k>j;j++){var l=h[j];d(l,"index",j),d(i,l.folder,l)}{var m=0,n={};d(a,"exports",e({containerId:"",$constructor:function(a,b){if(m++,d(this,"idx",m),d(n,"p"+this.idx,this),d(this,"containerId",a),d(this,"devMode",b),d(this,"data",{errors:[],sampleIndex:-1,sampleTitle:"",samples:h,navCollapsed:!1,navHover:!1,splitterPos:"50%"}),!b){var c=document.createElement("script");d(c,"type","text/javascript"),d(c,"src","/dist/"+window.hashspace_version+"/hashspace-noder-compiler.min.js"),document.querySelector("head").appendChild(c)}},$dispose:function(){d(n,"p"+this.idx,null)},initEditor:function(){if(!this.editor){var a=d(this,"editor",ace.edit("editor"));a.setShowPrintMargin(!1),a.setReadOnly(!1),a.setTheme("ace/theme/crimson_editor");var b=a.getSession();b.setMode("ace/mode/javascript");var c=this;d(this,"changeTimeout",null),b.on("change",function(){c.changeTimeout&&(clearTimeout(c.changeTimeout),d(c,"changeTimeout",null));var a=c.data,b=a.samples[a.sampleIndex],e=b.files[0].src;d(c,"changeTimeout",setTimeout(function(){d(c,"changeTimeout",null),b.changed?c.compileAndUpdate(e,c.editor.getValue()):(d(b,"changed",!0),c.executeSampleTpl(b))},100))})}},executeSampleTpl:function(a){var b=a.sample.template,c=a.sample.data||[];"function"==typeof c&&(c=c.call(a.sample)),b.apply(a.sample,c).render("output")},notifyScriptError:function(a,b){var c={message:""+b,type:"error"};n["p"+a].log(c)},compileAndUpdate:function(e,g){var i=this,j=function(a,b){if(a)console.warn("[compileAndUpdate] "+a.text+" ("+a.status+")");else{var g=i.data,j=h[g.sampleIndex],k="samples/"+j.folder+"/"+e;try{g.errors.splice(0,g.errors.length),f.removeAllLoggers(),f.addLogger(i.log.bind(i)),c.cache[k]&&d(c.cache,k,null),noder.execute(b,k).then(function(a){var b=g.samples[g.sampleIndex];d(b,"sample",a),i.executeSampleTpl(b)},function(a){i.notifyScriptError(i.idx,a,e)}).end()}catch(l){console.warn("[compileAndUpdate] "+l.message+" (line:"+l.line+", column:"+l.column+")")}}};b||(b=a.require("hsp/compiler/compile"));var k=b(g,e);j(null,k)},showSample:function(a){g.mainLayout(this.data,this).render(this.containerId),this.initEditor(),this.loadSample(a)},loadSample:function(a){var b="number"==typeof a?h[a]:i[a];this.data.sampleIndex!==b.index&&(d(b,"changed",b.changed||!1),d(this.data,"errors",[]),g.errorList(this.data.errors).render("logs"),d(this.data,"sampleIndex",b.index),d(this.data,"sampleTitle",b.title),this.editor.setValue(b.files[0].text,-1))},log:function(a){return this.data.errors.push(a),!1}}))}}),a("playground/plunker.js",["hsp/$set"],function(a){function b(a){var b=document.createElement("div");return d(b,"innerHTML",a),b.firstChild}var c=a.require,d=(a.exports,a.filename,a.dirname,c("hsp/$set"));d(a,"exports",function(a,c){var d=b('<form style="display: none;" method="post" action="http://plnkr.co/edit/#/?p=preview" target="_blank"></form>'),e=function(a,c){var e=b('<input type="hidden" name="'+a+'">');e.setAttribute("value",c),d.appendChild(e)};e("description",c.data.sampleTitle+"\n"+window.location),e("tags[]","hashspace"),e("files[index.html]",["<!doctype html>","<html>","  <head>",'    <link rel="stylesheet" type="text/css" href="http://hashspace.ariatemplates.com/css/samples.css" />','    <script src="http://noder-js.ariatemplates.com/dist/v1.6.0/noder.dev.js" type="text/javascript">',"    {","      packaging: {","        preprocessors: [{","          pattern: /\\.hsp$/,",'          module: "hsp/compiler/compile"',"        }, {","          pattern: /\\.js$/,",'          module: "hsp/transpiler/transpile"',"        }]","      }","    }","    </script>",'    <script src="http://hashspace.ariatemplates.com/dist/'+window.hashspace_version+'/hashspace-noder.js"></script>','    <script src="http://hashspace.ariatemplates.com/dist/'+window.hashspace_version+'/hashspace-noder-compiler.js"></script>',"  </head>","  <body>\n",'    <div id="sample"></div>',"",'    <script type="application/x-noder">','      var sample = require("./sample.hsp"),',"          template = sample.template,","          data = sample.data || [];","",'      if (typeof data === "function") {',"        data = data.call(sample);","      }",'      template.apply(sample, data).render("sample");',"    </script>","  </body>","</html>"].join("\n")),e("files[sample.hsp]",[c.editor.getValue()].join("\n")),document.body.appendChild(d),d.submit(),document.body.removeChild(d),a.preventDefault()})}),a("playground/splitter.hsp.js",["hsp/$set","hsp/klass","hsp/rt"],function(a){var b=a.require,c=(a.exports,a.filename,a.dirname,b("hsp/$set")),d=b("hsp/klass"),e=d({attributes:{type:{type:"string",defaultValue:"horizontal"},size:{type:"int",defaultValue:3},onrelease:{type:"callback"}},$init:function(){c(document,"onmousemove",this.onMouseMove.bind(this)),c(document,"onmouseup",this.onMouseUp.bind(this))},$dispose:function(){c(document,"onmousevent",null),c(document,"onmouseup",null)},$refresh:function(){this.proxy||(c(this,"handle",this.$getElement(0)),c(this,"proxy",this.$getElement(1)))},onMouseDown:function(a){c(this,"active",!0);var b=this.getNewPos(a);this.updatePos(this.proxy,b),a.preventDefault()},onMouseMove:function(a){if(this.active){var b=this.getNewPos(a);this.updatePos(this.proxy,b),a.preventDefault()}},onMouseUp:function(a){if(this.active){var b=this.afterMouseUp(a);this.onrelease({position:b}),a.preventDefault()}},afterMouseUp:function(a){c(this,"active",!1);var b=this.getNewPos(a);return this.updatePos(this.handle,b),b},getNewPos:function(a){var b,c=this.handle.parentNode;return"vertical"==this.type?(b=c.offsetTop,Math.ceil(a.pageY-b-this.size/2)):(b=c.offsetLeft,Math.ceil(a.pageX-b-this.size/2))},updatePos:function(a,b){c(a.style,"vertical"===this.type?"top":"left",b+"px")}}),f=b("hsp/rt").template({ctl:[e,"SplitterCtrl"],ref:"controller"},function(a){var b={};return[b,a.elt("div",{e1:[3,2,"controller","onMouseDown",1,2],e2:[0,1,"event"]},{"class":"splitter"},{mousedown:1}),a.elt("div",{e1:[6,function(a){return["splitter-proxy",a?"":"splitter-proxy-hidden"].join(" ")},2],e2:[1,2,"controller","active"]},{"class":["",1]},0)]});c(a,"exports",f)})}(noder.define);