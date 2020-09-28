describe("Test4 - Tender Screen", () => {
  it("Visit Tender screen", () => {
    cy.visit("./tender");
  });

  it("Verify header", () => {
    cy.get("h1").contains("Tender Screen");
  });

  it("Verify Item UI state", () => {
    cy.get("p").contains("State=tender Substate=initial");
  });

  it("Click on Pay item", () => {
    cy.get("#pay").click();
  });

  it("Click on TenderComplete", () => {
    cy.get("#tenderComplete").click();
  });
});
