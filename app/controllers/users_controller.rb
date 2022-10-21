class UsersController < ApplicationController
      # before_action :authorize, only: :create 
      
        # def create
        #   user = User.create!(user_params)
        #   session[:user_id] = user.id
        #   render json:, status: :created
        # end

        def create
          user = User.create(user_params)
          if user.valid?
          # render json: {success:["User account created"]}, status: :created
          session[:user_id] = user.id

          else 
            render json: {errors: [user.errors.full_messages] }, status: :unprocessable_entity
          end
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
