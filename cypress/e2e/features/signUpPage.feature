Feature: Sign-up page
Background:
    Given A web browser is at the telnyx home page
  Scenario: Checking the click of the "Log in" link opens the Login page
    When A user clicks Sign-up button 
    And A user clicks Log in link on sign-up page
    Then A user should see a Log in page
  Scenario: Checking Sign-up with empty data
    When A user clicks Sign-up button
    And A user clicks Create Account button
    Then A user should see a FullName error messages
    And A user should see a WorkEmail error messages