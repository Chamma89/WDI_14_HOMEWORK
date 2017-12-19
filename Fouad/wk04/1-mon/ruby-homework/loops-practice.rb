require 'pry'

random_number = rand(50)

puts random_number

myGuess = gets.to_i

while myGuess != random_number do 

	if myGuess < random_number
		puts  " is too low"
		myGuess = gets.to_i # you can use break to just break out of the loop

	elsif myGuess > random_number
		puts  " is too high"
		myGuess = gets.to_i	
		
	end
	
end

	puts "well done"


