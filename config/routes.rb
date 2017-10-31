Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#index'

  resources :user_emotions, only: [:index]
    get "user_emotions", to: "user_emotions#index"

  namespace :api do
    namespace :v1 do
      resources :users, param: :id, only: [:index, :show]
      resources :user_emotions, except: [:show]
      scope :user do
        get 'is_signed_in', to: 'user#is_signed_in?'
      end
    end
  end
end
