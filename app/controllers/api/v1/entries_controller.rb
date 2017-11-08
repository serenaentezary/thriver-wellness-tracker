class Api::V1::EntriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index

  end

  def create
    user = current_user
    entry = Entry.create(
      user: user
    )

    render json: {entry_id: entry.id}
  end
end
