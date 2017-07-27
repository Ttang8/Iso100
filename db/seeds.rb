# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Photo.destroy_all
Comment.destroy_all
Tag.destroy_all

user1 = User.create(username: 'GuestAccount', password: 'password')


photo1 = Photo.create(title: 'Lens', description: 'Focus', image_url: 'http://res.cloudinary.com/iso100app/image/upload/v1501110884/background_il73yx.jpg', user_id: user1.id)
