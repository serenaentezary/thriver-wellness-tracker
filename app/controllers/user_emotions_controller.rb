class UserEmotionsController < ApplicationController
  def index
    @user = current_user
    @user_emotions = @user.user_emotions
  end
end
