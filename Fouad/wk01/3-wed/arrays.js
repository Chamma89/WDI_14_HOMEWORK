// 1. Create an array of the days of the week

var daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

// 2. My calendar says the first day is Sunday...

daysOfTheWeek.unshift(daysOfTheWeek.pop());

// 3. Create a new array of the days of the week:

var weekdays = daysOfTheWeek.slice(1,6)

var weekends = [].concat(daysOfTheWeek.slice(-1), daysOfTheWeek.slice(0,1));

console.log(weekends);

// 4.Remove either weekdays or the weekends

daysOfTheWeek.shift() + daysOfTheWeek.pop();

// 5 sort the remaining days alphabetically 

daysOfTheWeek.sort();




