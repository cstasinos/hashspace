var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 
var list = require("hsp/rt").template(["persons"], function(n){
  var _addElement,_deleteElement,_changeAll,_persons,_p,_p_isfirst,_p_islast;try {_addElement=addElement} catch(e) {_addElement=n.g('addElement')};try {_deleteElement=deleteElement} catch(e) {_deleteElement=n.g('deleteElement')};try {_changeAll=changeAll} catch(e) {_changeAll=n.g('changeAll')};try {_persons=persons} catch(e) {_persons=n.g('persons')};try {_p=p} catch(e) {_p=n.g('p')};try {_p_isfirst=p_isfirst} catch(e) {_p_isfirst=n.g('p_isfirst')};try {_p_islast=p_islast} catch(e) {_p_islast=n.g('p_islast')};
  var __s = {addElement : typeof addElement === 'undefined' ? n.g('addElement') : addElement, deleteElement : typeof deleteElement === 'undefined' ? n.g('deleteElement') : deleteElement, changeAll : typeof changeAll === 'undefined' ? n.g('changeAll') : changeAll, persons : typeof persons === 'undefined' ? n.g('persons') : persons, p : typeof p === 'undefined' ? n.g('p') : p, p_isfirst : typeof p_isfirst === 'undefined' ? n.g('p_isfirst') : p_isfirst, p_islast : typeof p_islast === 'undefined' ? n.g('p_islast') : p_islast};
  return [__s,n.$text(0,[" "]),n.elt("div",0,0,{"selectstart":"return false"},[n.elt("div",0,{"class":"msg"},0,[n.elt("a",{e1:[4,1,_addElement]},0,{"click":1},[n.$text(0,["Add element"])]),n.$text(0,[" - "]),n.elt("a",{e1:[4,1,_deleteElement]},0,{"click":1},[n.$text(0,["Delete element"])]),n.$text(0,[" - "]),n.elt("a",{e1:[4,1,_changeAll]},0,{"click":1},[n.$text(0,["Change all elements"])])]),n.elt("ol",0,0,0,[n.$foreach({e1:[9,"persons"]},"p_key","p",0,1,[n.elt("li",0,0,0,[n.$text({e1:[9,"p.firstName"],e2:[9,"p.lastName"]},["",1," ",2," "]),n.$if({e1:[9,"p_isfirst"]},1,[n.elt("span",0,{"class":"info"},0,[n.$text(0,["(first)"])])]),n.$if({e1:[9,"p_islast"]},1,[n.elt("span",0,{"class":"info"},0,[n.$text(0,["(last)"])])])])]),n.$text(0,[" "])])]),n.elt("div",0,{"class":"msg"},0,[n.$text({e1:[9,"persons.length"]},["Number of people in the list: ",1," "])])];
});


var persons=[
	{firstName:"Homer",lastName:"Simpsons"},
	{firstName:"Marge",lastName:"Simpsons"},
	{firstName:"Bart"},
	{firstName:"Lisa"},
	{firstName:"Maggy"}
]

var count=0;

function addElement() {
	count++;
	// add one element without removing any at position 1
    persons.splice(1,0,{firstName:"John",lastName:'Doe'+count});
}

function deleteElement() {
	// remove one element at position 0
    persons.shift(); // same as persons.splice(0,1);
}

function changeAll() {
	// replace all elements (from 0 to persons.length-1) with the array provided as last argument
	persons.splice2(0,persons.length,[
		{firstName:"Charlie", lastName:"Parker"},
		{firstName:"Sonny", lastName:"Stitt"},
		{firstName:"Cannonball", lastName:"Adderley"},
		{firstName:"Stefano", lastName:"Di Battista"},
		{firstName:"Kenny", lastName:"Garrett"}
	]);
}


// Needed by the playground application.
// Update it, but do not remove it!
$set(module, "exports", {
    template: list,
    data: [persons]
});