class UserEmotion < ApplicationRecord
  belongs_to :user
  belongs_to :emotion
  validates :rating, numericality: true
end
