class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> {request.format.json?}
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :first_name, :last_name, :lgbtq])
    devise_parameter_sanitizer.permit(:account_update, keys: [:username, :first_name, :last_name, :lgbtq])
 end
end
