Rails.application.routes.draw do
  resources :projects
	get '/', to: 'pages#home'
	get '/login', to: 'sessions#new'
	post '/session', to: 'sessions#create'

resources :users
  
end
