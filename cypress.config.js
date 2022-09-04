const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'myyhdz',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      console.log(config) // see everything in here!
      
      // modify config values
      config.defaultCommandTimeout = 30000
      config.projectId = "myyhdz"
    },
    
  },
});
