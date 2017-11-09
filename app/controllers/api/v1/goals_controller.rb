class Api::V1::GoalsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token


  def index
    goals = Goal.all
    render json: goals
  end

  def update

  end

  def destroy
  
  end
end
