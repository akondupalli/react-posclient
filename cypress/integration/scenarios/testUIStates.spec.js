describe("Test - Test UI states", () => {
  it("Test welcome screen UI state", () => {
    cy.visit("./");
    cy.get("p").contains("State=welcome Substate=initial");
  });

  it("Test item screen UI state", () => {
    cy.startTxn();
    cy.get("p").contains("State=item Substate=initial");
  });

  it("Test tender screen UI state", () => {
    cy.addItem();
    cy.totals();
    cy.get("p").contains("State=tender Substate=initial");
  });

  it("Test item screen UI state", () => {
    cy.back();
    cy.get("p").contains("State=item Substate=initial");
  });
});
