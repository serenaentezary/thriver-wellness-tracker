class GoalsController < ApplicationController
  def index
    @user = current_user
    @goal_entries = @user.entries.order(created_at: :desc).map { |entry| [entry, entry.goals.order(:id)] }
  end
end
