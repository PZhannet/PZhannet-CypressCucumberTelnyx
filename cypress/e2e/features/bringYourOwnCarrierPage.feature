Feature: Bring Your Own Carrier page
Background:
    Given A web browser is at the telnyx home page
  Scenario: Checking the click of the "Try it Free" button
    When A user mouseovers the link to the Resources page "Resources"
    And A user presses Bring Your Own Carrier link
    And A user presses the Try for free button
    Then A user should see a Sign Up page
    And A users hould see Create a free account label