class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token

  def index
    users = User.all
    render json: users
  end

  def show
    if user_signed_in?
      render :json => {"signed_in" => true, "user" => current_user}
    else
      render :json => {"signed_in" => false}
    end
  end
end
