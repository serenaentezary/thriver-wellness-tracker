class Api::V1::UserEmotionsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def index
    user_emotions = UserEmotion.all
    render json: user_emotions
  end

  def new
    user_emotion = UserEmotion.new
    render json: user_emotion
  end

  def create
    ratings = JSON.parse(request.body.read)
    user = User.find(params[:user_id])
    ratings.each do |emotion_name, rating|
      emotion = Emotion.find_by_feeling(emotion_name)
      UserEmotion.create(
        user: user,
        emotion: emotion,
        rating: rating
      )
    end
  end

  def edit

  end

  def update

  end

  def destroy

  end
end
