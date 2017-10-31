require 'spec_helper'
require 'rails_helper'

feature 'sign out' , %{
  As an authenticated user
  I want to sign out
  So that no one else can post items or reviews on my behalf
} do

  before :each do
    serena = User.create(username: "serena", email: "skibuddy@aol.com", password: "isuredoloveskiing")
    login_as(skibuddy, :scope => :user)
  end

  scenario 'logged-in user signs out' do
    visit root_path
    click_link 'Sign Out'

    expect(page).to have_content("Signed out successfully.")
    expect(page).to have_content("Sign In")
    expect(page.html).to have_content("This is the main site")
  end
end
