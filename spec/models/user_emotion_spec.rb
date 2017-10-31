require 'rails_helper'

RSpec.describe UserEmotion, type: :model do
  it { should have_valid(:user_emotion).when(10, 100, 0, 50) }
  it { should_not have_valid(:user_emotion).when(nil, 'a') }
  end
end
