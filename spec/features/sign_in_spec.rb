require 'spec_helper'
require 'rails_helper'

feature 'sign in' , %{
  As an unauthenticated user
  I want to sign in
  So that I can post items and review them
} do

  before :each do
    serena = User.create(username: "serena", email: "serena.entezary@gmail.com", first_name: "Serena", last_name: "Entezary", lgbtq: 1, password: "123456")
  end

  scenario 'specifying valid and required information' do
    visit root_path

    click_link 'Sign In'
    fill_in 'Email', with: 'serena.entezary@gmail.com'
    fill_in 'Password', with: '123456'
    click_button 'Log In'
    expect(page).to have_content("Signed in successfully.")
    expect(page).to have_content("Sign Out")
  end

  scenario 'user does not provide valid log in credentials' do
    visit root_path

    click_link 'Sign In'
    fill_in 'Email', with: 'serena.entezary@gmail.com'
    fill_in 'Password', with: '987654'
    click_button 'Log In'
    expect(page).to have_content("Invalid Email or password.")
    expect(page).to have_content("Log in")
  end

end
