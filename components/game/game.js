import { level } from "../levels-page/level-component.js";

// Константы для хранения значений мастей и рангов карт
const cards = [
  `<img class="game__card" src="./assets/images/туз пики.jpg" alt="A spades"/>`,
  `<img class="game__card" src="./assets/images/король пики.jpg" alt="K spades"/>`,
  `<img class="game__card" src="./assets/images/дама пики.jpg" alt="Q spades"/>`,
  `<img class="game__card" src="./assets/images/валет пики.jpg" alt="J spades"/>`,
  `<img class="game__card" src="./assets/images/10 пики.jpg" alt="10 spades"/>`,
  `<img class="game__card" src="./assets/images/9 пики.jpg" alt="9 spades"/>`,
  `<img class="game__card" src="./assets/images/8 пики.jpg" alt="8 spades"/>`,
  `<img class="game__card" src="./assets/images/7 пики.jpg" alt="7 spades"/>`,
  `<img class="game__card" src="./assets/images/6 пики.jpg" alt="6 spades"/>`,

  `<img class="game__card" src="./assets/images/туз черви.jpg" alt="A hearts"/>`,
  `<img class="game__card" src="./assets/images/король черви.jpg" alt="K hearts"/>`,
  `<img class="game__card" src="./assets/images/дама черви.jpg" alt="Q hearts"/>`,
  `<img class="game__card" src="./assets/images/валет черви.jpg" alt="J hearts"/>`,
  `<img class="game__card" src="./assets/images/10 черви.jpg" alt="10 hearts"/>`,
  `<img class="game__card" src="./assets/images/9 черви.jpg" alt="9 hearts"/>`,
  `<img class="game__card" src="./assets/images/8 черви.jpg" alt="8 hearts"/>`,
  `<img class="game__card" src="./assets/images/7 черви.jpg" alt="7 hearts"/>`,
  `<img class="game__card" src="./assets/images/6 черви.jpg" alt="6 hearts"/>`,

  `<img class="game__card" src="./assets/images/туз бубны.jpg" alt="A diamonds"/>`,
  `<img class="game__card" src="./assets/images/король бубны.jpg" alt="K diamonds"/>`,
  `<img class="game__card" src="./assets/images/дама бубны.jpg" alt="Q diamonds"/>`,
  `<img class="game__card" src="./assets/images/валет бубны.jpg" alt="J diamonds"/>`,
  `<img class="game__card" src="./assets/images/10 бубны.jpg" alt="10 diamonds"/>`,
  `<img class="game__card" src="./assets/images/9 бубны.jpg" alt="9 diamonds"/>`,
  `<img class="game__card" src="./assets/images/8 бубны.jpg" alt="8 diamonds"/>`,
  `<img class="game__card" src="./assets/images/7 бубны.jpg" alt="7 diamonds"/>`,
  `<img class="game__card" src="./assets/images/6 бубны.jpg" alt="6 diamonds"/>`,

  `<img class="game__card" src="./assets/images/туз крести.jpg" alt="A clubs"/>`,
  `<img class="game__card" src="./assets/images/король крести.jpg" alt="K clubs"/>`,
  `<img class="game__card" src="./assets/images/дама крести.jpg" alt="Q clubs"/>`,
  `<img class="game__card" src="./assets/images/валет крести.jpg" alt="J clubs"/>`,
  `<img class="game__card" src="./assets/images/10 крести.jpg" alt="10 clubs"/>`,
  `<img class="game__card" src="./assets/images/9 крести.jpg" alt="9 clubs"/>`,
  `<img class="game__card" src="./assets/images/8 крести.jpg" alt="8 clubs"/>`,
  `<img class="game__card" src="./assets/images/7 крести.jpg" alt="7 clubs"/>`,
  `<img class="game__card" src="./assets/images/6 крести.jpg" alt="6 clubs"/>`,
];
// const suits = ['черви', 'бубны', 'крести', 'пики'];
// const ranks = ['6', '7', '8', '9', '10', 'Q', 'K', 'J', 'A'];

let cardsArr = []; // Массив для хранения сгенерированных карт
let selectedDifficulty = "1"; // Уровень сложности по умолчанию
let flippedCards = []; // Массив для хранения перевернутых карт
let matchedCards = []; // Массив для хранения совпавших карт
let gameStarted = false; // Флаг для проверки начала игры
let startTime; // Время начала игры

// Функция для перемешивания массива
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Функция для генерации карт
function generateCards(difficulty) {
  cards = [];
  const totalPairs = difficulty === "1" ? 6 : difficulty === "2" ? 12 : 18;
  const selectedCards = suits.slice(0, totalPairs);
  // const selectedSuits = suits.slice(0, totalPairs);
  // const selectedRanks = ranks.slice(0, totalPairs);

  for (let i = 0; i < totalPairs; i++) {
    const card1 = { cards: selectedCards[i] };
    const card2 = { cards: selectedCards[i] };
    // const card1 = { suit: selectedSuits[i], rank: selectedRanks[i] };
    // const card2 = { suit: selectedSuits[i], rank: selectedRanks[i] };
    cards.push(card1, card2);
  }

  shuffleArray(cards);
}

const cardsArray = (numbers) => {
  for (let i = 0; i < numbers; i++) {
    cardsArr.push(
      `<img class="game__card" src="./assets/images/рубашка.jpg" alt="card"/>`
    );
  }
};

export const Game = (app) => {
  // опции сложности
  switch (level) {
    case "1":
      cardsArray(6);
      break;
    case "2":
      cardsArray(12);
      break;
    case "3":
      cardsArray(18);
      break;
    default:
      break;
  }

  app.innerHTML = `
    <div class="container">
      <div class="game">
        <div class="header">
            <div class="timer">
                <div class="timer__text">
                    <div class="timer__text-min">min</div>
                    <div class="timer__text-sec">sec</div>
                </div>
                <div class="timer__counter">00.00</div>
            </div>
            <button class="new-game">Начать заново</button>
        </div>
        <main class="game-wrap">
            <div class="game__field">
                ${cardsArr.map((card) => card).join("")}
            </div>
        </main>
      </div>
    </div>
  `;
};
