describe("Test - Verify item count", () => {
  let itemCount = 3;
  it("Start txn", () => {
    cy.startTxn();
  });

  it("Add items", () => {
    cy.addItem(itemCount);
  });

  it("test itemCount", () => {
    const itemCountStr = `Item Count=${itemCount}`;
    cy.get("p").contains(itemCountStr);
  });

  it("test itemCount after coming back from tender screen", () => {
    cy.removeItem();
    cy.totals();
    cy.back();
    const itemCountStr = `Item Count=${itemCount - 1}`;
    cy.get("p").contains(itemCountStr);
  });
});
