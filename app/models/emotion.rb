class Emotion < ApplicationRecord
  has_many :user_emotions
  has_many :users, through: :user_emotions
end
