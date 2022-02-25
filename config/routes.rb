Rails.application.routes.draw do
  resources :users

  resources :sneakers do 
    resources :reviews
  end

  get '/users/:user_id/reviews', to: 'reviews#get_user_reviews'
  get '/sneakers', to: 'sneakers#get_all_sneakers'

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
