require 'rails_helper'

RSpec.describe Journal, type: :model do
  it { should have_valid(:emotion).when('Today, I was feeling really low but I did some stuff to make myself feel better.', 'Was feeling happy today! Ate some good food, looked nice today.') }
  it { should_not have_valid(:emotion).when(nil, 1) }
  end
end
