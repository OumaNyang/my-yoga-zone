class UsersController < ApplicationController
        skip_before_action :authorize, only: :create 
      
        def create
          user = User.create!(user_params)
          session[:user_id] = user.id
          render json: user, status: :created
        end

        def index
            users=User.all
            render json: users , only:[:id, :name, :username,:email], status: :ok
        end
      
        def show
          render json: @current_user
        end
      
        private
      
        def user_params
          params.permit(:name,:username,:email, :password, :password_confirmation)
        end
            
end
