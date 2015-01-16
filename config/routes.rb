Rails.application.routes.draw do
  root 'contacts#index'
  resources :contacts, only: [:index, :create, :destroy]
  post '/contacts/import', to: "contacts#import"
end
