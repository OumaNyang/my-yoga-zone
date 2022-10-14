class SessionsController < ApplicationController

  def create
    trainee = Trainee.find_by(username: params[:username])
    session[:trainee_id] = trainee.id
    render json: trainee
  end
  def destroy
    session.delete :user_id
    head :no_content
  end

end
