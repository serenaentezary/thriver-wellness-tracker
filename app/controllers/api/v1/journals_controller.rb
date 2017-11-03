class Api::V1::JournalsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    journals = Journal.all
    render json: journals
  end

  def new

  end

  def create
    entry = request.body.read
    user = User.find(params[:user_id])
    Journal.create(
      user: user,
      entry: entry
    )
  end

  def edit

  end

  def update

  end

  def destroy

  end
end
