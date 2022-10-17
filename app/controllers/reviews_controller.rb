class ReviewController < ApplicationController
    def create 
         = Review.create(review_params)
        if review.valid?
            session[:review_id] = review.id
            render json: review, status: :created
        else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
    end 

    def show
        reviews=Review.find_by(id: params[:id)
        render json: reviews, status: :ok
    end

    private 

    def review_params
        params.permit( :tutorial_id, :comment)
    end 
end