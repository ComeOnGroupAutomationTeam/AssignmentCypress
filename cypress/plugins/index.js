/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// promisified fs module

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  config.chromeWebSecurity = false;
  config.defaultCommandTimeout = 14000;
  config.pageLoadTimeout = 120000;
  config.requestTimeout = 10000;
  config.responseTimeout = 200000;
  config.waitForAnimations = true;
  config.userAgent =
    "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1";

  return config;
};
