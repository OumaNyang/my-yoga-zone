class TrainerController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :no_content
rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
def index
trainer=Trainer.all
render json:trainer, status: :ok
end

def show
trainer=Trainer.find_by(id: params[:id])
render json:trainer, status: :ok
end

private

def unprocessable_entity_feedback(invalid)
  render json: {error: invalid.record.errors.full_messages}, status: :no_content
end
 def not_found_response
render json: {error: 'Trainer not found'}, status: :not_found
 end
end
