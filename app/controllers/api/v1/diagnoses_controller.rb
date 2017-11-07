class Api::V1::DiagnosesController < ApplicationController
  skip_before_action :verify_authenticity_token

end
