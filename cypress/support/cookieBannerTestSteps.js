// Cookie Banner Related Test Steps

/*
 * Name: verifyCookieConsentNotification
 * Parameters: option
 * Return type: void
 * Purpose: Depend on the option parameter,
 *          isVisible: Verifies Cookie Consent Notification is visible
 *          notExists: Verifies Cookie Consent Notification does not exist
 */
Cypress.Commands.add("verifyCookieConsentNotification", (option) => {
  if (option == "isVisible") {
    // Verify Cookie Consent Notification is visible
    cy.get("[data-at=accept-cookie-wrapper]>div").should("be.visible");
  } else if (option == "notExists") {
    cy.get("[data-at=accept-cookie-wrapper]>div").should("not.exist");
  }
});

/*
 * Name: clickAcceptCookiesButton
 * Parameters: ---
 * Return type: void
 * Purpose: Clicks to Accept button on the Cookie Consent Wrapper
 */
Cypress.Commands.add("clickAcceptCookiesButton", () => {
  // Click to "Accept" button on the Cookie Consent Wrapper
  cy.get("[data-at=accept-cookie-wrapper]")
    .find("button")
    .should("be.visible")
    .click();
});
