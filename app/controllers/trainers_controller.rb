class TrainersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
    trainers=Trainer.all
    render json: trainers , only:[:id, :name, :email,:address], status: :ok

    end
    
    def show
        trainer=Trainer.find_by(id: params[:id])
        render json: trainer , only:[:id, :name, :email,:address],include: :tutorials ,status: :ok 
        
    end
   
    private 

    def render_not_found_response
        render json: { error: "Trainer not found" }, status: :not_found
   end

 end

