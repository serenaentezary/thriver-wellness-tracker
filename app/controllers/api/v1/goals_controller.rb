class Api::V1::GoalsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token


  def index
    user = current_user
    goals = user.entries.order(created_at: :desc).map(&:goals)
    render json: goals
  end

  def destroy

  end
end
