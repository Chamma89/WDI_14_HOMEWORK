class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def show
    @students = Student.find(params[:id])
  end

  def create
  	students = Student.new
  	students.name = params[:name]
  	students.img_url = params[:image]
  	students.house_id = Student.order("random()").first.id
  	if students.save
  		redirect_to '/students'
  	else
  		render :new
  	end		

  end		

end
