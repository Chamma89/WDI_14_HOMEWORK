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


INSERT INTO dishes (name, image_url) VALUES ('pudding', 'http://img.taste.com.au/bz2rQPJ6/taste/2016/11/soft-centred-chocolate-pudding-16964-1.jpeg');



class Dish

	self.find(id)
		# works out the dish to return
		# connect to db
		# clean up the user input
		# execite
		# return even a fancy dish object
	end	

end

dish = Dish.find(6)
dish.name
dish.image_url