Rails.application.routes.draw do

  # resources :dishes
		# Controller file & method  
	get '/', to: 'pages#home'
	get '/about', to: 'pages#about'
	get '/dishes/new', to: 'dishes#new'
	put 'dishes/:id', to: 'dishes#update'
	get 'dishes/:id', to: 'dishes#show'
	get 'dishes/', to: 'dishes#index'
	post '/dishes', to: 'dishes#create'
end
