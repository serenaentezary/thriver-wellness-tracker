class Api::V1::UserEmotionsController < ApplicationController
  require 'date'
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def index
    user_emotions = UserEmotion.all
    render json: user_emotions
  end

  def create
    binding.pry
    ratings = JSON.parse(request.body.read)
    user = User.find(params[:user_id])
    entry_id = ratings["entry_id"]
    ratings.each do |emotion_name, rating|
      emotion = Emotion.find_by_feeling(emotion_name)
      UserEmotion.create(
        user: user,
        entry_id: entry_id,
        emotion: emotion,
        rating: rating
      )
    end
  end

  def graph_data
    user = current_user
    entries = user.entries
    data = [
      ["Time", "Happiness", "Sadness", "Excitement", "Anger", "Anxiety", "Peacefulness"]
    ]
    entries.each do |entry|
      time = entry.created_at.strftime('%a %d %b %Y')
      happiness = entry.find_rating('happiness').to_i
      sadness = entry.find_rating('sadness').to_i
      excitement = entry.find_rating('excitement').to_i
      anger = entry.find_rating('anger')
      anxiety = entry.find_rating('anxiety')
      peacefulness = entry.find_rating('peacefulness')
      data << [time, happiness, sadness, excitement, anger, anxiety, peacefulness]
    end
    render json: data
  end

  def edit
    # user_emotion = Entry.find(params[])
  end

  def update

  end

  def destroy
  end
end
