const chai = require("chai");
const expect = chai.expect;
const { createCard, createDeck, countCards } = require("../src/card");

describe("deck", function () {
  it("should create a deck of cards", function () {
    const card1 = createCard(1, "What is 1 + 1?", ["2", "3"], "2");
    const card2 = createCard(2, "What is 2 + 2?", ["4", "5"], "4");
    const deck = createDeck([card1, card2]);

    expect(deck).to.deep.equal([card1, card2]);
  });

  it("should know how many cards are in the deck", function () {
    const card1 = createCard(1, "What is 1 + 1?", ["2", "3"], "2");
    const card2 = createCard(2, "What is 2 + 2?", ["4", "5"], "4");
    const deck = createDeck([card1, card2]);

    expect(countCards(deck)).to.equal(2);
  });
});
