require 'rails_helper'

RSpec.describe Emotion, type: :model do
  it { should have_valid(:feeling).when('happiness', 'sadness', 'excitement', 'anger', 'anxiety', 'peacefulness') }
  it { should_not have_valid(:feeling).when(nil, '', 'a', 1) }
  end
end
