const { defineConfig } = require("cypress");
const {preprocessor, addCucumberPreprocessorPlugin} = require('@badeball/cypress-cucumber-preprocessor')
const {browserify} = require('@badeball/cypress-cucumber-preprocessor/browserify')

async function  setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin (on, config)

  on('file:preprocessor', browserify.default(config))

  return c
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.trymima.com',
    viewportHeight: 900,
    viewportWidth : 1680,
    defaultCommandTimeout: 15000,
    specPattern:['**/*.feature'],
    chromeWebSecurity : false,
    watchForFileChanges : false,
   
  },
});
