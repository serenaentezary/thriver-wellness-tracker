class GoalsController < ApplicationController
  def index
    @user = current_user
    @goals = @user.goals.order(created_at: :desc)
  end
end
