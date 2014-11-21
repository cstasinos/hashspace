var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 

var klass=require("hsp/klass"), log=require("hsp/rt/log");

var labels=["January","February","March","April","May","June","July"];
var d1 = [
  {data : [65,59,90,81,56,55,40], fillColor : "#CCCCCC", pointStrokeColor : "#FFF"},
  {data : [28,48,40,19,96,27,100], fillColor : "#279CE6", pointStrokeColor : "#FFF"}
];
var d2 = [
  {data : [145,181,120,178,100,123,190], fillColor : "#FF4DBE", pointStrokeColor : "#FFF"},
  {data : [123,45,76,43,97,12,38], fillColor : "#CCCCCC", pointStrokeColor : "#FFF"},
  {data : [12,36,37,85,47,90,27], fillColor : "#279CE6", pointStrokeColor : "#FFF"}

];

var ChartCpt=klass({
  $attributes:{
    width:{type:"int",binding:"1-way",defaultValue:100},
    height:{type:"int",binding:"1-way",defaultValue:100},
    type:{type:"string",binding:"1-way",defaultValue:"line"},
    labels:{type:"object",binding:"1-way",defaultValue:[]},
    datasets:{type:"object",binding:"1-way",defaultValue:[]},
    options:{type:"object",defaultValue:{scaleFontColor:"#fff",scaleLineColor:"#AAA"}}
  },
  $refresh:function() {
    if (!this.chart) {
      var canvas=this.$getElement(0);
      if (canvas.getContext) {
        $set(this, "chart", new Chart(canvas.getContext("2d")));
      }
    }
    if (this.chart) {
      if (this.type==="bar") {
        this.chart.Bar({labels:this.labels,datasets:this.datasets},this.options);
      } else if (this.type==="line") {
        this.chart.Line({labels:this.labels,datasets:this.datasets},this.options);
      } else {
        log.error("[ChartCpt] Invalid type: "+this.type);
      }
    }
  }
});


var chart = require("hsp/rt").template({ctl:[ChartCpt,"ChartCpt"],ref:"c"}, function(n){
  var _c;try {_c=c} catch(e) {_c=n.g('c')};
  var __s = {c : typeof c === 'undefined' ? n.g('c') : c};
  return [__s,n.elt("canvas",{e1:[9,"c.width"],e2:[9,"c.height"]},{"width":["",1],"height":["",2]},0)];
});

var test = require("hsp/rt").template(["data"], function(n){
  var _data,_d1,_d2,_labels,_datasets,_chart;try {_data=data} catch(e) {_data=n.g('data')};try {_d1=d1} catch(e) {_d1=n.g('d1')};try {_d2=d2} catch(e) {_d2=n.g('d2')};try {_labels=labels} catch(e) {_labels=n.g('labels')};try {_datasets=datasets} catch(e) {_datasets=n.g('datasets')};try {_chart=chart} catch(e) {_chart=n.g('chart')};
  var __s = {data : typeof data === 'undefined' ? n.g('data') : data, d1 : typeof d1 === 'undefined' ? n.g('d1') : d1, d2 : typeof d2 === 'undefined' ? n.g('d2') : d2, labels : typeof labels === 'undefined' ? n.g('labels') : labels, datasets : typeof datasets === 'undefined' ? n.g('datasets') : datasets, chart : typeof chart === 'undefined' ? n.g('chart') : chart};
  return [__s,n.let({e1:[9,"datasets=(data.ds==\"d1\")? d1 : d2"]}),n.cpt([_chart,"chart"],{e1:[9,"data.type"],e2:[9,"labels"],e3:[9,"datasets"]},{"width":"380","height":"220","type":["",1],"labels":["",2],"datasets":["",3]},0),n.elt("div",0,{"style":"padding:15 0 0 30"},0,[n.$text(0,[" Chart type: "]),n.elt("label",0,{"for":"rb1"},0,[n.elt("input",{e1:[9,"data.type"]},{"id":"rb1","type":"radio","model":["",1],"value":"line"},0),n.$text(0,["Line"])]),n.$text(0,["  "]),n.elt("label",0,{"for":"rb2"},0,[n.elt("input",{e1:[9,"data.type"]},{"id":"rb2","type":"radio","model":["",1],"value":"bar"},0),n.$text(0,["Bar"])]),n.elt("br",0,0,0),n.$text(0,[" Datasets: "]),n.elt("label",0,{"for":"rb3"},0,[n.elt("input",{e1:[9,"data.ds"]},{"id":"rb3","type":"radio","model":["",1],"value":"d1"},0),n.$text(0,[" d1"])]),n.$text(0,["  "]),n.elt("label",0,{"for":"rb4"},0,[n.elt("input",{e1:[9,"data.ds"]},{"id":"rb4","type":"radio","model":["",1],"value":"d2"},0),n.$text(0,[" d2"])])])];
});


// Needed by the playground application.
// Update it, but do not remove it!
$set(module, "exports", {
    template: test,
    data: [{
      type:"line",
      ds:"d1"
    }]
});