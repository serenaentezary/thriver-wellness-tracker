class JournalsController < ApplicationController
  def index
    @user = current_user
    @journals = @user.journals
  end

  def show
    @user = current_user
    @journal = Journal.find(params[:id])
  end

  def edit

  end

  def updated

  end

  def destroy

  end
end
