/**
 * Global state object to keep track of the application data.
 */
const state = {
  cards: [
    { question: "What is 1 + 1?", answer: "2" },
    { question: "What is the capital of France?", answer: "Paris" },
    {
      question: "What does HTML stand for?",
      answer: "HyperText Markup Language",
    },
  ],
  currentIndex: 0,
};

/**
 * Updates the text content of the card based on the current index.
 */
function updateCardContent() {
  const questionElement = document.getElementById("card-question");
  const answerElement = document.getElementById("card-answer");
  const currentStatus = document.getElementById("current-index");
  const totalStatus = document.getElementById("total-cards");

  const currentCard = state.cards[state.currentIndex];

  questionElement.textContent = currentCard.question;
  answerElement.textContent = currentCard.answer;

  currentStatus.textContent = state.currentIndex + 1;
  totalStatus.textContent = state.cards.length;

  // Reset flip state when moving to a new card
  document.getElementById("card-inner").classList.remove("is-flipped");
}

/**
 * Toggles the 'is-flipped' class to trigger the CSS transition.
 */
function toggleFlip() {
  const cardInner = document.getElementById("card-inner");
  cardInner.classList.toggle("is-flipped");
}

/**
 * Increments the index and wraps around if at the end of the list.
 */
function nextCard() {
  state.currentIndex = (state.currentIndex + 1) % state.cards.length;
  updateCardContent();
}

/**
 * Decrements the index and wraps to the end if at the beginning.
 */
function previousCard() {
  state.currentIndex =
    (state.currentIndex - 1 + state.cards.length) % state.cards.length;
  updateCardContent();
}

/**
 * Initializes the application by attaching event listeners and loading the first card.
 */
function initializeApp() {
  document.getElementById("flip-button").addEventListener("click", toggleFlip);
  document.getElementById("card-inner").addEventListener("click", toggleFlip);
  document.getElementById("next-button").addEventListener("click", nextCard);
  document
    .getElementById("previous-button")
    .addEventListener("click", previousCard);

  updateCardContent();
}

// Start the app once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeApp);
