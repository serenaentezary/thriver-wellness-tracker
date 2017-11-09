class Api::V1::JournalsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    user = current_user
    journals = user.journals
    render json: journals
  end

  def show

  end
end
