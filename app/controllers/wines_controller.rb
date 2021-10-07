class WinesController < ApplicationController
  before_action :set_wine, only: :show
  # GET /wines
  def index
    @wines = Wine.all
    render json: @wines
  end

  def show
    render json: @wine, include: :ratings
  end

  private

  def set_wine
    @wine = Wine.find(params[:id])
  end

  def wine_params
    params.require(:wine).permit(:name, :year, :price, :description, :img)
  end
end