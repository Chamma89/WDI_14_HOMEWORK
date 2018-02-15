// ------  PART 1	------

typeof 15
// Prediction: Integer
// Actual: number

typeof 5.5
// Prediction: number 
// Actual: number

typeof NaN
// Prediction: number
// Actual: number

typeof "hello"
// Prediction: string
// Actual: string

typeof true
// Prediction: boolean
// Actual: boolean

typeof (1 != 2)
// Prediction: boolean
// Actual: boolean


"hamburger" + "s"
// Prediction: "hamburgers"
// Actual: "hamburgers"

"hamburgers" - "s"
// Prediction: error
// Actual: NaN

"1" + "3"
// Prediction: "13"
// Actual: "13"

"1" - "3"
// Prediction: NaN
// Actual: -2
"johnny" + 5
// Prediction: "johnny5"
// Actual: "johnny5"

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "luftbaloons"
// Prediction: NaN
// Actual: NaN

// ------  PART 2	------

Arrays
Javascript provides us with a number of native methods that allow us to interact with arrays. Find methods that do each of the following and provide an example...

Add an element to the back of an array.
// .push()
Remove an element from the back of an array.
// .pop()
Add an element to the front of an array.
// .unshift()
Remove an element from the front of an array.
// .shift()
Concatenates all the elements in an array into a string.
// .join("")
Separates the characters of a string into an array. This one is a string method.
// .split("")


// ------  PART 3	------


What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.

var numbers = [2, 4, 6, 8]
numbers.pop() // [2, 4, 6]
numbers.push(10) // [2, 4, 6, 10]
numbers.unshift(3) // [3, 2, 4, 6, 10]


What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")
Your answer goes here. // "dot dash pause dash dot" => ["d", "o", "t", " ", "d", "a", "s, "h", " ", "p", "a", "u", "s", "e", " ", "d", "a", "s", "h", " ", "d", "o", "t"]


What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles) // [["Paul", "John", "George", "Pete"]]
bands.unshift(stones) // [["Brian", "Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George", "Pete"]]
bands[bands.length - 1].pop() // [["Brian", "Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George"]]
bands[0].shift() // [["Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George"]]
bands[1][3] = "Ringo" // [["Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George, "Ringo"]]

// ------  PART 4	------

Booleans & Comparison Operators
Here's an example truth table for the ! (not) operation. In it, we're listing the values of !a that correspond with a given value of a.

a	!a
true	false
false	true
Fill out the truth tables below for && (and), || (or) and one that uses multiple comparison operators. All you need to do is replace the ?'s with either true or false.

NOTE: Because of markdown formatting, || and && have been replaced with OR and AND respectively.

HINT: With the last one, it may be helpful to add additional columns to the table for each individual comparison.

a	b	a AND b
true	true	// true
true	false	// false
false	true	// false
false	false	// false
a	b	a OR b
true	true	// true
true	false	// true
false	true	// true
false	false	// false
a	b	a != b
3	3	// false
1	5	// true 
2	"2" // true
a	b	!a AND (a OR b)
true	true	// true
true	false	// false
false	true	// true
false	false	 // true


// ------  PART 5	------


Conditionals
You're a bouncer at a bar. Given an age variable, create a conditional that satisfies the following requirements...'

If a patron is older than 21, print out "Come on in!".
If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
If a patron is younger than 18, print out "You're too young to be in here!".
If a patron is older than 75, print out "Are you sure you want to be here?".
// Your answer goes here.

function age(patron){	
	if (patron > 75){
		console.log("Are you sure you want to be here?");
	}

	else if (patron >= 18 && patron < 21){
		console.log("Come on in (but no drinking)!");	
	}

	else if (patron >= 21){
		console.log("Come on in!");
	}

	else {
		console.log("You're too young to be in here!");	
	}
}
