
/*var alamein = ["flinders street", "richmond", "east richmond", "burnley", "hawthorn", "glenferrie"];
*/var glenWaverly = ["flagstaff",  "melbourne central", "parliament", "richmond", "kooyong", "tooronga"];
/*var sandringham = ["southern cross", "richmond", "south yarra", "prahran", "windsor"];*/

// // All 3 train lines intersect at RICHMOND.
// // work out DISPLAY and JOURNEY when given ORIGIN and DESTINIATION.
// // 

var origin = prompt("Hello! What is your current location?");

var destination = prompt("Where would you like to go?");

var selectedOrigin = glenWaverly.indexOf(origin);

var selectedDestination = glenWaverly.indexOf(destination);

for ( var i = glenWaverly[selectedOrigin]; i < glenWaverly[selectedDestination].length; i++){
	console.log(i);
}




