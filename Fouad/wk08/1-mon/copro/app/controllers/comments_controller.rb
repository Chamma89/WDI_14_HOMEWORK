class CommentsController < ApplicationController
	def create

		comment = Comment.new
		comment.body = params[:content]
		comment.user_id = session[:user_id]
		comment.project_id = params[:project_id]
		comment.save
		redirect_to "/display/#{params[:project_id]}"
	end	
end
