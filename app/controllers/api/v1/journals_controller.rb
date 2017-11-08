class Api::V1::JournalsController < ApplicationController
  # protect_from_forgery unless: -> { request.format.json? }
  # protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  def index
    journals = Journal.all
    render json: journals
  end

  def create
    journal_data = JSON.parse(request.body.read)
    journal_entry = journal_data["journalEntry"]
    user = User.find(params[:user_id])
    entry_id = journal_data["entry_id"]
    Journal.create(
      journal_entry: journal_entry,
      user: user,
      entry_id: entry_id
    )
  end

  def edit

  end

  def update

  end

  def destroy

  end
end
