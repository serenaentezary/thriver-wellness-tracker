class Api::V1::JournalsController < ApplicationController
  # protect_from_forgery unless: -> { request.format.json? }
  # protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  def index
    journals = Journal.all
    render json: journals
  end

  def create
    journal_entry = request.body.read
    user = User.find(params[:user_id])
    entry = Entry.create(params[:entry_id])
    Journal.create(
      journal_entry: journal_entry
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
