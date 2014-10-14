var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 

var splitter = require("./splitter.hsp.js");
var plunkerExport = require("./plunker.js");

var Class = require("hsp/klass");

var DescriptionCtrl = Class({
    $attributes: {
        sample: { type: "object", binding: "1-way" }
    },
    $init: function() {
        this.$onSampleChange();
    },
    $refresh: function() {
        if (!this.sample) return;
        var root = this.$getElement(0), before, after;
        if (root) {
            before = root.querySelector(".before");
            after = root.querySelector(".after");
            $set(before, "innerHTML", this.before);
            $set(after, "innerHTML", this.after);
        }
    },

    $onSampleChange: function() {
        if (!this.sample) return;
        var parts = this.sample.description.split("[#output]");
        $set(this, "before", parts[0]);
        $set(this, "after", parts[1]);
    }
});


var desc = require("hsp/rt").template({ctl:[DescriptionCtrl,"DescriptionCtrl"],ref:"ctrl"}, function(n){
  var _ctrl;try {_ctrl=ctrl} catch(e) {_ctrl=n.g('ctrl')};
  var __s = {ctrl : typeof ctrl === 'undefined' ? n.g('ctrl') : ctrl};
  return [__s,n.elt("div",0,{"id":"description"},0,[n.$if({e1:[9,"ctrl.sample"]},1,[n.elt("div",0,{"class":"before"},0)]),n.elt("div",0,{"id":"output","class":"output"},0),n.elt("div",0,{"id":"logs","class":"logoutput"},0),n.$if({e1:[9,"ctrl.sample"]},1,[n.elt("div",0,{"class":"after"},0)])])];
});


var mainLayout =$set(exports, "mainLayout", require("hsp/rt").template(["data","playground"], function(n){
  var _data,_playground,_sampleList,_hideNavHover,_$event,_plunkerExport,_splitterReleased,_splitter,_desc;try {_data=data} catch(e) {_data=n.g('data')};try {_playground=playground} catch(e) {_playground=n.g('playground')};try {_sampleList=sampleList} catch(e) {_sampleList=n.g('sampleList')};try {_hideNavHover=hideNavHover} catch(e) {_hideNavHover=n.g('hideNavHover')};try {_$event=$event} catch(e) {_$event=n.g('$event')};try {_plunkerExport=plunkerExport} catch(e) {_plunkerExport=n.g('plunkerExport')};try {_splitterReleased=splitterReleased} catch(e) {_splitterReleased=n.g('splitterReleased')};try {_splitter=splitter} catch(e) {_splitter=n.g('splitter')};try {_desc=desc} catch(e) {_desc=n.g('desc')};
  var __s = {data : typeof data === 'undefined' ? n.g('data') : data, playground : typeof playground === 'undefined' ? n.g('playground') : playground, sampleList : typeof sampleList === 'undefined' ? n.g('sampleList') : sampleList, hideNavHover : typeof hideNavHover === 'undefined' ? n.g('hideNavHover') : hideNavHover, $event : typeof $event === 'undefined' ? n.g('$event') : $event, plunkerExport : typeof plunkerExport === 'undefined' ? n.g('plunkerExport') : plunkerExport, splitterReleased : typeof splitterReleased === 'undefined' ? n.g('splitterReleased') : splitterReleased, splitter : typeof splitter === 'undefined' ? n.g('splitter') : splitter, desc : typeof desc === 'undefined' ? n.g('desc') : desc};
  return [__s,n.cpt([_sampleList,"sampleList"],{e1:[9,"data"],e2:[9,"playground"]},{"data":["",1],"playground":["",2]},0),n.$text(0,[" "]),n.elt("div",{e1:[9,"{'hsp-sample-full': data.navCollapsed}"],e2:[9,"hideNavHover($event, data)"]},{"class":["hsp-sample ",1]},{"click":2},[n.$text(0,[" "]),n.elt("h4",0,{"class":"title"},0,[n.$text({e1:[9,"data.sampleTitle"]},["",1])]),n.$text(0,[" "]),n.elt("div",{e1:[9,"data.splitterPos"]},{"class":"editor","style":["width: ",1]},0,[n.elt("button",{e1:[9,"plunkerExport($event, playground)"]},{"class":"plunker","title":"Export this code to Plunker"},{"click":1},[n.$text(0,["Edit in Plunker"])]),n.elt("div",0,{"id":"editor"},0)]),n.$text(0,[" "]),n.cpt([_splitter,"splitter"],{e1:[9,"splitterReleased($event.position, data, playground)"]},{"type":"horizontal","size":"3"},{"release":1}),n.$text(0,[" "]),n.elt("div",{e1:[9,"data.splitterPos"]},{"class":"description","style":["left: ",1]},0,[n.elt("div",0,0,0,[n.elt("h4",0,0,0,[n.$text(0,["Description"])]),n.cpt([_desc,"desc"],{e1:[9,"data.samples[data.sampleIndex]"]},{"sample":["",1]},0)])])])];
}));


function splitterReleased(position, data, playground) {
    $set(data, "splitterPos", position + "px");
    editorResize(playground);
}

