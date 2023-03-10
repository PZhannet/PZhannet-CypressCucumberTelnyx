Feature: Toll-free-numbers page
Background:
    Given A web browser is at the telnyx home page
  Scenario: Checking the click of the "Add to cart" Button
    When A user clicks the Read customer story Link
    And A user clicks the Toll-Free Numbers link
    And A user clicks Add to cart button
    Then A user should see a cart image on header
  Scenario: Checking the click of the "Search" button when the search field is filled with valid information
    When A user clicks the Read customer story Link
    And A user clicks the Toll-Free Numbers link
    And A user enters text "story" in Search Input
    And A user clicks Search Button
    Then A user should see different Toll-free-numbers in the search result