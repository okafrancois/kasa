const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a5w13z',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
