class Entry < ApplicationRecord
  has_many :goals
  has_many :journals
  has_many :user_emotions

  def rating(feeling)
    user_emotions.where(emotion: Emotion.find_by_feeling(feeling)).first.rating
  end
end
