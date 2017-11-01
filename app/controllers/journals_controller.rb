class JournalsController < ApplicationController
  def index
    journals = Journal.all
  end
end
