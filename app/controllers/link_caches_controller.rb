class LinkCachesController < ApplicationController
  def index
    @link_cache = LinkCache.all
  end
end
