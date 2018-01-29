Rails.application.routes.draw do

  resources :likes
  resources :comments
	get '/', to: 
		'pages#home'

	get '/login', to: 
		'sessions#new'

	post '/session', to: 
		'sessions#create'

	get '/display/:id', to:
		'sessions#display'	

resources :projects, only: [:new, :create] # a way of filtering the routes. check rails localhost:3000/rails/info/routes
resources :users

  
end
