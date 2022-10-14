Rails.application.routes.draw do
  resources :trainer, only: [:index, :show]
  resources :trainee, only: [:index, :show]
  resources :yoga, only: [:index, :create, :show, :update, :destroy]
  post "/signup", to: "sessions#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
