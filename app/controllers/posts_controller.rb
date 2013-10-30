class PostsController < ApplicationController
  def index
    @posts = Post.all

    render :json => @posts
  end
  
  def destroy
    @post = Post.find(params[:id])
    
    if @post
      @post.destroy
      render :json => @post
    else
      render :json => @post.errors, :status => 422 # unprocesable entity
    end
  end
end