Qa::Engine.routes.draw do
  get "/search/:vocab(/:sub_authority)", to: "terms#search", as: :search
  get "/terms(/:vocab(/:sub_authority))", to: "terms#index", as: :terms
  match "/show/:vocab/:id" => "terms#show", :via=>:get
  match "/show/:vocab/:sub_authority/:id" => "terms#show", :via=>:get
end
