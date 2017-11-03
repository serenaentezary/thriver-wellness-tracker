class UserDiagnosis < ApplicationRecord
  belongs_to :user
  belongs_to :diagnosis
end
