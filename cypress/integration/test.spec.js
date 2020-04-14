describe("Test Cypress Test", function () {
  it("should visit the test page and interact with it", function () {
    // visit the web page
    cy.visit("./cypress/pages/test.html");

    // check the title for the correct title
    cy.get("[data-test-id='title']").contains("Cypress Test!");

    // check our button and click it!
    cy.get(".main-button").then(($btn) => {
      cy.wrap($btn).should("not.be.disabled");
      cy.wrap($btn).click();
    });

    // check that our button did what it should have
    cy.get("#demo").contains("This is a test!");
  });
});
