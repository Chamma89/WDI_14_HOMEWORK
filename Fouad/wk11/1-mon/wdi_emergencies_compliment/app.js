var express = require('express')

var _ = require('underscore')

var app = express()

var PORT = 9090

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(req, res, next){
this.compliment = _.sample(this.compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"
])
this.backgroundColor = _.sample(this.colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"])
	res.render('home');
});

app.listen(PORT, function(){
	console.log('listening on port ' + PORT );
});
