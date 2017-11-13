class EntriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def completed_goals
    entry = Entry.find(params[:id])
    goals = entry.goals
    goals.each do |goal|
      if params[goal.id.to_s]
        goal.completed = true
      else
        goal.completed = false
      end
      goal.save
    end
  end
end
