Rails.application.routes.draw do
  root "static#index"

  resources :greetings, only: [:index]

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
