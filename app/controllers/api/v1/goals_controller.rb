class Api::V1::GoalsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token


  def index
    goals = Goal.all
    render json: goals
  end

  def edit

  end

  def update
    user = current_user
    goals = Goal.find(params[:id])
  end

  def destroy

  end
end
