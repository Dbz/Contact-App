# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Contact.where(
  first_name: "Daniel",
  last_name: "Burt",
  phone_number: "654-563-4302",
  image: "http://dbz.rocks/include/img/profile/me.jpg"
).first_or_create!
Contact.where(
  first_name: "Ned",
  last_name: "Stark",
  phone_number: "654-563-4102",
  image: "http://i.dailymail.co.uk/i/pix/2014/05/10/article-2625187-1DBA0F6200000578-443_306x423.jpg"
).first_or_create!
Contact.where(
  first_name: "Robb",
  last_name: "Stark",
  phone_number: "654-563-4372",
  image: "http://vignette3.wikia.nocookie.net/vampirediaries/images/e/e4/Robb_Stark.jpg/revision/latest?cb=20140411010003"
).first_or_create!
Contact.where(
  first_name: "Arya",
  last_name: "Stark",
  phone_number: "654-563-4304",
  image: "http://flavorwire.files.wordpress.com/2013/07/screen-shot-2013-07-01-at-5-27-11-pm.png"
).first_or_create!
Contact.where(
  first_name: "Little",
  last_name: "Finger",
  phone_number: "654-563-4309",
  image: "http://i.imgur.com/6JHgc18.gif"
).first_or_create!