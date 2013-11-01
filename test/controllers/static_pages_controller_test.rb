require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get Project0" do
    get :Project0
    assert_response :success
  end

  test "should get Project1" do
    get :Project1
    assert_response :success
  end

end
