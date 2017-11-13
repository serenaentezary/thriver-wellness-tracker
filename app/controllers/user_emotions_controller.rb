class UserEmotionsController < ApplicationController
  def index
    @user = current_user
    @happiness = UserEmotion.where(user_id: @user.id, emotion_id: Emotion.find_by(feeling: "happiness").id).order(created_at: :desc)
    @sadness = UserEmotion.where(user_id: @user.id, emotion_id: Emotion.find_by(feeling: "sadness").id).order(created_at: :desc)
    @excitement = UserEmotion.where(user_id: @user.id, emotion_id: Emotion.find_by(feeling: "excitement").id).order(created_at: :desc)
    @anger = UserEmotion.where(user_id: @user.id, emotion_id: Emotion.find_by(feeling: "anger").id).order(created_at: :desc)
    @anxiety = UserEmotion.where(user_id: @user.id, emotion_id: Emotion.find_by(feeling: "anxiety").id).order(created_at: :desc)
    @peacefulness = UserEmotion.where(user_id: @user.id, emotion_id: Emotion.find_by(feeling: "peacefulness").id).order(created_at: :desc)
  end
end
