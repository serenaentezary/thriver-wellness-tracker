# README

Thriver is a wellness tracker that anyone can use to practice mindfulness and look inwards to find peace. By reflecting on the day, setting goals for oneself, and checking in on one's emotions, a user can improve their overall mental health and wellbeing. Users can also look back and see how they've progressed.

Author: Serena Entezary

Built with:

* Ruby 2.3.4 (originally 2.3.3, still a work in progress to make sure everything has been updated)

* Rails 5.1.2 - Backend Framework

* React 16.0.0 - Frontend

* React Router 4.2.0 - React Rendering

* Webpack - Set up utilizing this tutorial: https://gist.github.com/andrewprogers/65f0228c262fbe8e1efe767527540aec

* Devise - User Authentication

* React Google Charts - Line Graph

* PostgreSQL - SQL Database

* RSpec, Capybara - Backend Testing

* Enzyme, Karma, Jasmine - Frontend Testing

Configuration:

Please follow the above tutorial for setting up Webpack.  

Database Creation:

When creating the database, first run `rake db:create`, then `rake db:migrate`, and then `rake db:seed`

What will be crucial will be the migrations and seed file. Because of how the Emotions table has each emotion as an entry into the database so that each one has a unique ID, the graph and other functionalities won't work without the seed.

Notes: The testing is still in progress.
