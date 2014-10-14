var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 

var log=require("hsp/rt/log");


var test = require("hsp/rt").template(["cities","logs"], function(n){
  var _$scope,_increaseList,_decreaseList,_clearLogs,_cities,_idx,_city,_logs,_msg;try {_$scope=$scope} catch(e) {_$scope=n.g('$scope')};try {_increaseList=increaseList} catch(e) {_increaseList=n.g('increaseList')};try {_decreaseList=decreaseList} catch(e) {_decreaseList=n.g('decreaseList')};try {_clearLogs=clearLogs} catch(e) {_clearLogs=n.g('clearLogs')};try {_cities=cities} catch(e) {_cities=n.g('cities')};try {_idx=idx} catch(e) {_idx=n.g('idx')};try {_city=city} catch(e) {_city=n.g('city')};try {_logs=logs} catch(e) {_logs=n.g('logs')};try {_msg=msg} catch(e) {_msg=n.g('msg')};
  var __s = {$scope : typeof $scope === 'undefined' ? n.g('$scope') : $scope, increaseList : typeof increaseList === 'undefined' ? n.g('increaseList') : increaseList, decreaseList : typeof decreaseList === 'undefined' ? n.g('decreaseList') : decreaseList, clearLogs : typeof clearLogs === 'undefined' ? n.g('clearLogs') : clearLogs, cities : typeof cities === 'undefined' ? n.g('cities') : cities, idx : typeof idx === 'undefined' ? n.g('idx') : idx, city : typeof city === 'undefined' ? n.g('city') : city, logs : typeof logs === 'undefined' ? n.g('logs') : logs, msg : typeof msg === 'undefined' ? n.g('msg') : msg};
  return [__s,n.log({e1:[9,"\"top-level:\",$scope"]},'inline.js','',6,3),n.elt("a",{e1:[9,"increaseList()"]},{"href":"javascript:void(0)"},{"click":1},[n.$text(0,["Increase list"])]),n.$text(0,[" - "]),n.elt("a",{e1:[9,"decreaseList()"]},{"href":"javascript:void(0)"},{"click":1},[n.$text(0,["Decrease list"])]),n.$text(0,[" - "]),n.elt("a",{e1:[9,"clearLogs()"]},{"href":"javascript:void(0)"},{"click":1},[n.$text(0,["Clear logs"])]),n.elt("ul",0,0,0,[n.$foreach({e1:[9,"cities"]},"idx","city",0,1,[n.log({e1:[9,"\"item #\"+idx+\":\", city"]},'inline.js','',12,7),n.elt("li",0,0,0,[n.$text({e1:[9,"idx+1"],e2:[9,"city.name"]},["",1,". ",2])])]),n.$text(0,[" "])]),n.elt("div",0,{"class":"logsection"},0,[n.$text(0,["Logs: "]),n.elt("ul",0,{"class":"logs"},0,[n.$foreach({e1:[9,"logs"]},"msg_key","msg",0,1,[n.elt("li",0,0,0,[n.elt("span",0,{"class":"ctxt"},0,[n.$text({e1:[9,"msg.file"],e2:[9,"msg.line"],e3:[9,"msg.column"]},[" [",1," ",2,":",3,"] "])]),n.elt("span",0,{"class":"msg"},0,[n.$text({e1:[9,"msg.message"]},[" ",1," "])])])]),n.$text(0,[" "])])])];
});


// register new logger
var logs=[];
log.addLogger(function(msg) {
  logs.push(msg);
  return false; // to prevent the main logger to be notified
});

var cities=[
    {name:"Paris", code:"PAR"},
    {name:"London", code:"LON"},
    {name:"New York", code:"NYC"}
];

function increaseList() {
  var idx=cities.length+1;
  cities.push({name:"City "+idx, code:"C"+idx});
}

function decreaseList() {
  cities.shift(); // remove first item
}

function clearLogs() {
  logs.splice(0,logs.length);
}

// Needed by the playground application.
// Update it, but do not remove it!
$set(module, "exports", {
    template: test,
    data: [cities, logs]
});