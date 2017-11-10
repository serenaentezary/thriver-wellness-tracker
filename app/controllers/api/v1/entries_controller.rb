class Api::V1::EntriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    user = current_user
    entries = user.entries.order(created_at: :desc)
    render json: entries
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
      entry: entry
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

  def show
    user = current_user
    entry = user.entries.find(params[:id])
    journal_entry = entry.journals[0]
    goals = entry.goals
    user_emotions = entry.user_emotions

    render json: entry
  end

  def edit
    user = current_user
    entry = user.entries.find(params[:id])
  end

  def update
    user = current_user
    entry = user.entries.find(params[:id])
    new_data = JSON.parse(request.body.read)
    journal_entry = new_data["journalEntry"]
    entry.journals[0].update(journal_entry: journal_entry)

    user_emotions = new_data["emotionsPayLoad"]
    user_emotions.each do |emotion_name, rating|
      emotion = Emotion.find_by_feeling(emotion_name)
      user_emotion = entry.user_emotions.where(emotion: emotion)[0]
      user_emotion.update(
        rating: rating
      )
    end

    goals = new_data["goalsPayLoad"]
    goals.each_with_index do |item_number, goal, index|
      entry.goals[index].update(goal_item: goal)
    end

  end

  def destroy
    entry = Entry.find(params[:id])

  end
end
