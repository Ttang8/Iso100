class Api::PhotosController < ApplicationController

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages
    end
  end

  def update
    @photo = Photo.find(params[:id])
    if @photo.update_attributes
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
  end

  def index
    @photos = Photo.all
  end

  def photo_params
    params.require(:photo).permit(:title, :description, :album_id)
  end
end
