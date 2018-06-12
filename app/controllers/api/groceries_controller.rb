class Api::GroceriesController < ApplicationController

  def index
    # binding.pry
    render json: Grocery.all
  end
  
  def create
    grocery = Grocery.new(grocery_params)
    if grocery.save
      render json: grocery
    else
      render json: { errors: grocery.errors }, status: 417
    end
  end
  
  def update
    grocery = Grocery.find(params[:id])
    grocery.update(complete: !grocery.complete)
    render json: grocery
  end
  
  def destroy
    Grocery.find(params[:id]).destroy
    render json: { message: "Item deleted"}
  end
  
  
  private
  
    def grocery_params
     params.require(:grocery).permit(:name, :complete)
    end
  
end
  