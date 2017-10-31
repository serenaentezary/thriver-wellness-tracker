require 'rails_helper'

RSpec.describe Emotion, type: :model do
  it { should have_valid(:emotion).when('Happy', 'Sad', 'Excited', 'Angry', 'Anxious', 'Peaceful') }
  it { should_not have_valid(:emotion).when(nil, '', 'a', 1) }
  end
end
