class Api::V1::UserEmotionsController < ApplicationController
  require 'date'
  protect_from_forgery unless: -> { request.format.json? }

  def index
    user = current_user
    user_emotions = user.user_emotions
    render json: user_emotions
  end

  def graph_data
    user = current_user
    entries = user.entries
    data = [
      ["Time", "Happiness", "Sadness", "Excitement", "Anger", "Anxiety", "Peacefulness"]
    ]
    entries.each do |entry|
      time = entry.created_at.strftime('%a, %m/%d/%Y')
      happiness = entry.find_rating('happiness').to_i
      sadness = entry.find_rating('sadness').to_i
      excitement = entry.find_rating('excitement').to_i
      anger = entry.find_rating('anger')
      anxiety = entry.find_rating('anxiety')
      peacefulness = entry.find_rating('peacefulness')
      data << [time, happiness, sadness, excitement, anger, anxiety, peacefulness]
    end

    data << [0, 0, 0, 0, 0, 0, 0] if entries.count == 0

    render json: data
  end

  def destroy

  end
end
