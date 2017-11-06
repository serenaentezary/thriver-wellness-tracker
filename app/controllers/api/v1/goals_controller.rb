class Api::V1::GoalsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    goals = Goal.all
    render json: goals
  end

  def create
    goals = JSON.parse(request.body.read)
    user = User.find(params[:user_id])
    Goal.create(
      user: user,
      goal_item: goals
    )
  end

  def edit
    binding.pry
  end

  def update

  end

  def destroy

  end
end
