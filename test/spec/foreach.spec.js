
/*
 * Copyright 2012 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var hsp=require("hsp/rt");
var json=require("hsp/json");

function test1(label,names) {
	if (!test1.ng) {
		var Ng=require("hsp/rt").NodeGenerator, n=Ng.nodes;
		test1.ng=new Ng(
			n.$foreach(
				{e1:[1,0,"names"]},
				"name", // name of the loop variable that should be created
				0,  	// for type: 0=in / 1=of / 2=on
				1,		// index of the collection expression
				[
					n.elt(
						"span",
						0,
						{"class":"name"},
						0,
						[n.$text({e1:[0,0,"label"],e2:[1,0,"name_key"],e3:[0,0,"name"],e4:[0,"name","length"]},["",1," ",2,": ",3," (",4," chars)"])]
					),
					n.$if(
						{e1:[1,0,"name_islast"]},
						1,
						[n.$text({e1:[0,"names","length"]},["Number of items: ",1])]
					)
				]
			)
		);
	}
	return test1.ng.process(this,["label",label,"names",names]);
}
/***
# template test1(label,names)
	# foreach (name in names)
		<span class="name">
			{label} {=name_key}: {name} ({name.length} chars)
		</span>
		# if (name_islast)
			Number of items: {names.length}
		# /if
	# /foreach
# /template
***/



function test2(ds) {
	if (!test2.ng) {
		var Ng=require("hsp/rt").NodeGenerator, n=Ng.nodes;
		test2.ng=new Ng(
			n.$foreach(
				{e1:[1,"ds","persons"]},
				"person", // name of the loop variable that should be created
				0,  	// for type: 0=in / 1=of / 2=on
				1,		// index of the collection expression
				[
					n.$text({e1:[1,0,"person_key"],e2:[1,"person","firstName"],e3:[1,"person","lastName"],e4:[0,"name","length"]},["Person #",1,": ",2," ",3]),
					n.$if(
						{e1:[1,0,"person_isfirst"]},
						1,
						[n.$text(0,["(first)"])]
					),
					n.$if(
						{e1:[1,0,"person_islast"]},
						1,
						[n.$text(0,["(last)"])]
					)
				]
			)
		);
	}
	return test2.ng.process(this,["ds",ds]);
}
/***
# template test2(ds)
	# foreach (person in ds.persons)
		Person #{=person_key}: {=person.firstName} {=person.lastName}
		# if (person_isfirst)
			(first)
		# /if
		# if (person_islast)
			(last)
		# /if
	# /foreach
# /template
***/

function test3(things) {
	if(!test3.ng) {
		var Ng = require("hsp/rt").NodeGenerator,
			n = Ng.nodes,
			el = require("hsp/rt/eltnode");

		test3.ng = new Ng([
		n.$foreach(
			{e1: [1, 0, "things"]}, 
			"oneThing", 
			0, 
			1, 
			[
				n.$text(0, ["      "]), 
				n.$text({e1: [1, 0, "oneThing"]}, ["", 1]), 
				n.$text(0, ["\n    "])])
			]);
	}
	return test3.ng.process(this, ["things", things])
}
/***
# template test3(things) 
	# foreach (oneThing in things)
		{oneThing}
	# /foreach
# /template
***/

