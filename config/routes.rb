Myproject1::Application.routes.draw do
  resources :appointments

#  get "static_pages/home"
#  get "static_pages/Project0"
#  get "static_pages/Project1"
  
  root 'static_pages#home'
  match '/project_0', to: 'static_pages#Project0', via: 'get'
  match '/project_1', to: 'static_pages#Project1', via: 'get'
  match '/project_2', to: 'static_pages#project2', via: 'get'
  match '/project_3', to: 'static_pages#project3', via: 'get'
  resources :projecttbls


end
