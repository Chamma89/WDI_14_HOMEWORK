require 'pry'




loop do
	puts 'please choose from the following'

	puts 'addition, subtraction, multiplication, division, exponent, square root'

	calculator_function = gets.chomp

		puts 'select first number'

		a = gets.to_i

		puts 'select second number'

		b = gets.to_i

		if calculator_function == "addition"
			
			# add
			print "Your result is " 
			puts a + b
			

		elsif calculator_function == "subtraction"	

			# subtract
			print "Your result is "
			puts  a - b
				
		elsif calculator_function == "multiplication"
				
			# multiply
			print "Your result is "
			puts  a * b
				
		elsif calculator_function == "division"

			# division	
			print "Your result is "			
			puts  (a / b)
				
		elsif calculator_function == "exponent"
			puts a ** b

		elsif calculator_function == "square root"
			puts Math.sqrt(a + b)		
		end	

		# to ask question again. Loop

		puts 'Would you like to try again? yes or no'

		ask_again = gets.chomp


		if ask_again == "yes"

			calculator_function = true


		elsif ask_again == "no"
		
			puts "You quit!"

			break

		end

end