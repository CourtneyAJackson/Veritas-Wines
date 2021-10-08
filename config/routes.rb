Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users, only: :create 
  
  resources :wines, only: [:index, :show] do
  resources :ratings, shallow: true
    end
  # post '/ratings/:wine_id/new', to: 'ratings#create'
end
