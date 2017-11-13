class JournalsController < ApplicationController
  def index
    @user = current_user
    @journal_entries = @user.entries.order(created_at: :desc).map(&:journals)
  end
end
