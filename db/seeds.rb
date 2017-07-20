# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(username: 'GuestAccount', password: 'password')

Photo.destroy_all

photo1 = Photo.create(title: 'Nature', description: 'Green Trees', image_url: 'http://res.cloudinary.com/iso100app/image/upload/v1500572914/nature-river-wood-tree-82277_je84n8.jpg', user_id: user1.id)
