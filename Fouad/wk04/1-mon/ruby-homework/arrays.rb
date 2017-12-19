require 'pry'

#1

days_of_the_week = %w(Monday Tuesday Wednesday Thursday Friday Saturday Sunday) # %w splits the items and places them in an array 

#2

puts last_day = days_of_the_week.pop

puts (days_of_the_week)

puts updated_week = days_of_the_week.unshift(last_day)

#3

array_weekdays = []
new_array = []

puts array_weekdays = days_of_the_week.slice!(1, 5)

puts new_array.push(array_weekdays)

puts new_array.push(days_of_the_week)

#4

puts new_array.pop();

#5

puts new_array[0].sort!

