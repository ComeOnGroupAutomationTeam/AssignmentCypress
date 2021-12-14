describe("Cookie Banner Tests", () => {
  beforeEach(function () {});

  it("Verify Cookie Banner", () => {
    // Visit Casino Explore Page
    cy.visitCasinoExplore();

    // Verify Cookie Banner Visibility
    cy.verifyCookieConsentNotification("isVisible");

    // Accept the Cookie Consent
    cy.clickAcceptCookiesButton();

    // Visit Casino Explore Page Again
    cy.visitCasinoExplore();

    // Verify Cookie Banner does not exists
    cy.verifyCookieConsentNotification("notExists");
  });
});
