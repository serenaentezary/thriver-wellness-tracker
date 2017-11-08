class Entry < ApplicationRecord
  has_many :goals
  has_many :journals
  has_many :user_emotions
  belongs_to :user

  def find_rating(feeling)
    user_emotions.where(emotion: Emotion.find_by_feeling(feeling)).first.rating
  end
end
