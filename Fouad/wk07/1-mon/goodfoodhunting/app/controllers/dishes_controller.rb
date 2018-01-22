class DishesController < ApplicationController
	def index
		@dishes = Dish.all
	end

	def new

	end

	def show
		@dish = Dish.find(params[:id])	
	end	

	def create
		dish = Dish.new
		dish.title = params[:title]
		if dish.save
			redirect_to '/dishes'
		else

		render :new

		end
	end

	def update
		dish = Dish.find_by(id: params[:id])
		dish.title = params[:edit]
		dish.save
		redirect_to '/dishes'
	end	
end
