class Api::V1::EntriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index

  end

  def create
    entry_data = JSON.parse(request.body.read)
    user = current_user
    entry = Entry.create(
      user: user
    )

    journal_entry = entry_data["journalEntry"]
    Journal.create(
      journal_entry: journal_entry,
      user: user,
      # entry: entry
    )

    emotions_payload = entry_data["emotionsPayLoad"]
    emotions_payload.each do |emotion_name, rating|
      emotion = Emotion.find_by_feeling(emotion_name)
      UserEmotion.create(
        user: user,
        entry: entry,
        emotion: emotion,
        rating: rating
      )
    end

    goals = entry_data["goalsPayLoad"]
    goals.each do |item_number, goal|
      Goal.create(
        user: user,
        entry: entry,
        goal_item: goal
      )
    end
  end
end
