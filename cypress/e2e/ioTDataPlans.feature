Feature:  IoT-data-plans Page
Background:
    Given A web browser is at the telnyx home page
  Scenario: Success click country in 'See IoT data plans and pricing in" Listbox
    When A user mouseovers the link to the Pricing page "Pricing"
    And A user presses Wireless link
    And A user clicks on See IoT data plans and pricing in Link
    And A user clicks on the country name "<country>"
    Then A user should see a Pricing page for the chosen country "<chosenCountry>"
    Examples:
    | country | chosenCountry |
    | Canada  | /ca           |
    | Chile   | /cl           |
    | Poland  | /pl           |
  Scenario: Success click on 'How does pricing work for IoT data plans?' question
    When A user mouseovers the link to the Pricing page "Pricing"
    And A user presses Wireless link
    And A user clicks How does pricing work for IoT data plans? question
    Then A user should see an How does pricing work for IoT data plans? answer
    