describe("ForEach Node", function () {
	var ELEMENT_NODE=1;
	var TEXT_NODE=3;

	function test1Count(arrayLength) {
		// return number of items produced by test 1
		return 1+arrayLength*5+1+1;
	}

	function test1SpanValue(n,idx) {
		// return the value of the text node in the span
		return n.node.childNodes[1+idx*5+1].childNodes[0].nodeValue
	}

	function test2Count(arrayLength) {
		// return number of items produced by test 2
		return 1+arrayLength*7+2+1;
	}

	function test2NodeValue(n,forIdx,nodeIdx) {
		// return the text value in the node associated to the parameters
		var firstIf=(forIdx==0)? 0 : 1;
		return n.node.childNodes[1+forIdx*7+firstIf+nodeIdx].nodeValue;
	}

	it("tests a simple loop on a literal array", function() {
		var ds=["Omer","Marge","Bart","Lisa","Maggie"]
		var n=test1("index",ds);

		expect(test1SpanValue(n,1)).toEqual("index 1: Marge (5 chars)");
		expect(test1SpanValue(n,3)).toEqual("index 3: Lisa (4 chars)");
		expect(n.node.childNodes[1+4*5+3].nodeValue).toEqual("Number of items: 5"); // last if content

		var nd=n.childNodes[0].childNodes[2].childNodes[0].childNodes[0]; // text node for Bart
		expect(nd.node.nodeValue).toEqual("index 2: Bart (4 chars)");
		
		n.$dispose();
		expect(nd.node).toEqual(null);
	});

	it("tests deleteItem", function() {
		var ds=["Omer","Marge","Bart","Lisa","Maggie"]
		var n=test1("index",ds);

		expect(n.node.childNodes.length).toEqual(1+5*5+1+1);
		expect(test1SpanValue(n,1)).toEqual("index 1: Marge (5 chars)");

		var idx=n.childNodes[0].deleteItem(1);
		hsp.refresh();
		expect(n.node.childNodes.length).toEqual(1+4*5+1+1);
		expect(idx).toEqual(1+5-1);
		expect(test1SpanValue(n,1)).toEqual("index 1: Bart (4 chars)");

		n.$dispose();
	});


	it("tests moveItem", function() {
		var ds=["Omer","Marge","Bart","Lisa","Maggie"]
		var n=test1("index",ds);

		n.childNodes[0].moveItem(3,1); // Lisa should replace Marge
		hsp.refresh();
		// new displayed array: ["Omer","Lisa","Marge","Bart","Maggie"]
		expect(n.node.childNodes.length).toEqual(test1Count(5));
		expect(test1SpanValue(n,1)).toEqual("index 1: Lisa (4 chars)");
		expect(test1SpanValue(n,2)).toEqual("index 2: Marge (5 chars)");
		expect(test1SpanValue(n,3)).toEqual("index 3: Bart (4 chars)");
		
		n.childNodes[0].moveItem(0,4); // Omer should replace Maggie
		hsp.refresh();
		// new displayed array: ["Lisa","Marge","Bart","Maggie","Omer"]
		expect(n.childNodes[0].childNodes.length).toEqual(5);
		expect(n.node.childNodes.length).toEqual(test1Count(5));
		expect(test1SpanValue(n,0)).toEqual("index 0: Lisa (4 chars)");
		expect(test1SpanValue(n,1)).toEqual("index 1: Marge (5 chars)");
		expect(test1SpanValue(n,3)).toEqual("index 3: Maggie (6 chars)");
		expect(test1SpanValue(n,4)).toEqual("index 4: Omer (4 chars)");

		n.$dispose();
	});

	it("tests item change on a literal array", function() {
		var ds=["Omer","Marge","Bart","Lisa","Maggie"];
		var n=test1("index",ds);

		expect(test1SpanValue(n,3)).toEqual("index 3: Lisa (4 chars)");
		
		// item change: ["Omer","Marge","Bart","LISA","Maggie"]
		json.set(ds,3,"LISA");
		hsp.refresh();
		expect(n.childNodes[0].childNodes.length).toEqual(5);
		expect(n.node.childNodes.length).toEqual(test1Count(5));
		expect(test1SpanValue(n,3)).toEqual("index 3: LISA (4 chars)")

		n.$dispose();
	});

	it("tests item move on a literal array", function() {
		var ds=["Omer","Marge","Bart","LISA","Maggie"];
		var n=test1("index",ds);

		// item move: ["Omer","Maggie","Marge","LISA","BART"]
		json.splice(ds,1,0,"Maggie");
		json.splice(ds,3,1);
		json.splice(ds,4,1,"BART");
		hsp.refresh();

		expect(n.childNodes[0].childNodes.length).toEqual(5);
		expect(n.node.childNodes.length).toEqual(test1Count(5));
		expect(test1SpanValue(n,0)).toEqual("index 0: Omer (4 chars)");
		expect(test1SpanValue(n,1)).toEqual("index 1: Maggie (6 chars)");
		expect(test1SpanValue(n,2)).toEqual("index 2: Marge (5 chars)");
		expect(test1SpanValue(n,3)).toEqual("index 3: LISA (4 chars)");
		expect(test1SpanValue(n,4)).toEqual("index 4: BART (4 chars)");

		n.$dispose();
	});

	it("tests item delete on a literal array", function() {
		var ds=["Omer","Maggie","Marge","LISA","BART"];
		var n=test1("index",ds);

		// delete item: ["Omer","Marge"]
		json.splice(ds,3,2);
		json.splice(ds,1,1);
		hsp.refresh();
		expect(n.childNodes[0].childNodes.length).toEqual(2);
		expect(n.node.childNodes.length).toEqual(test1Count(2));
		expect(test1SpanValue(n,0)).toEqual("index 0: Omer (4 chars)");
		expect(test1SpanValue(n,1)).toEqual("index 1: Marge (5 chars)");

		n.$dispose();
	});

	it("tests item insert on a literal array", function() {
		var ds=["Omer","Marge"];
		var n=test1("index",ds);
		
		// insert item: ["Omer", "Bart", "Lisa", "Marge"]
		json.splice(ds,1,0,"Bart", "Lisa");
		hsp.refresh();
		expect(n.childNodes[0].childNodes.length).toEqual(4);
		expect(n.node.childNodes.length).toEqual(test1Count(4));
		expect(test1SpanValue(n,0)).toEqual("index 0: Omer (4 chars)");
		expect(test1SpanValue(n,1)).toEqual("index 1: Bart (4 chars)");
		expect(test1SpanValue(n,2)).toEqual("index 2: Lisa (4 chars)");
		expect(test1SpanValue(n,3)).toEqual("index 3: Marge (5 chars)");

		n.$dispose();
	});

	it("tests append on a literal array", function() {
		var ds=["Omer","Marge"];
		var n=test1("index",ds);
		
		// insert item: ["Omer", "Marge", "Bart"]
		json.push(ds,"Bart");
		hsp.refresh();
		expect(n.childNodes[0].childNodes.length).toEqual(3);
		expect(n.node.childNodes.length).toEqual(test1Count(3));
		expect(test1SpanValue(n,0)).toEqual("index 0: Omer (4 chars)");
		expect(test1SpanValue(n,1)).toEqual("index 1: Marge (5 chars)");
		expect(test1SpanValue(n,2)).toEqual("index 2: Bart (4 chars)");

		n.$dispose();
	});

	it("tests shift on a literal array", function() {
		var ds=["Omer", "Bart", "Lisa", "Marge", "Maggie"];
		var n=test1("index",ds);
		
		// insert item: ["Omer", "Marge", "Bart"]
		json.shift(ds);
		hsp.refresh();
		expect(n.childNodes[0].childNodes.length).toEqual(4);
		expect(n.node.childNodes.length).toEqual(test1Count(4));
		expect(test1SpanValue(n,0)).toEqual("index 0: Bart (4 chars)");
		expect(test1SpanValue(n,1)).toEqual("index 1: Lisa (4 chars)");
		expect(test1SpanValue(n,2)).toEqual("index 2: Marge (5 chars)");
		expect(test1SpanValue(n,3)).toEqual("index 3: Maggie (6 chars)");

		n.$dispose();
	});

	it("tests literal array with null items", function() {
		var ds=["Omer", null, "Marge", null];
		var n=test1("index",ds);

		expect(n.childNodes[0].childNodes.length).toEqual(2);
		expect(n.node.childNodes.length).toEqual(test1Count(2)-1);
		expect(test1SpanValue(n,0)).toEqual("index 0: Omer (4 chars)");
		expect(test1SpanValue(n,1)).toEqual("index 1: Marge (5 chars)");
		n.$dispose();
	});

	it("tests literal array update with null items", function() {
		var ds=["Omer", "Marge", "Bart", "Lisa"];
		var n=test1("index",ds);
		
		json.set(ds,2,null); // ["Omer", "Marge", null, "Lisa"]
		hsp.refresh();

		expect(n.childNodes[0].childNodes.length).toEqual(3);
		expect(n.node.childNodes.length).toEqual(test1Count(3));
		expect(test1SpanValue(n,0)).toEqual("index 0: Omer (4 chars)");
		expect(test1SpanValue(n,1)).toEqual("index 1: Marge (5 chars)");
		expect(test1SpanValue(n,2)).toEqual("index 2: Lisa (4 chars)");
		n.$dispose();
	});

	it("tests a simple loop on an object array", function() {
		var ds={persons:[
			{firstName:"Omer",lastName:"Simpson"},
			{firstName:"Marge",lastName:"Simpson"},
			{firstName:"Bart",lastName:"Simpson"}
		]};
		var n=test2(ds);

		expect(n.childNodes[0].childNodes.length).toEqual(3);
		expect(n.node.childNodes.length).toEqual(test2Count(3));
		expect(test2NodeValue(n,0,1)).toEqual("Person #0: Omer Simpson");
		expect(test2NodeValue(n,0,3)).toEqual("(first)");
		expect(test2NodeValue(n,1,1)).toEqual("Person #1: Marge Simpson");
		expect(test2NodeValue(n,2,1)).toEqual("Person #2: Bart Simpson");
		
		// test dynamic update
		json.set(ds.persons[1],"lastName","SIMPSON");
		hsp.refresh();

		expect(n.node.childNodes.length).toEqual(test2Count(3));
		expect(test2NodeValue(n,0,1)).toEqual("Person #0: Omer Simpson");
		expect(test2NodeValue(n,1,1)).toEqual("Person #1: Marge SIMPSON");
		expect(test2NodeValue(n,2,1)).toEqual("Person #2: Bart Simpson");

		n.$dispose();
	});

	it("tests modifications on an object array", function() {
		var ds={persons:[
			{firstName:"Omer",lastName:"Simpson"},
			{firstName:"Marge",lastName:"Simpson"},
			{firstName:"Bart",lastName:"Simpson"}
		]};
		var n=test2(ds);

		// test dynamic update
		json.splice(ds.persons,1,1); // remove Marge
		json.push(ds.persons,{firstName:"Lisa",lastName:"SIMPSON"},{firstName:"Maggie",lastName:"S"});
		hsp.refresh();

		expect(n.node.childNodes.length).toEqual(test2Count(4));
		expect(test2NodeValue(n,0,1)).toEqual("Person #0: Omer Simpson");
		expect(test2NodeValue(n,0,3)).toEqual("(first)");
		expect(test2NodeValue(n,1,1)).toEqual("Person #1: Bart Simpson");
		expect(test2NodeValue(n,2,1)).toEqual("Person #2: Lisa SIMPSON");
		expect(test2NodeValue(n,3,1)).toEqual("Person #3: Maggie S");
		expect(test2NodeValue(n,3,5)).toEqual("(last)");

		n.$dispose();
	});

	it("tests collection change on an object array", function() {
		var ds={persons:[
			{firstName:"Omer",lastName:"Simpson"},
			{firstName:"Marge",lastName:"Simpson"},
			{firstName:"Bart",lastName:"Simpson"}
		]};
		var n=test2(ds);

		var ds2=[
			{firstName:"Fred",lastName:"Astaire"},
			{firstName:"Ginger",lastName:"Rogers"}
		]

		json.set(ds,"persons",ds2);
		hsp.refresh();
		expect(n.node.childNodes.length).toEqual(test2Count(2));
		expect(test2NodeValue(n,0,1)).toEqual("Person #0: Fred Astaire");
		expect(test2NodeValue(n,0,3)).toEqual("(first)");
		expect(test2NodeValue(n,1,1)).toEqual("Person #1: Ginger Rogers");
		expect(test2NodeValue(n,1,5)).toEqual("(last)");

		n.$dispose();
	});
	
	it("tests simple push in an array", function() {
		var ds=["oranges"];
		var n=test3(ds);

		expect(n.node.childNodes.length).toEqual(2+5);

		json.push(ds,"mangos");
		hsp.refresh();

		expect(n.node.childNodes.length).toEqual(2+5*2);
		expect(n.node.childNodes[2+5+1].nodeValue).toEqual("mangos");
	});

});
