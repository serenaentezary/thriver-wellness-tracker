class Diagnosis < ApplicationRecord
  has_many :user_diagnoses
  has_many :users, through: :user_diagnoses
end
