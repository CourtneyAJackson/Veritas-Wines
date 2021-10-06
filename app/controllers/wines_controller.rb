class WinesController < ApplicationController

  #GET /wines
  def index
    @wines = Wine.all

    render json: @wines
  end
   
  def show 
    @wine = Wine.find(params[:id])
    render json: @wine, include: :ratings
  end 
end
