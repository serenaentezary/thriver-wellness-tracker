class Api::V1::LinkCachesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token

  def random_articles
    
  end
end
