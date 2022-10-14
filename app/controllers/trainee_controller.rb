class TraineeController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :no_content
  def index
  trainee=Trainee.all
  render json:trainee, status: :ok
  end
  
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end
  
  private
  
  def unprocessable_entity_feedback(invalid)
    render json: {error: invalid.record.error}, status: :no_content
  end




end
