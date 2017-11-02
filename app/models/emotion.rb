class Emotion < ApplicationRecord
  has_many :user_emotions
  has_many :users, through: :user_emotions

  EMOTIONS = [
    "happiness",
    "sadness",
    "excitement",
    "anger",
    "anxiety",
    "peacefulness"
  ]

  validates :feeling, inclusion: { in: EMOTIONS }
end
