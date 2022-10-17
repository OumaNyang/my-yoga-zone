class TutorialController < ApplicationController
  
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_feedback

  def index
  tutorials=Tutorial.all
  render json: tutorials, status: :ok
  end

  def create
  tutorial=Tutorial.create!(tutorial_params)
  render json: tutorial, status: :created
  end
  
  def show
    tutorial=Tutorial.find_by(id: params[:id)
    render json: tutorial, status: :ok
  end

  def update
    tutorial=Tutorial.find_by(id: params[:id])
    tutorial.update(tutorial_params)
    render json: tutorial
  end

  def destroy
    tutorial=Tutorial.find_by(id: params[:id])
    tutorial.destroy
    head :no_content
  end

  private
  def tutorial_params
    params.permit(:name,:description, :url,:trainer_id)
  end

  def unprocessable_entity_feedback(invalid)
    render json: {error: invalid.record.error}, status: :unprocessable_entity
end

end
