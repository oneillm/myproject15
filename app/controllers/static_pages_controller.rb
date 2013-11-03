class StaticPagesController < ApplicationController
  def home
  end

  def Project0
  end

  def Project1
  end

  def Project2
  end

  def project3
    @date =  params[:month] ? Date.parse(params[:month]) : Date.today
  end
end
