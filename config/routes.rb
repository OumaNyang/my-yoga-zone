Rails.application.routes.draw do
  # resources :reviews
  # resources :trainers
  # resources :tutorials
  # resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show' 
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
   get '/trainees', to: 'users#index'

  get '/trainers', to: 'trainers#index'
  get '/trainers/:id', to: 'trainers#show'
  get '/tutorials', to: 'tutorials#index'
  get '/tutorials/:id', to: 'tutorials#show'
  post '/tutorials', to: 'tutorials#create'
  delete '/tutorials/:id', to: 'tutorials#destroy'

  resources :reviews , only: [:index,:create]
end
