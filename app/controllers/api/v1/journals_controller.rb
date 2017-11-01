class Api::V1::JournalsController < ApplicationController
  def index
    journals = Journal.all
    render json: journals
  end

  def new
    journal = Journal.new

  end

  def create
    journal = JSON.parse(request.body.read)
    new_journal = Journal.create(
      entry: journal["entry"],
      current_user: journal["currentUser"]
    )
    render json: new_journal
  end

  def edit

  end

  def update

  end

  def destroy

  end
end
