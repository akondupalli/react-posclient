describe("Test2 - Item Screen", () => {
  it("Visit Item screen", () => {
    cy.url().then(url => {
      if (!(url && url.includes("/Item"))) {
        cy.visit("./item");
      }
    });
  });
  it("Verify header", () => {
    cy.get("h1").contains("Item Screen");
  });

  it("Verify Item UI state", () => {
    cy.get("p").contains("State=item Substate=initial");
  });

  it("Click on Add item", () => {
    cy.get("#addItem").click();
    cy.get("#addItem").click();
  });

  it("Click on Remove item", () => {
    cy.get("#removeItem").click();
  });

  it("Verify Item count", () => {
    cy.get("p").contains("Item Count=1");
  });

  it("Click on Totals", () => {
    cy.get("#totals").click();
  });
});
