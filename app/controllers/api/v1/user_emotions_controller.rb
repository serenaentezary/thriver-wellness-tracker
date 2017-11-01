class Api::V1::UserEmotionsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery unless: -> { request.format.json? }

  def index
    user_emotions = UserEmotion.all
    render json: user_emotions
  end

  def new
    user_emotion = UserEmotion.new
    render json: user_emotion
  end

  def create
    input = JSON.parse(request.body.read)
    user = User.find(input[currentUser.id])
    happiness = Emotion.find(input["happiness"])
    happiness_value = input["happiness"].to_i
  end

  def edit

  end

  def update

  end

  def destroy

  end
end
