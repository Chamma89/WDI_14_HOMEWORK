require 'sinatra'
require'sinatra/reloader'
require 'stock_quote'

get '/' do 

	stock_symbol = params[:stock]

	stock = StockQuote::Stock.quote("#{stock_symbol}")

	@price = stock.l

	@percentage = stock.c

	@name = stock.name

	erb (:index)

end 


get '/about' do 

	erb (:about)

end 

		