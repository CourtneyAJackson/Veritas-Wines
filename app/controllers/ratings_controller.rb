class RatingsController < ApplicationController
  before_action :set_rating, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  #GET /ratings
  def index 
    @ratings = Rating.all
    render json: @ratings
  end

  #GET /ratings/1
  def show
    # @rating = Rating.find(params[:id])
    render json: @rating, include: :wine
  end

  #POST /ratings
  def create
    @rating = Rating.new(rating_params)
    @rating.user = @current_user

    if @rating.save
      render json: @rating, status: :created
    else
      render json: @rating.errors, status: :unprocessable_entity
    end
  end

  #PUT /ratings/1
  def update
    if @rating.update(rating_params)
      render json: @rating
    else 
      render json: @rating.errors, status: :unprocessable_entity
    end
  end

  #DELETE /rating/1
  def destroy
    @rating.destroy
  end 
  
  #adding wines to ratings method goes here
  def add_wine_to_rating
    @rating = Rating.find(params[:id])
    @wine = Wine.find(params[:wine_id])
    
    @rating.wines << @wine

    render json: @rating, include: :wine

  end


  private 
  def set_rating 
    @rating = Rating.find(params[:id])
  end

  def rating_params
    params.require(:rating).permit(:rank, :wine_id)
  end

end
