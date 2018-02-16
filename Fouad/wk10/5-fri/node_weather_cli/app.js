// link = http://www.openweathermap.org/data/2.5/weather?q=Melbourne&appid=b6907d289e10d714a6e88b30761fae22

// to get temp = test.main.temp

var city = process.argv[2]

var request = require('request');
request('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',australia&appid=' + process.env.WEATHER_API, function (error, response, body) {


  console.log(JSON.parse(body).main.temp - 273.15); 
});