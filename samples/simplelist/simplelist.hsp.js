var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 
var people = require("hsp/rt").template(["d"], function(n){
  var _d,_toggleDetails,_p;try {_d=d} catch(e) {_d=n.g('d')};try {_toggleDetails=toggleDetails} catch(e) {_toggleDetails=n.g('toggleDetails')};try {_p=p} catch(e) {_p=n.g('p')};
  var __s = {d : typeof d === 'undefined' ? n.g('d') : d, toggleDetails : typeof toggleDetails === 'undefined' ? n.g('toggleDetails') : toggleDetails, p : typeof p === 'undefined' ? n.g('p') : p};
  return [__s,n.elt("div",0,{"class":"msg"},0,[n.$text(0,["Click on a person to see more details:"])]),n.elt("ul",0,0,0,[n.$foreach({e1:[9,"d.people"]},"p_key","p",0,1,[n.elt("li",{e1:[6,function(a0,a1) {return [((a0)? ''+"details":''),(((a1 === "Bart"))? ''+"special":'')].join(' ');},2,3],e2:[1,2,"p","showdetails"],e3:[1,2,"p","name"],e4:[4,1,_toggleDetails,1,5],e5:[1,1,"p"]},{"class":["",1]},{"click":4},[n.$text({e1:[1,2,"p","name"]},["",1," "]),n.$if({e1:[9,"p.showdetails"]},1,[n.$text({e1:[1,2,"p","age"]},[": ",1," years old"])])])]),n.$text(0,[" "])]),n.elt("div",0,{"class":"msg"},0,[n.$text({e1:[1,3,"d","people","length"]},["Number of people in the list: ",1," "])])];
});


function toggleDetails(person) {
    $set(person, "showdetails", !person.showdetails);
}

var d={
    people: [
        {name:"Homer", age:38},
        {name:"Marge", age:38},
        {name:"Bart", age:10},
        {name:"Lisa", age:8},
        {name:"Maggie", age:1}
    ]
}

// Needed by the playground application.
// Update it, but do not remove it!
$set(module, "exports", {
    template: people,
    data: [d]
});