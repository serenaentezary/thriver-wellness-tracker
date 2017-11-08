class Api::V1::GoalsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token


  def index
    goals = Goal.all
    render json: goals
  end

  def create
    binding.pry
    goals = JSON.parse(request.body.read)
    user = User.find(params[:user_id])
    entry_id = goals["entry_id"]
    goals.each do |item_number, goal|
      Goal.create(
        user: user,
        entry_id: entry_id,
        goal_item: goal[1]
      )
    end
  end

  def edit

  end

  def update

  end

  def destroy

  end
end
