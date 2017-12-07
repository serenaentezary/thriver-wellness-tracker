emotions = ["happiness", "sadness", "excitement", "anger", "anxiety", "peacefulness"]

emotions.each do |feeling|
  emotion = Emotion.create(feeling: feeling)
end
