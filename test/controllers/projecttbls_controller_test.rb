require 'test_helper'

class ProjecttblsControllerTest < ActionController::TestCase
  setup do
    @projecttbl = projecttbls(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:projecttbls)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create projecttbl" do
    assert_difference('Projecttbl.count') do
      post :create, projecttbl: { Description: @projecttbl.Description, ProjectID: @projecttbl.ProjectID, URL: @projecttbl.URL }
    end

    assert_redirected_to projecttbl_path(assigns(:projecttbl))
  end

  test "should show projecttbl" do
    get :show, id: @projecttbl
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @projecttbl
    assert_response :success
  end

  test "should update projecttbl" do
    patch :update, id: @projecttbl, projecttbl: { Description: @projecttbl.Description, ProjectID: @projecttbl.ProjectID, URL: @projecttbl.URL }
    assert_redirected_to projecttbl_path(assigns(:projecttbl))
  end

  test "should destroy projecttbl" do
    assert_difference('Projecttbl.count', -1) do
      delete :destroy, id: @projecttbl
    end

    assert_redirected_to projecttbls_path
  end
end
