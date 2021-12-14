// Visit Test Steps

/*
 * Name: visitCasinoExplore
 * Parameters: ---
 * Return type: void
 * Purpose: Visits "/casino/explore"
 */
Cypress.Commands.add("visitCasinoExplore", () => {
  //Navigate to casino/explore
  cy.visit("/casino/explore", { failOnStatusCode: false });
});
