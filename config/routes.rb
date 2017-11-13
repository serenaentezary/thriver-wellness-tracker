Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :users, param: :id, only: [:index, :show] do
        resources :user_emotions, only: [:index, :destroy] do
          collection do
            get :graph_data
          end
        end
        resources :entries, except: [:new]
        resources :journals, only: [:index, :destroy]
        resources :goals, only: [:index, :destroy]
      end
      resources :link_caches, only: [:index] do
        collection do
          get :random_articles
        end
      end
      namespace :users do
        get 'is_signed_in', to: 'users#show'
      end
    end
  end

  resources :entries, only: [:index, :show, :edit, :update, :destroy] do
    member do
      post :completed_goals
    end
  end
  resources :goals, only: [:index, :show, :edit, :update, :destroy]
  resources :journals, only: [:index, :show, :edit, :update, :destroy]
  resources :user_emotions, only: [:index, :show, :edit, :update, :destroy]
  resources :link_caches, only: [:index]

  get '*path', to: 'static_pages#index'
end
