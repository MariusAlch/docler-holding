/// <reference types="cypress" />

import { sendMessage, randomString } from "../util";
import moment from "moment";

describe("Chat application", () => {
  it("is able to send message", () => {
    cy.visit("http://localhost:5000");

    const message = Math.floor(Math.random() * 10000000).toString();
    sendMessage(message);

    cy.get('[data-test="message"]').should("contain.text", message);
  });
});

describe("Settings", () => {
  const time = moment();

  it("shoud have default settings enabled", () => {
    cy.visit("http://localhost:5000");

    // send a message to ensure we have something to test time on
    sendMessage(randomString());

    // check default 12 hours format
    cy.get('[data-test="details"]').should("contain.text", time.format("LT"));
    // check default light theme
    cy.get("body").should("have.css", "background-color", "rgb(255, 255, 255)");

    // check default CTRL+ENTER enabled
    const message = randomString();
    cy.get("textarea").type(message);
    cy.get("textarea").type("{ctrl}{enter}");
    cy.get('[data-test="message"]').should("contain.text", message);
  });

  it("should be able to change settings", () => {
    cy.get('a[href="/settings"]').click();

    cy.get("#color-dark").click();
    cy.get("#24hours").click();
    cy.get("#enter-off").click();
    cy.get('[name="language"]').select("LT");
    cy.get('[name="username"]').clear().type(randomString());

    cy.get('[type="submit"]').click();
  });

  it("should represent changed settings", () => {
    cy.get('a[href="/"]').click();

    // Check langauge change
    cy.get("a").contains("Nustatymai").should("exist");

    // Check 24 hour format
    cy.get('[data-test="details"]').should(
      "contain.text",
      time.format("HH:mm")
    );

    // Check dark theme
    cy.get("body").should("have.css", "background-color", "rgb(22, 22, 22)");

    // Check CTLR+ENTER disabled
    const anotherMessage = randomString();
    cy.get("textarea").type(anotherMessage);
    cy.get("textarea").type("{ctrl}{enter}");
    cy.get('[data-test="message"]').should("not.contain.text", anotherMessage);
    cy.get('[type="submit"]').click();
    cy.get('[data-test="message"]').should("contain.text", anotherMessage);
  });
});
