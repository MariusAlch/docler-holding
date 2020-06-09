/// <reference types="cypress" />

export function sendMessage(message) {
  cy.get('a[href="/"]').click();

  cy.get("form textarea").as("input").should("exist");
  cy.get("form button").as("sendButton").should("exist");

  cy.get("@input").type(message);
  cy.get("@sendButton").click();
}

export function randomString() {
  return Cypress._.random(0, 1e6);
}
