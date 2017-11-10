class UserEmotionsController < ApplicationController
  def index
    @user = current_user
    @user_emotions = @user.user_emotions.order(created_at: :desc)
  end
end
