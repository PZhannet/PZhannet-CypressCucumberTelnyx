## Project description

    In this project created the:
     1) 15 test cases to test the functionality of the  https://telnyx.com website;
     2) test cases automated via Cypress framework with the Cucumber tool;
     3) realized Pipeline on GitHub;
     4) implemented automatic report deployment to GitHub Pages.

## Technologies

    Node.js: 16.14.2
    Cypress: 12.0.2
    badeball/cypress-cucumber-preprocessor: 15.0.0

## Project set up 

    To clone progect and run it: 
    $ git clone https://github.com/PZhannet/CypressCucumberTelnyx.org
    $ npm install

## Running Tests

    To Run tests, open Cypress App: npx cypress open
    Then should be chosen E2E testing option and Browser. 
    Choose the necessary test on the Specs to run it.

## Running the tests in headless

    To Run all tests: npx cypress run
    To run a single test file: npx cypress run -- spec "cypress/e2e/**.feature"

## Report

    This project uses a Mochawesome reporter. To merge and generate a report should use commands:
    $ npm run report:merge
    $ npm run report:generate
    Reports will be saved in the:
    ..\docs\index.html

## GitHub Pages

    To see the automatically generated HTML report with test execution:
    https://pzhannet.github.io/PZhannet-CypressCucumberTelnyx/
    