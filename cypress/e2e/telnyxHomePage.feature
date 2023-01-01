Feature: Home page
Background:
    Given A web browser is at the telnyx home page
  Scenario: Checking the click of the Next Item Button
    When A user clicks on Next Item Button
    And A user clicks on Next Item Button again
    Then A user should see a picture with Dayton Turner
  Scenario: Checking the click of the "Talk to an expert" Button
    When A user clicks the Talk to an expert Button
    Then A user should see the Contact-us page