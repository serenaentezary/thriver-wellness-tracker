class Api::V1::LinkCachesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token

  def random_articles
    random_ids = LinkCache.all.map(&:id).sample(3)
    links = LinkCache.find(random_ids)
    render json: links
  end

  def index
    LinkCache.all
  end
end
