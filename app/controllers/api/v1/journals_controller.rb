class Api::V1::JournalsController < ApplicationController
  def index
    journals = Journal.all
    render json: journals
  end

  def new

  end

  def create

  end

  def edit

  end

  def update

  end

  def destroy

  end
end
