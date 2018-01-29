class SessionsController < ApplicationController 

	def new
		render :new		
	end	

	def display
		@project = Project.find_by(id: params[:id])
		@comments = @project.comments
		render :display
	end	

	def create
		user = User.find_by(email: params[:email])
		if user && user.authenticate(params[:password])
			session[:email] = user.email
			redirect_to "/"
		else		
			render :new			
		end
	end	
end