class GoalsController < ApplicationController
  def index
    @user = current_user
    @goals = @user.goals
  end
end
