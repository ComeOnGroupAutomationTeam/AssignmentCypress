// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import './cookieBannerTestSteps';
import './visitTestSteps';


// Whitelist cookies that needed to be carried forward to next test in same spec
Cypress.Cookies.defaults({
    preserve: [
        'integrationtesting',
    ]
});

before(function() {
    // cookie to hide overlay and open payments in full screen instead of iframe
    cy.setCookie('integrationtesting', 'true');
});

beforeEach(function() {
     cy.viewport(Cypress.env('viewport'));
});

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});