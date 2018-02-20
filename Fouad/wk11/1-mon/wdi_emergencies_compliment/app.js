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
this.backgroundColor = _.sample(this.colors = ["#00bfff", "#FFD700","#90EE90","#B0C4DE"])
	res.render('home', {} );
});

app.listen(PORT, function(){
	console.log('listening on port ' + PORT );
});

app.get('/:user', function(req, res, next){
 this.compliment = _.sample(this.compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"
	])
	this.person = (req.params.user)
	this.backgroundColor = _.sample(this.colors = ["#00bfff", "#FFD700","#90EE90","#B0C4DE"])
	res.render('Fred');
});