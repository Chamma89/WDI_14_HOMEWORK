# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

	Pokemon.delete_all

	Pokemon.create(species: 'Pikachu', nickname: 'Peter', level: 50)
	Pokemon.create(species: 'Bulbasur', nickname: 'Bradley', level: 23 )
	Pokemon.create(species: 'Charizard', nickname: 'Charlie', level: 45)
