Feature: Number-lookup page 
Background:
    Given A web browser is at the telnyx home page
  Scenario: Checking the correct display of the country code when selecting a country from the list of countries
    When A user clicks the Number-lookup link
    And A user clicks country Listbox
    And A user chooses country "<country>"
    Then A user should see the valid country code "<countryCode>"
    Examples:
    | country | countryCode |
    | Albania | +355        |
    | Aruba   | +297        |
    | Canada  | +1          |
    | Italy   | +39         |
    
  Scenario: Checking the click of the"Explore use-case guides" button
    When A user clicks the Number-lookup link
    And A user clicks Explore use-case guides button
    Then A user should see the Telnyx Developers Messaging page
  Scenario: Checking the click of the "Elastic SIP Trunking" Link
    When A user clicks the Number-lookup link
    And A user clicks Elastic SIP Trunking Link
    Then A user should see the Thesip-trunks page