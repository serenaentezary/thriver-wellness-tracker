require 'rails_helper'

RSpec.describe Diagnosis, type: :model do
  it { should have_valid(:type).when('Bipolar I', 'Depression') }
  it { should_not have_valid(:type).when(nil, 1) }
  end
end
