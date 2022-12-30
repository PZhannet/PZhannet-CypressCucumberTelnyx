Feature: Sign-up page
Background:
    Given A web browser is at the telnyx home page
  Scenario: Success click "Log in" link
    When A user clicks Sign-up button 
    And A user clicks Log in link
    Then A user should see a Log in page
  Scenario: Unsuccess Sign-up with empty data
    When A user clicks Sign-up button
    And A user clicks Create Account button
    Then A user should see a FullName error messages
    And A user should see a WorkEmail error messages