class EntrySerializer < ActiveModel::Serializer
  has_many :journals
  has_many :user_emotions
  has_many :goals

  attributes :id, :user_id, :created_at, :updated_at
end
