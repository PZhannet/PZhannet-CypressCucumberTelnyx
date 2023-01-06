Feature: telnux.com

  Background:
    Given A web browser is at the telnyx home page
  Scenario: Checking login with valid credentials
    When A user clicks Log in link
    And A user enters the email "testtestunia@gmail.com"
    And A user enters the password "qwertyU789!!"
    And A user clicks on the login button
    Then A user should see an app page and title-bar

  Scenario: Checking login with not registered email and not a valid password
    When A user clicks Log in link
    And A user enters not valid email "testtestunia1@gmail.com"
    And A user enters the password "qwertyU789"
    And A user clicks on the login button
    Then A user should see an error message
