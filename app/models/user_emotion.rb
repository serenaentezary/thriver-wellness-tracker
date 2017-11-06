class UserEmotion < ApplicationRecord
  belongs_to :user
  belongs_to :emotion
  belongs_to :entry
  validates :rating, numericality: true

  def feeling
    emotion.feeling
  end
end
