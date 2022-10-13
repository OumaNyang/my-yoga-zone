class TrainerController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :no_content
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
  render json: {error: invalid.record.error}, status: :no_content
end

end
