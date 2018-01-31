class CommentsController < ApplicationController
	def create
		comment = Comment.new
		comment.body = params[:content]
		comment.user_id = session[:user_id]
		comment.project_id = params[:project_id]
		comment.save
		redirect_to "/display/#{params[:project_id]}"
	end	

	def destroy
		comment = Comment.find(params[:id])
		project = comment.project
		comment.destroy

		# comment.id will not work because comment.destroy will remove the comment. You can only use string interpolation within the rb files.
		# Crab hands can only be used within the erb files. 
		redirect_to "/display/#{project.id}"
	end	
end
