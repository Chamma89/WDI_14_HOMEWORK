class SessionsController < ApplicationController 

	def new
		render :new		
	end	

	def create
		user = User.find_by(email: params[:email])
		if user && user.authenticate(params[:password])
			session[:email]	 = params[:email]
			redirect_to "/"
		else		
			render :new
					
		end
	end	
end