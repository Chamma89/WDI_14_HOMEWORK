// part 1

var userName = prompt();

var name = userName;

console.log("the current user's name is " + userName);


// part 2

var menuChoice = prompt("what would you like to eat?");

var choice = menuChoice;

if (choice === "steak" || choice === "pork chops") {
	console.log("vegans beware!");
}

else {
	console.log("this cuisine is vegan friendly")
}