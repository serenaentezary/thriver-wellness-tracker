require 'rails_helper'

RSpec.describe Goal, type: :model do
  it { should have_valid(:goal).when('Make my bed', 'Breathe mindfully for 10 seconds') }
  it { should_not have_valid(:goal).when(nil, 1) }
  end
end