function editorResize(playground, delay) {
    // Pseudo nextTick when delay = 0
    delay = delay || 0;
    setTimeout(function() {
        playground.editor.resize(true);
    }, delay);
}

function collapseNav(event, data, playground) {
    $set(data, "navCollapsed", !data.navCollapsed);
    $set(data, "navHover", false);
    editorResize(playground, 218);
    event.preventDefault();
}

function showListHover(event, data) {
    $set(data, "navHover", !data.navHover);
    event.preventDefault();
    event.stopPropagation();
}

function hideNavHover(event, data) {
    if (data.navHover) {
        $set(data, "navHover", false);
    }
}


var sampleList = require("hsp/rt").template(["data","playground"], function(n){
  var _data,_hideNavHover,_$event,_collapseNav,_playground,_showListHover,_sample,_index;try {_data=data} catch(e) {_data=n.g('data')};try {_hideNavHover=hideNavHover} catch(e) {_hideNavHover=n.g('hideNavHover')};try {_$event=$event} catch(e) {_$event=n.g('$event')};try {_collapseNav=collapseNav} catch(e) {_collapseNav=n.g('collapseNav')};try {_playground=playground} catch(e) {_playground=n.g('playground')};try {_showListHover=showListHover} catch(e) {_showListHover=n.g('showListHover')};try {_sample=sample} catch(e) {_sample=n.g('sample')};try {_index=index} catch(e) {_index=n.g('index')};
  var __s = {data : typeof data === 'undefined' ? n.g('data') : data, hideNavHover : typeof hideNavHover === 'undefined' ? n.g('hideNavHover') : hideNavHover, $event : typeof $event === 'undefined' ? n.g('$event') : $event, collapseNav : typeof collapseNav === 'undefined' ? n.g('collapseNav') : collapseNav, playground : typeof playground === 'undefined' ? n.g('playground') : playground, showListHover : typeof showListHover === 'undefined' ? n.g('showListHover') : showListHover, sample : typeof sample === 'undefined' ? n.g('sample') : sample, index : typeof index === 'undefined' ? n.g('index') : index};
  return [__s,n.elt("div",{e1:[9,"{'samples-list-collapsed': data.navCollapsed}"],e2:[9,"hideNavHover($event, data)"]},{"class":["samples-list ",1]},{"click":2},[n.$text(0,[" "]),n.elt("a",{e1:[9,"data.navCollapsed ? 'Expand sidebar' : 'Collapse sidebar'"],e2:[9,"collapseNav($event, data, playground)"]},{"href":"","class":"collapse","title":["",1]},{"click":2},[n.elt("span",0,{"class":"icon"},0)]),n.$text(0,[" "]),n.$if({e1:[9,"data.navCollapsed"]},1,[n.elt("a",{e1:[9,"showListHover($event, data)"]},{"href":"","class":"showlist action","title":"See samples list"},{"click":1},[n.elt("span",0,{"class":"icon"},0)]),n.$text(0,[" "])],[n.elt("h4",0,0,0,[n.$text(0,["Samples"])])]),n.$text(0,[" "]),n.elt("div",{e1:[9,"data.navHover ? 'list-hover' : 'list'"]},{"class":["",1]},0,[n.$foreach({e1:[9,"data.samples"]},"index","sample",0,1,[n.$if({e1:[9,"sample.category"]},1,[n.elt("div",0,{"class":"category"},0,[n.$text({e1:[9,"sample.category"]},["",1])])],[n.elt("div",{e1:[9,"{'selected': data.sampleIndex === index}"]},{"class":["item ",1]},0,[n.elt("a",{e1:[9,"'#' + sample.folder"]},{"href":["",1]},0,[n.$text({e1:[9,"sample.title"]},["",1])])])])]),n.$text(0,[" "])])])];
});

var errorList =$set(exports, "errorList", require("hsp/rt").template(["errors"], function(n){
  var _errors,_error;try {_errors=errors} catch(e) {_errors=n.g('errors')};try {_error=error} catch(e) {_error=n.g('error')};
  var __s = {errors : typeof errors === 'undefined' ? n.g('errors') : errors, error : typeof error === 'undefined' ? n.g('error') : error};
  return [__s,n.$if({e1:[9,"errors && errors.length"]},1,[n.elt("div",0,{"class":"errorlist"},0,[n.elt("ul",0,0,0,[n.$foreach({e1:[9,"errors"]},"error_key","error",0,1,[n.elt("li",0,0,0,[n.elt("div",{e1:[9,"error.type"]},{"class":["",1]},0,[n.$text({e1:[9,"error.message"]},[" ",1," "])]),n.$if({e1:[9,"error.line || error.file"]},1,[n.elt("div",0,{"class":"ctxt"},0,[n.$text({e1:[9,"error.file"]},["[",1,"] "]),n.$if({e1:[9,"error.line"]},1,[n.$text({e1:[9,"error.line"],e2:[9,"error.column"]},["line: ",1,", column: ",2])])])]),n.$if({e1:[9,"error.code"]},1,[n.elt("div",0,{"class":"code"},0,[n.$text(0,[">> code: "]),n.elt("span",0,{"class":"codetext"},0,[n.$text({e1:[9,"error.code"]},["",1])])])])])]),n.$text(0,[" "])])])])];
}));