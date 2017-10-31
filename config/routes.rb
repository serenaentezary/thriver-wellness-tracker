Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :users, param: :id, only: [:index, :show]
      resources :user_emotions_controller, only: [:index]

      get "users", to: "user#index"

    end
  end
end
