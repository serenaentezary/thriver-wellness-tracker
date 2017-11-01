require 'rails_helper'

RSpec.describe Emotion, type: :model do
  it { should have_valid(:feeling).when('Happy', 'Sad', 'Excited', 'Angry', 'Anxious', 'Peaceful') }
  it { should_not have_valid(:feeling).when(nil, '', 'a', 1) }
end
