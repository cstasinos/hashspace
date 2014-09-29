var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 

var klass=require("hsp/klass");

function changeCase(s,arg) {
    if (arg==="upper") {
        return (""+s).toUpperCase();
    } else if (arg==="lower") {
        return (""+s).toLowerCase();
    }
    return s;
}

var Sorter=klass({
    $constructor:function(property) {
        $set(this, "ascending", true);
        $set(this, "pp", property);
    },
    apply:function(array) {
        // copy array
        var arr=[], pp=this.pp, ascending=this.ascending;
        for (var i=0,sz=array.length;sz>i;i++) {
            $set(arr, i, array[i]);
        }
        // sort
        arr.sort(function (a,b) {
            if (a[pp]>b[pp]) {
                return ascending? 1 : -1;
            } else if (a[pp]==b[pp]) {
                return 0;
            } else {
                return ascending? -1 : 1;
            }
        });
        return arr;
    },
    toggleOrder:function() {
        $set(this, "ascending", !this.ascending);
    }
})


var sample = require("hsp/rt").template(["d"], function(n){
  var _d,_changeCase,_Sorter,_sortByName,_p;try {_d=d} catch(e) {_d=n.g('d')};try {_changeCase=changeCase} catch(e) {_changeCase=n.g('changeCase')};try {_Sorter=Sorter} catch(e) {_Sorter=n.g('Sorter')};try {_sortByName=sortByName} catch(e) {_sortByName=n.g('sortByName')};try {_p=p} catch(e) {_p=n.g('p')};
  var __s = {d : typeof d === 'undefined' ? n.g('d') : d, changeCase : typeof changeCase === 'undefined' ? n.g('changeCase') : changeCase, Sorter : typeof Sorter === 'undefined' ? n.g('Sorter') : Sorter, sortByName : typeof sortByName === 'undefined' ? n.g('sortByName') : sortByName, p : typeof p === 'undefined' ? n.g('p') : p};
  return [__s,n.elt("div",0,{"class":"section2"},0,[n.$text(0,["Message in capital letters: "]),n.elt("span",0,{"class":"textvalue"},0,[n.$text({e1:[9,"d.msg|changeCase:\"upper\""]},["",1])]),n.elt("br",0,0,0),n.$text(0,["Message in lower case: "]),n.elt("span",0,{"class":"textvalue"},0,[n.$text({e1:[9,"d.msg|changeCase:\"lower\""]},["",1])])]),n.elt("div",0,{"class":"section2"},0,[n.let({e1:[9,"sortByName=new Sorter(\"firstName\")"]}),n.$text(0,["Sorted list: "]),n.elt("ol",0,0,0,[n.$foreach({e1:[9,"d.persons|sortByName"]},"p_key","p",0,1,[n.elt("li",0,0,0,[n.$text({e1:[9,"p.firstName"],e2:[9,"p.lastName"]},["",1," ",2," "])])]),n.$text(0,[" "])]),n.elt("a",{e1:[9,"sortByName.toggleOrder()"]},0,{"click":1},[n.$text({e1:[9,"sortByName.ascending? \"ascending\" : \"descending\""]},["Toggle sort order (current: ",1,") "])])],1)];
});


var data={
    msg:"Hello Simpsons!",
    persons:[
        {firstName:"Homer",lastName:"Simpsons"},
        {firstName:"Marge",lastName:"Simpsons"},
        {firstName:"Bart"},
        {firstName:"Lisa"},
        {firstName:"Maggy"}
    ]
};


// Needed by the playground application.
// Update it, but do not remove it!
$set(module, "exports", {
    template: sample,
    data: [data]
});