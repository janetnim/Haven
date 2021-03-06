require "application_system_test_case"

class AmountsTest < ApplicationSystemTestCase
  setup do
    @amount = amounts(:one)
  end

  test "visiting the index" do
    visit amounts_url
    assert_selector "h1", text: "Amounts"
  end

  test "creating a Amount" do
    visit amounts_url
    click_on "New Amount"

    click_on "Create Amount"

    assert_text "Amount was successfully created"
    click_on "Back"
  end

  test "updating a Amount" do
    visit amounts_url
    click_on "Edit", match: :first

    click_on "Update Amount"

    assert_text "Amount was successfully updated"
    click_on "Back"
  end

  test "destroying a Amount" do
    visit amounts_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Amount was successfully destroyed"
  end
end
