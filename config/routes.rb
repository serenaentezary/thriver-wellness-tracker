Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :users, param: :id, only: [:index, :show] do
        resources :user_emotions, except: [:new] do
          collection do
            get :graph_data
          end
        end
        resources :journals, except: [:new]
        resources :goals, except: [:new]
        resources :entries, except: [:new]
      end
      namespace :users do
        get 'is_signed_in', to: 'users#show'
      end
    end
  end

  get '*path', to: 'static_pages#index'
end
