describe("Test - Test images", () => {
  it("Test welcome screen images", () => {
    cy.visit("./");
    cy.get("#cart-img").should("exist");
  });
});
