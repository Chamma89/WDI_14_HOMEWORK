Rails.application.routes.draw do

  get '/', to: 'houses#index'
  resources :houses, only: [:index, :show]
  resources :students, only: [:index, :show, :create, :new]
end
