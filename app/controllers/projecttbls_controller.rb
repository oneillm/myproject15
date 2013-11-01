class ProjecttblsController < ApplicationController
  before_action :set_projecttbl, only: [:show, :edit, :update, :destroy]

  # GET /projecttbls
  # GET /projecttbls.json
  def index
    @projecttbls = Projecttbl.all
  end

  # GET /projecttbls/1
  # GET /projecttbls/1.json
  def show
  end

  # GET /projecttbls/new
  def new
    @projecttbl = Projecttbl.new
  end

  # GET /projecttbls/1/edit
  def edit
  end

  # POST /projecttbls
  # POST /projecttbls.json
  def create
    @projecttbl = Projecttbl.new(projecttbl_params)

    respond_to do |format|
      if @projecttbl.save
        format.html { redirect_to @projecttbl, notice: 'Projecttbl was successfully created.' }
        format.json { render action: 'show', status: :created, location: @projecttbl }
      else
        format.html { render action: 'new' }
        format.json { render json: @projecttbl.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /projecttbls/1
  # PATCH/PUT /projecttbls/1.json
  def update
    respond_to do |format|
      if @projecttbl.update(projecttbl_params)
        format.html { redirect_to @projecttbl, notice: 'Projecttbl was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @projecttbl.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /projecttbls/1
  # DELETE /projecttbls/1.json
  def destroy
    @projecttbl.destroy
    respond_to do |format|
      format.html { redirect_to projecttbls_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_projecttbl
      @projecttbl = Projecttbl.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def projecttbl_params
      params.require(:projecttbl).permit(:ProjectID, :Description, :URL)
    end
end
