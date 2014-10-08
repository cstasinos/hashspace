var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 
var selectSample = require("hsp/rt").template(["data"], function(n){
  var _data,_item,_getSelectedText,_addOption,_selectOption,_removeOption;try {_data=data} catch(e) {_data=n.g('data')};try {_item=item} catch(e) {_item=n.g('item')};try {_getSelectedText=getSelectedText} catch(e) {_getSelectedText=n.g('getSelectedText')};try {_addOption=addOption} catch(e) {_addOption=n.g('addOption')};try {_selectOption=selectOption} catch(e) {_selectOption=n.g('selectOption')};try {_removeOption=removeOption} catch(e) {_removeOption=n.g('removeOption')};
  var __s = {data : typeof data === 'undefined' ? n.g('data') : data, item : typeof item === 'undefined' ? n.g('item') : item, getSelectedText : typeof getSelectedText === 'undefined' ? n.g('getSelectedText') : getSelectedText, addOption : typeof addOption === 'undefined' ? n.g('addOption') : addOption, selectOption : typeof selectOption === 'undefined' ? n.g('selectOption') : selectOption, removeOption : typeof removeOption === 'undefined' ? n.g('removeOption') : removeOption};
  return [__s,n.elt("div",0,{"class":"info2"},0,[n.$text(0,["The following select and its options are synchronized:"])]),n.elt("div",0,{"class":"section"},0,[n.$text(0,["Select with bound value: "]),n.elt("select",{e1:[9,"data.selectedValue"]},{"model":["",1],"style":"width:100px"},0,[n.$foreach({e1:[9,"data.options"]},"item_key","item",0,1,[n.elt("option",{e1:[9,"item.value"]},{"value":["",1]},0,[n.$text({e1:[9,"item.label"]},["",1])])]),n.$text(0,[" "])])]),n.elt("div",0,{"class":"section"},0,[n.$text(0,["The selected value is "]),n.elt("span",0,{"class":"info"},0,[n.$text({e1:[9,"data.selectedValue"]},["",1])]),n.$text(0,[", the selected text is "]),n.elt("span",0,{"class":"info"},0,[n.$text({e1:[9,"getSelectedText(data.selectedValue)"]},["",1])])]),n.elt("div",0,{"class":"info2"},0,[n.$text(0,["You can add or remove options, and select one by changing the data model value:"])]),n.elt("div",0,{"class":"section"},0,[n.elt("button",{e1:[9,"addOption('four', 'Four')"]},0,{"click":1},[n.$text(0,["Add option 'four'"])]),n.elt("button",{e1:[9,"selectOption('four')"]},0,{"click":1},[n.$text(0,["Select option 'four'"])]),n.elt("button",{e1:[9,"removeOption('four')"]},0,{"click":1},[n.$text(0,["Remove option 'four'"])])])];
});


var d={
    selectedValue:"two",
    options : [
        {
            value: "one",
            label: "One"
        },
        {
            value: "two",
            label: "Two"
        },
        {
            value: "three",
            label: "Three"
        }
    ]
};

// Needed by the playground application.
// Update it, but do not remove it!
$set(module, "exports", {
    template: selectSample,
    data: [d]
});

var getSelectedText = function(value) {
    var options = d.options;
    for(var i = 0; i < options.length; i++) {
        var option = options[i];
        if (option.value == value) {
            return option.label;
        }
    }
    return "no selection";
}
var addOption = function(value, label) {
    var options = d.options;
    for(var i = 0; i < options.length; i++) {
        var option = options[i];
        if (option.value == value) {
            return;
        }
    }
    options.push({value: value, label: label});
};

var selectOption = function(value) {
    $set(d, "selectedValue", value);
};

var removeOption = function(value) {
    var options = d.options;
    for(var i = 0; i < options.length; i++) {
        var option = options[i];
        if (option.value == value) {
            options.splice(i, 1);
            return;
        }
    }
};