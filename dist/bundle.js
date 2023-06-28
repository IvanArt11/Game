/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/difficulty/difficulty-component.ts":
/*!*******************************************************!*\
  !*** ./components/difficulty/difficulty-component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DifficultyPage: () => (/* binding */ DifficultyPage),
/* harmony export */   difficulty: () => (/* binding */ difficulty)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./index.ts");

var difficulty = 0;
var DifficultyPage = function (app) {
    difficulty = 0;
    if (app)
        app.innerHTML = "\n  <div class=\"container\">\n    <div class=\"difficulty\">\n      <h2 class=\"difficulty__text\">\u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C</h2>\n      <form class=\"difficulty__form\">\n        <div class=\"difficulty__value-wrap\">\n          <label class=\"difficulty__value\">\n            <input type=\"radio\" name=\"difficulty\" value=\"1\">\n            <span>1</span>\n          </label>\n          <label class=\"difficulty__value\">\n            <input type=\"radio\" name=\"difficulty\" value=\"2\">\n            <span>2</span>\n          </label>\n          <label class=\"difficulty__value\">\n            <input type=\"radio\" name=\"difficulty\" value=\"3\">\n            <span>3</span>\n          </label>\n        </div>\n        <button type=\"submit\" class=\"difficulty__start\">\u0421\u0442\u0430\u0440\u0442</button>\n      </form>\n      </div>\n  </div>\n";
    // Перехватываем событие отправки формы
    var formElement = document.querySelector('.difficulty__form');
    if (formElement)
        formElement.addEventListener('submit', function (event) {
            // Отменяем стандартное поведение формы
            event.preventDefault();
            var radioButtons = Array.from(document.querySelectorAll('.difficulty__value input[type="radio"]'));
            for (var _i = 0, radioButtons_1 = radioButtons; _i < radioButtons_1.length; _i++) {
                var radioButton = radioButtons_1[_i];
                if (radioButton.checked) {
                    difficulty = Number(radioButton.value);
                    (0,_index__WEBPACK_IMPORTED_MODULE_0__.goToPage)('Game');
                    break;
                }
            }
            if (!difficulty) {
                alert('выберите сложность');
            }
        });
    // Рисуем видимость выбраного компонента
    var difValues = document.querySelectorAll('.difficulty__value');
    var startButton = document.querySelector('.difficulty__start');
    difValues.forEach(function (difValue) {
        difValue.addEventListener('click', function () {
            var _a;
            startButton === null || startButton === void 0 ? void 0 : startButton.classList.add('new-game--active');
            (_a = document
                .querySelector('.difficulty__value--active')) === null || _a === void 0 ? void 0 : _a.classList.remove('difficulty__value--active');
            difValue.classList.add('difficulty__value--active');
        });
    });
};


/***/ }),

/***/ "./components/end-game/end-game.ts":
/*!*****************************************!*\
  !*** ./components/end-game/end-game.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndGame: () => (/* binding */ EndGame)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./index.ts");

var app = document.getElementById('root');
var EndGame = function (isWin, time) {
    app.innerHTML += "\n        <div class=\"end\">\n            <div class=\"end__wrap\">\n                <img class=\"end__image\" src=\"./images/".concat(isWin ? 'win' : 'lose', "-game.png\" alt=\"").concat(isWin ? 'win' : 'lose', " game\">\n                <p class=\"end__status\">").concat(isWin ? 'Вы выиграли!' : 'Вы проиграли!', "</p>\n                <p class=\"end__time-text\">\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F</p>\n                <p class=\"end__time\">").concat(time.min, ".").concat(time.sec, "</p>\n                <button class=\"end__again\">\u0418\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430</button>\n            </div>\n        </div>\n    ");
    var againButton = document.querySelector('.end__again');
    againButton === null || againButton === void 0 ? void 0 : againButton.addEventListener('click', function () {
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.goToPage)('Difficulty');
    });
};


/***/ }),

