import { level } from "../levels-page/level-component.js";

// Константы для хранения значений мастей и рангов карт
const suits = ['черви', 'бубны', 'крести', 'пики'];
const ranks = ['6', '7', '8', '9', '10', 'Q', 'K', 'J', 'A'];

let cardsArr = []; // Массив для хранения сгенерированных карт
let selectedDifficulty = '1'; // Уровень сложности по умолчанию
let flippedCards = []; // Массив для хранения перевернутых карт
let matchedCards = []; // Массив для хранения совпавших карт
let gameStarted = false; // Флаг для проверки начала игры
let startTime; // Время начала игры

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
