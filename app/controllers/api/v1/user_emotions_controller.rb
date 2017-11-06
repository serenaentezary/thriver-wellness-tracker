class Api::V1::UserEmotionsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def index
    user_emotions = UserEmotion.all
    render json: user_emotions
  end

  def create
    ratings = JSON.parse(request.body.read)
    user = User.find(params[:user_id])
    entry = Entry.create()
    ratings.each do |emotion_name, rating|
      emotion = Emotion.find_by_feeling(emotion_name)
      UserEmotion.create(
        user: user,
        entry: entry,
        emotion: emotion,
        rating: rating
      )
    end
  end

  def graph_data
    entries = Entry.all
    data = [
      ["Time", "Happiness", "Sadness", "Excitement", "Anger", "Anxiety", "Peacefulness"]]
    entries.each do |entry|
      time = entry.created_at
      happiness = entry.rating('happiness')
      sadness = entry.rating('sadness')
      excitement = entry.rating('excitement')
      anger = entry.rating('anger')
      anxiety = entry.rating('anxiety')
      peacefulness = entry.rating('peacefulness')
      data << [time, happiness, sadness, excitement, anger, anxiety, peacefulness]
    end
    render json: data
  end

  def edit
    # user_emotion = UserEmotion.find(params[])
  end

  def update

  end

  def destroy
  end
end
