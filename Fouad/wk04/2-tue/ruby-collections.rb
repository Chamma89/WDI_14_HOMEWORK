require 'pry'

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

heroes = ""



# Access the second value in planeteers.

puts planeteers[1]

# Add "Heart" to the end of planeteers.

puts planeteers.push("Heart")

# Remove "Captain Planet" from the array (without using a method)

puts planeteers -= ["Captain Planet"]

# Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.

puts heroes = planeteers.concat rangers

# Alphabetize the contents of heroes using a method.

puts heroes.sort

# Randomize the contents of heroes using a method.

puts heroes.shuffle

# BONUS

# Select a random element from heroes using a method.

puts heroes.sample

# Select all elements in heroes that begin with "B" using a method.
