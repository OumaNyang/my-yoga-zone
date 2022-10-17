class TrainerController < ApplicationController
    def create 
        trainer = UseTrainerr.create(trainer_params)
        if trainer.valid?
            session[:trainer_id] = trainer.id
            render json: trainer, status: :created
        else
            render json: { errors: trainer.errors.full_messages }, status: :unprocessable_entity
        end
    end 

    def show 
        trainer = Trainer.find_by(id: session[:trainer_id])
        if trainer
            render json: trainer, status: :created
        else
            render json: { error: ["Not authorized"] }, status: :unauthorized
        end
    end 

    private 

    def trainer_params
        params.permit(:name, :username,:email, :password, :password_confirmation)
    end 
end