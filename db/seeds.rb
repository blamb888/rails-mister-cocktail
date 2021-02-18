# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
json = open(url).read
objs = JSON.parse(json)

puts "cleaning up db"
Ingredient.destroy_all
puts "db is clean"

objs["drinks"].each do |key|
  ingredient = Ingredient.create!(
    name: "#{key["strIngredient1"]}"
    )
  puts "#{ingredient.name} created!"
end
