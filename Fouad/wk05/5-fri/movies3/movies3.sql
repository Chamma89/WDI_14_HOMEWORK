CREATE DATABASE
	goodfoodhunting;

CREATE TABLE movies (
	id Serial PRIMARY KEY,
	name VARCHAR(300),
	image_url VARCHAR(400),
	duration VARCHAR(100),
	year VARCHAR(100),
	poster VARCHAR(100),
	genre VARCHAR(100),
	imdb VARCHAR(100)
);


