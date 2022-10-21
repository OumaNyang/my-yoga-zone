class TutorialsController < ApplicationController
 rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

def create
tutorial = Tutorial.create(tutorial_params)
if tutorial.valid?
render json: {success:["Tutorial added successfully"]}, status: :created
else 
    render json: { errors: [tutorial.errors.full_messages] }, status: :unprocessable_entity
end
end

def index
tutorials=Tutorial.all
render json: tutorials , status: :ok
end

def show
    tutorial=find_tutorial
    render json: tutorial ,status: :ok 
end
def destroy
    tutorial = find_tutorial
    if tutorial
        tutorial.destroy
      head :no_content
      render json: {success: ["Tutorial Record Deleted"]}
    else
      render render_not_found_response
    end
  end

    private 
    def find_tutorial
        Tutorial.find(params[:id])
        # Tutorial.find_by(id: params[:id])
     end

    def tutorial_params
    params.permit(:name,:description,:url,:trainer_id)
    end

    def render_not_found_response
    render json: { error: ["Tutorial  not found"] }, status: :not_found
    end
end
