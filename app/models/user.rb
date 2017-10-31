class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :user_emotions
  has_many :emotions, through: :user_emotions
  validates :username, presence: true, length: { in: 6..20 }
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :lgbtq, presence: true, inclusion: { in: [ true, false ] }
end
