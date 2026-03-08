// card functions
function createCard(id, question, answers, correctAnswer) {
  var card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer,
  };
  return card;
}

// correct or incorrect
function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
    return "correct!";
  } else {
    return "incorrect!";
  }
}

// deck functions
function createDeck(cards) {
  return cards;
}

function countCards(deck) {
  return deck.length;
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
};
