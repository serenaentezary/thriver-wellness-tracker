class Api::V1::JournalsController < ApplicationController
  # protect_from_forgery unless: -> { request.format.json? }
  # protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  def index
    journals = Journal.all
    render json: journals
  end

  def create
    
  end

  def edit

  end

  def update

  end

  def destroy

  end
end
