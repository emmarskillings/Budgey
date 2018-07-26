module Api::V1

  class CategoryController < ApplicationController

    def index
      @categories = Category.all
      render json: @categories
    end

    def show
    end

    def create
    end

    def new
    end

    def destroy
    end


  end

end