/***/ "./components/game/game.ts":
/*!*********************************!*\
  !*** ./components/game/game.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game),
/* harmony export */   fillCardsArray: () => (/* binding */ fillCardsArray),
/* harmony export */   getRank: () => (/* binding */ getRank),
/* harmony export */   getSuit: () => (/* binding */ getSuit)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./index.ts");
/* harmony import */ var _difficulty_difficulty_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../difficulty/difficulty-component */ "./components/difficulty/difficulty-component.ts");
/* harmony import */ var _end_game_end_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../end-game/end-game */ "./components/end-game/end-game.ts");



var arrCards = [];
var getSuit = function (num) {
    switch (num) {
        case 1:
            return 'spades';
        case 2:
            return 'hearts';
        case 3:
            return 'diamonds';
        case 4:
            return 'clubs';
        default:
            return 'error';
    }
};
var getRank = function (num) {
    switch (num) {
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 10:
            return 'ten';
        case 11:
            return 'jack';
        case 12:
            return 'queen';
        case 13:
            return 'king';
        case 14:
            return 'ace';
        default:
            return 'error';
    }
};
var checkTheWin = function () {
    var cards = Array.from(document.querySelectorAll('.game__card'));
    for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
        var card = cards_1[_i];
        if (card.dataset.status !== 'open') {
            return false;
        }
    }
    return true;
};
var checkTheCuple = function (firstOpenCard, secondOpenCard) {
    var _a, _b;
    var min = document.querySelector('.timer__counter--min').innerHTML;
    var sec = document.querySelector('.timer__counter--sec').innerHTML;
    if (firstOpenCard.value !== secondOpenCard.value) {
        (0,_end_game_end_game__WEBPACK_IMPORTED_MODULE_2__.EndGame)(false, { min: min, sec: sec });
    }
    else {
        (_a = firstOpenCard.nod) === null || _a === void 0 ? void 0 : _a.setAttribute('data-status', 'open');
        (_b = secondOpenCard.nod) === null || _b === void 0 ? void 0 : _b.setAttribute('data-status', 'open');
        if (checkTheWin()) {
            (0,_end_game_end_game__WEBPACK_IMPORTED_MODULE_2__.EndGame)(true, { min: min, sec: sec });
        }
        else {
            firstOpenCard.value = '';
            firstOpenCard.nod = null;
            secondOpenCard.value = '';
            secondOpenCard.nod = null;
        }
    }
};
var startGame = function () {
    var firstOpenCard = {
        value: '',
        nod: null,
    };
    var secondOpenCard = {
        value: '',
        nod: null,
    };
    // актвируем кнопку Начать заново
    var newGame = document.querySelector('.new-game');
    newGame.classList.add('new-game--active');
    newGame.addEventListener('click', function () {
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.goToPage)('Difficulty');
    });
    // запуск таймера
    var min = document.querySelector('.timer__counter--min');
    var sec = document.querySelector('.timer__counter--sec');
    var second = '';
    var minute = '';
    setInterval(function () {
        second = (Number(sec.innerHTML) + 1).toString();
        if (Number(second) < 60) {
            sec.innerHTML = Number(second) < 10 ? '0' + second : second;
        }
        else {
            minute = (Number(min.innerHTML) + 1).toString();
            min.innerHTML = Number(minute) < 10 ? '0' + minute : minute;
            sec.innerHTML = '00';
        }
    }, 1000);
    // Ивент на клик карты
    var cards = document.querySelectorAll('.game__card');
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            // проверка, чтобы ивент не отрабатывал на уже открытые карты
            var htmlCard = card;
            if (htmlCard.dataset.status !== 'open') {
                htmlCard.setAttribute('src', "../../assets/images/".concat(htmlCard.dataset.value, ".jpg"));
                // если первая карта открыта переворачиваем вторую и проверяем пара ли это
                if (!firstOpenCard.value) {
                    firstOpenCard.value = htmlCard.dataset.value;
                    firstOpenCard.nod = htmlCard;
                }
                else {
                    secondOpenCard.value = htmlCard.dataset.value;
                    secondOpenCard.nod = htmlCard;
                    checkTheCuple(firstOpenCard, secondOpenCard);
                }
            }
        });
    });
};
var fillCardsArray = function (numbers, arrCards) {
    // генерация карт
    var rank = '';
    var suit = '';
    if (numbers > 72) {
        numbers = 72;
    }
    for (var i = 0; i < numbers / 2; i++) {
        // проверка на больше одной пары одинаковых карт в игре
        do {
            rank = getRank(Math.floor(Math.random() * 9) + 6);
            suit = getSuit(Math.floor(Math.random() * 4) + 1);
        } while (arrCards.includes("<img data-value=\"".concat(rank, "-of-").concat(suit, "\" class=\"game__card\" src=\"../../assets/images/").concat(rank, "-of-").concat(suit, ".jpg\" alt=\"card\"/>")));
        var card = "<img data-value=\"".concat(rank, "-of-").concat(suit, "\" class=\"game__card\" src=\"../../assets/images/").concat(rank, "-of-").concat(suit, ".jpg\" alt=\"card\"/>");
        // Поиск пустого случайного слота
        var index = Math.floor(Math.random() * numbers);
        var isFindSlot = false;
        do {
            if (!arrCards[index]) {
                arrCards[index] = card;
                isFindSlot = true;
            }
            else if (index === numbers - 1) {
                index = 0;
            }
            else {
                index++;
            }
        } while (!isFindSlot);
        // добавляем пару
        index = Math.floor(Math.random() * numbers);
        // поиск случайного места для пары
        isFindSlot = false;
        do {
            if (!arrCards[index]) {
                arrCards[index] = card;
                isFindSlot = true;
            }
            else if (index === numbers - 1) {
                index = 0;
            }
            else {
                index++;
            }
        } while (!isFindSlot);
    }
    // переворачиваем карты, рубашкой вверх
    setTimeout(function () {
        var cards = document.querySelectorAll('.game__card');
        cards.forEach(function (card) {
            card.setAttribute('src', '../../assets/images/dealer-shirt.jpg');
        });
    }, 5000);
};
var Game = function (app) {
    // опции сложности
    arrCards = [];
    switch (_difficulty_difficulty_component__WEBPACK_IMPORTED_MODULE_1__.difficulty) {
        case 1:
            fillCardsArray(6, arrCards);
            break;
        case 2:
            fillCardsArray(12, arrCards);
            break;
        case 3:
            fillCardsArray(18, arrCards);
            break;
        default:
            break;
    }
    app.innerHTML = "\n    <div class=\"container\">\n        <div class=\"game\">\n            <div class=\"header\">\n                <div class=\"timer\">\n                    <div class=\"timer__text\">\n                        <div class=\"timer__text-min\">min</div>\n                        <div class=\"timer__text-sec\">sec</div>\n                    </div>\n                    <div class=\"timer__counter\">\n                    <span class=\"timer__counter--min\">00</span>.<span class=\"timer__counter--sec\">00</span></div>\n                </div>\n                <button class=\"new-game\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</button>\n            </div>\n\n            <main class=\"game-wrap\">\n                <div class=\"game__field\">\n                    ".concat(arrCards.map(function (card) { return card; }).join(''), "\n                </div>\n            </main>\n        </div>\n    </div>\n  ");
    // Запуск игры, активность кнопок и запуск таймера после предпоказа карт
    setTimeout(startGame, 5000);
};


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   goToPage: () => (/* binding */ goToPage)
/* harmony export */ });
/* harmony import */ var _components_difficulty_difficulty_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/difficulty/difficulty-component */ "./components/difficulty/difficulty-component.ts");
/* harmony import */ var _components_game_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/game/game */ "./components/game/game.ts");


var app = document.getElementById('root');
var page = 'Difficulty';
var goToPage = function (newPage) {
    page = newPage;
    renderApp();
};
var renderApp = function () {
    switch (page) {
        case 'Difficulty':
            (0,_components_difficulty_difficulty_component__WEBPACK_IMPORTED_MODULE_0__.DifficultyPage)(app);
            break;
        case 'Game':
            (0,_components_game_game__WEBPACK_IMPORTED_MODULE_1__.Game)(app);
            break;
        default:
            console.log('404');
            break;
    }
};
// start
renderApp();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map