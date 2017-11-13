class Entry < ApplicationRecord
  has_many :goals, dependent: :destroy
  has_many :journals, dependent: :destroy
  has_many :user_emotions, dependent: :destroy
  belongs_to :user

  def find_rating(feeling)
    emotion = Emotion.find_by_feeling(feeling)
    user_emotions.where(emotion: emotion).first.rating
  end
end
