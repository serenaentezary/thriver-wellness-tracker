require 'spec_helper'
require 'rails_helper'

feature 'sign up' , %{
  As a prospective user
  I want to create an account
  So that I can start tracking my mental health
} do
  # ACCEPTANCE CRITERIA
  # * I must specify a valid email address
  # * I must specify a password, and confirm that password
  # * If I do not perform the above, I get an error message
  # * If I specify valid information, I register my account and can see the homepage

  scenario 'specifying valid and required information' do
    visit root_path
    click_link 'Sign Up'
    fill_in 'Username', with: 'username'
    fill_in 'First Name', with: 'John'
    fill_in 'Last Name', with: 'Smith'
    fill_in 'Do you identify as someone who is in the LGBTQIA+ community?', with: true
    fill_in 'Email', with: 'johnsmith@person.com'
    fill_in 'Password', with: 'password'
    fill_in 'Confirm Password', with: 'password'

    click_button 'Sign Up'
    expect(page).to have_content("Welcome to Thriver!")
    expect(page).to have_content("Sign Out")
  end

  scenario 'required information is not supplied' do
    visit root_path
    click_link 'Sign Up'
    fill_in 'Username', with: ''
    fill_in 'First Name', with: ''
    fill_in 'Last Name', with: ''
    fill_in "Do you identify as someone in the LGBTQIA+ community? Check the box if true.", with: ''
    fill_in 'Email', with: ''
    fill_in 'Password', with: ''
    fill_in 'Confirm Password', with: ''
    click_button 'Sign Up'

    expect(page).to have_content("Email can't be blank")
    expect(page).to have_content("First Name can't be blank")
    expect(page).to have_content("Last Name can't be blank")
    expect(page).to have_content("Username can't be blank")
    expect(page).to have_content("Password can't be blank")
    expect(page).to_not have_content("Welcome to Thriver!")

  end


  scenario 'password does not match password confirmation' do
    visit root_path
    click_link 'Sign Up'
    fill_in 'Username', with: 'username'
    fill_in 'First Name', with: 'John'
    fill_in 'Last Name', with: 'Smith'
    fill_in 'Email', with: 'johnsmith@person.com'
    fill_in 'Password', with: 'password'
    fill_in 'Confirm Password', with: 'password5'
    click_button 'Sign Up'

    expect(page).to have_content("Password confirmation doesn't match password")
  end
end
