const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.trymima.com',
    viewportHeight: 900,
    viewportWidth : 1680,
    defaultCommandTimeout: 15000,
    chromeWebSecurity : false,
    watchForFileChanges : false,
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
