Feature: Careers page
Background:
    Given A web browser is at the telnyx home page
  Scenario: Checking all job offer links are visible on the Careers page.
    When A user clicks on Careers link
    Then A user should see job offer links "<link>"
    Examples:
    | link |
    | IT Operations Systems Administrator |
    | Routing Manager (Remote)            |
    | Product Designer - Growth (Remote)  |
    | Account Executive - US              |
    | Sales Development Representative    |
    | Software Engineer, Python (Remote)  |
    | Mobile Core Engineer (Remote)       |
