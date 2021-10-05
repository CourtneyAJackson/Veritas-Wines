class WinesController < ApplicationController

  #GET /wines
  def index
    @wines = Wine.all

    render json: @wines
  end

end
