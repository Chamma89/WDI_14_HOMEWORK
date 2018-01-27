// train lines
var lines = {
	alamein: ["flinders", "richmond", "east richmond", "burnley", "hawthorn", "glenferrie"],
  glenWaverly: ["flagstaff", "melbourne central", "parliament", "richmond", "kooyong", "tooronga"],
  sandringham: ["southern cross", "richmond", "south yarra", "prahran", "windsor"]
};

// user input
var origin = prompt("Choose a starting station").toLowerCase();
var destination = prompt("select your destination").toLowerCase();

// Chosen origin array
var chosenLine = "";

var chosenLine2 = "";

var originIndex;

var destIndex;

var numberOfStops;

var final;


findingStationLine();

// if stations are on different lines 


	var firstLine = findingTwoStations(origin);

	var secondLine = findingTwoStations(destination);

if(!chosenLine.includes(origin) || !chosenLine.includes(destination)){

		
	if(firstLine.indexOf(origin) < firstLine.indexOf("Richmond") && secondLine.indexOf("Richmond") < secondLine.indexOf(destination)){
		route();
	}

	else if(firstLine.indexOf(origin) < firstLine.indexOf("Richmond") && secondLine.indexOf("Richmond") > secondLine.indexOf(destination)){
		secondLine.reverse();
		route();
	}


	else if(firstLine.indexOf(origin) < firstLine.indexOf("Richmond") && secondLine.indexOf(destination) === 0){
		secondHalf = [destination];
		var firstHalf = firstLine.slice(firstLine.indexOf(origin), firstLine.indexOf("Richmond") + 1);
	
		var secondHalf = [destination];

		final = firstHalf.concat(secondHalf);
	}

	else if(firstLine.indexOf(origin) > firstLine.indexOf("Richmond") || firstLine.indexOf("Richmond") < firstLine.indexOf("Richmond")){
		secondLine.reverse();
		firstLine.reverse();
		route();
	}

	else if(firstLine.indexOf(origin) > firstLine.indexOf("Richmond")){

		firstLine = firstLine.reverse();
		route();

	}

	console.log("Origin: " + origin);

	console.log("destination: " + destination);	

	console.log(final.length - 1 + " stops");

	console.log(final.join(" --> "));

}

// If it's origin and destination are on the same line

else {

		// Check for Reverse	
	if(chosenLine.indexOf(origin) > chosenLine.indexOf(destination)){
		
		chosenLine.reverse();
	}
		// calculating indexes
	originIndex = chosenLine.indexOf(origin);
	destIndex = chosenLine.indexOf(destination);

	// calculating number of stops

	numberOfStops = destIndex - originIndex;
	outputToUser();		
}



// check which line station is in

function findingStationLine (){

	if (lines.alamein.includes(origin)){
		chosenLine = lines.alamein;
	}

	else if (lines.glenWaverly.includes(origin)) {
		chosenLine = lines.glenWaverly;
	}

	else if (lines.sandringham.includes(origin)){
		chosenLine = lines.sandringham;
	}

	else  {
		console.log("station does not exist!");
		 
	}
	
	return chosenLine;

	
}


function outputToUser() {


	// creating final
	final = chosenLine.slice(originIndex, destIndex+1);		
	console.log("origin: " + origin);
	console.log("destination: " + destination);

	console.log(numberOfStops + " stops");
	console.log(final.join(" ---> "));

}


function findingTwoStations (x){

	if (lines.alamein.includes(x)){
		chosenLine2 = lines.alamein;
	}

	else if (lines.glenWaverly.includes(x)) {
		chosenLine2 = lines.glenWaverly;
	}

	else if (lines.sandringham.includes(x)){
		chosenLine2 = lines.sandringham;
	}

	else  {
		console.log("station does not exist!");
		 
	}
	
	return chosenLine2;
}


function route(){

	var firstHalf = firstLine.slice(firstLine.indexOf(origin), firstLine.indexOf("Richmond") + 1);
	
	var secondHalf = secondLine.slice(secondLine.indexOf("Richmond") + 1, secondLine.indexOf(destination)+ 1);

	final = firstHalf.concat(secondHalf);

	return final;
}


