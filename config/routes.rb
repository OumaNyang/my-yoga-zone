Rails.application.routes.draw do
  resources :trainers, only: [:index, :show]
  resources :trainees, only: [:index, :show]
  resources :yogas, only: [:index, :create, :show, :update, :destroy]


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
