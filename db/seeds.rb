# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
serena = User.create(
  username: "serena",
  email: "serena.entezary@gmail.com",
  password: "123456",
  first_name: "Serena",
  last_name: "Entezary",
  lgbtq: 1
)

entry = Entry.create(user: serena)

emotions = ["happiness", "sadness", "excitement", "anger", "anxiety", "peacefulness"]

emotions.each do |feeling|
  emotion = Emotion.create(feeling: feeling)
  UserEmotion.create(emotion: emotion, user: serena, entry: entry, rating: rand(101))
end


goals = ["Today I would like to go for a walk.",
  "Today I would like to breathe mindfully for 30 seconds.",
  "Today I would like to draw something.",
  "Today I would like to send some important emails.",
  "Today I would like to make sure that I clean my room."
]

goals.each do |goal_item|
  Goal.create(
    goal_item: goal_item,
    user: serena,
    entry: entry
  )
end

Journal.create(
  journal_entry: "Today was an interesting day. I got to pet somebody's dog, which was totally awesome! I can't wait to get a dog!!!",
  user: serena,
  entry: entry
)
