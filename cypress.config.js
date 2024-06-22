const { defineConfig } = require("cypress");
const {preprocessor} = require('@badeball/cypress-cucumber-preprocessor')
const {browserify} = require('@badeball/cypress-cucumber-preprocessor/browserify')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.trymima.com',
    viewportHeight: 900,
    viewportWidth : 1680,
    defaultCommandTimeout: 15000,
    //specPattern:'**/*.feature',
    chromeWebSecurity : false,
    watchForFileChanges : false,
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
