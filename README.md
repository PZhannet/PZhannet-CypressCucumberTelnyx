## Project description
    Test different functionality for https://telnyx.com/

## Technologies
    Node.js: 16.14.2
    Cypress: 12.0.2
    badeball/cypress-cucumber-preprocessor: 15.0.0

## Project set up 
    To clone progect and run it: 
    $ git clone https://github.com/PZhannet/CypressCucumberTelnix.org
    $ npm install

## Running Tests
    To Run tests, open Cypress App: npx cypress open
    Then should be chosen E2E testing option and Browser. 
    Choose the necessary test on the Specs to run it.

## Running the tests in headless
    To Run all tests: npx cypress run
    To run a single test file: npx cypress run -- spec "cypress/e2e/**.feature"

## Report
