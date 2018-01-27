     
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

get '/search_results' do
	result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&s=#{params[:movie]}")
	@movie_results = result.parsed_response
	erb :results
end

	
get '/movie_input' do
	result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&t=#{params[:movie]}")
	@the_movie = result.parsed_response
	erb :movie
end	



get '/about' do
	erb :about
end


