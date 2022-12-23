const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json"
    },
  e2e: {
    defaultCommandTimeout: 20000,
    viewportWidth: 1366,
    viewportHeight: 768,
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
    baseUrl: "https://telnyx.com",
  },
});
