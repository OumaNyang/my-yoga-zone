class TraineeController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :no_content
  def index
  trainee=Trainee.all
  render json:trainee, status: :ok
  end
  
  def show
  trainee=Trainee.find_by(id: params[:id)
  render json:trainee, status: :ok
  end
  
  private
  
  def unprocessable_entity_feedback(invalid)
    render json: {error: invalid.record.error}, status: :no_content
  end




end
