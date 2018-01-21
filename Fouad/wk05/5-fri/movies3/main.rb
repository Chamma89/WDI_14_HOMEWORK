require 'pg'     
require 'pry'
require 'httparty'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
	erb :index
end

get '/search_results' do
	result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&s=#{params[:movie]}")
	@movie_result = result.parsed_response
	erb :results
end



get '/movies' do

	result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&t=#{params[:movie]}")
	@the_movie = result.parsed_response
	erb :movie

end	

post '/movies/save' do
  # this is where we create the record in the db
  # connect to db
  conn = PG.connect(dbname: 'movies3')
  # execute an sql statement
  sql = "INSERT INTO movies (name) VALUES ('#{params[:movieTitle]}');"
  result = conn.exec(sql)
  # close the db connection
  conn.close 

  redirect '/'
 
end
