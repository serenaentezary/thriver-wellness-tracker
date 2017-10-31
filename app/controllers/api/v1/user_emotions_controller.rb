class Api::V1::UserEmotionsController < ApplicationController
  def index
    @user_emotions = UserEmotion.all
    render json: @user_emotions
  end
end
