// train lines
var lines = {
	alamein: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
  glenWaverly: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
  sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
};

// user input
var origin = prompt("Choose a starting station");
var destination = prompt("select your destination");

// Chosen origin array
var ChosenLine = "";


// check if which line station is in

function findingStationLine (){

	if (lines.alamein.includes(origin)){
		ChosenLine = lines.alamein
	}

	else if (lines.glenWaverly.includes(origin)) {
		ChosenLine = lines.glenWaverly
	}

	else if (lines.sandringham.includes(origin)){
		ChosenLine = lines.sandringham
	}

	else  {
		console.log("station does not exist!")
		 
	};
	
	return ChosenLine	
}

findingStationLine();

	// calculating indexes
	var originIndex = ChosenLine.indexOf(origin);
	var destIndex = ChosenLine.indexOf(destination);

	// calculating number of stops

	var numberOfStops = destIndex - originIndex;


	// creating journey
	var journey = ChosenLine.slice(originIndex, destIndex+1)

	var outputToUser = function() {
		console.log("origin: " + origin);
		console.log("destination: " + destination);

		console.log(numberOfStops + " stops");
		console.log(journey.join(" ---> "))
}

outputToUser()

// .includes() method. 

/*use Object.keys(lines) to find properties in lines object*/

// or For In

// below is another solution
/*for ( var i = chosenOrigin; i <= chosenDestination; i++){
	if (i === chosenDestination){
		route += glenWaverly[i]
	}	

	else {

		route += (glenWaverly[i] + " -->");
		
	}

}*/
/*console.log(route);*/





















