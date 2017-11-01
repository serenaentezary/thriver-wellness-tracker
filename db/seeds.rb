# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

emotions = Emotion.create([{ feeling: "happiness" }, { feeling: "sadness" }, { feeling: "excitement" }, { feeling: "anger" }, { feeling: "anxiety" }, { feeling: "peacefulness" }])

four_user_emotions = UserEmotion.create([{ user_id: 1, emotion_id: 1, rating: 55 }, { user_id: 1, emotion_id: 2, rating: 35 }, { user_id: 1, emotion_id: 3, rating: 65 }, { user_id: 1, emotion_id: 4, rating: 20 }])
