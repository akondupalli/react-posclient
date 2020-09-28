describe("Test2 - Welcome Screen", () => {
  it("Visit the app", () => {
    cy.visit("/");
  });

  it("Verify header", () => {
    cy.get("h1").contains("Welcome Screen");
  });

  it("Verify Cart image", () => {
    cy.get("#cart-img").should("exist");
  });

  it("Verify Welcome UI state", () => {
    cy.get("p").contains("State=welcome Substate=initial");
  });

  it("Click on start txn", () => {
    cy.get("#start-txn").click();
  });
});
