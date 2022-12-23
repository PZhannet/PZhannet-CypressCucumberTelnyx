Feature: Home page
Background:
    Given A web browser is at the telnyx home page
  Scenario: Success click Next Item button
    When A user clicks on Next Item Button
    And A user clicks on Next Item Button again
    Then A user should see a picture with Dayton Turner
  Scenario: Success click the "Talk to an expert" Button
    When A user clicks the Talk to an expert Button
    Then A user should see the Contact-us page