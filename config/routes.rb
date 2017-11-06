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
      end
      scope :user do
        get 'is_signed_in', to: 'user#is_signed_in?'
      end
    end
  end
end
