const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    BASE_URL: "https://www.saucedemo.com",
    VALID_USERNAME: "standard_user",
    VALID_PASSWORD: "secret_sauce",
    LOCKED_USERNAME: "locked_out_user",
  }
});
