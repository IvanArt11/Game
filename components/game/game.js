import { goToPage } from '../../index.js'
import { difficulty } from '../difficulty/difficulty-component.js'

let arrCards = []
const getSuit = (num) => {
    switch (num) {
        case 1:
            return 'spades'
        case 2:
            return 'hearts'
        case 3:
            return 'diamonds'
        case 4:
            return 'clubs'
        default:
            return 'error'
    }
}
const getRank = (num) => {
    switch (num) {
        case 6:
            return 'six'
        case 7:
            return 'seven'
        case 8:
            return 'eight'
        case 9:
            return 'nine'
        case 10:
            return 'ten'
        case 11:
            return 'jack'
        case 12:
            return 'queen'
        case 13:
            return 'king'
        case 14:
            return 'ace'
        default:
            return 'error'
    }
}
const checkTheWin = () => {
    const cards = document.querySelectorAll('.game__card')
    for (let card of cards) {
        if (card.dataset.status !== 'open') {
            return false
        }
    }
    return true
}
const checkTheCuple = (firstOpenCard, secondOpenCard) => {
    if (firstOpenCard.value !== secondOpenCard.value) {
        alert('Вы проиграли')
        goToPage('Difficulty')
    } else {
        firstOpenCard.nod.setAttribute('data-status', 'open')
        secondOpenCard.nod.setAttribute('data-status', 'open')

        if (checkTheWin()) {
            alert('Вы победили')
            goToPage('Difficulty')
        } else {
            firstOpenCard.value = ''
            firstOpenCard.nod = null

            secondOpenCard.value = ''
            secondOpenCard.nod = null
        }
    }
}

const startGame = () => {
    let firstOpenCard = {
        value: '',
        nod: null,
    }
    let secondOpenCard = {
        value: '',
        nod: null,
    }
    // актвируем кнопку Начать заново
    const newGame = document.querySelector('.new-game')
    newGame.classList.add('new-game--active')
    newGame.addEventListener('click', () => {
        goToPage('Difficulty')
    })

    // запуск таймера
    const min = document.querySelector('.timer__counter--min')
    const sec = document.querySelector('.timer__counter--sec')

    let second = ''
    let minute = ''
    setInterval(() => {
        second = Number(sec.innerHTML) + 1
        if (second < 60) {
            sec.innerHTML = Number(second) < 10 ? '0' + second : second
        } else {
            minute = Number(min.innerHTML) + 1
            min.innerHTML = Number(minute) < 10 ? '0' + minute : minute
            sec.innerHTML = '00'
        }
    }, 1000)

    // Ивент на клик карты
    const cards = document.querySelectorAll('.game__card')
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            // проверка, чтобы ивент не отрабатывал на уже открытые карты
            if (card.dataset.status !== 'open') {
                card.setAttribute(
                    'src',
                    `../../assets/images/${card.dataset.value}.jpg`
                )
                // если первая карта открыта переворачиваем вторую и проверяем пара ли это
                if (!firstOpenCard.value) {
                    firstOpenCard.value = card.dataset.value
                    firstOpenCard.nod = card
                } else {
                    secondOpenCard.value = card.dataset.value
                    secondOpenCard.nod = card
                    checkTheCuple(firstOpenCard, secondOpenCard)
                }
            }
        })
    })
}
const fillCardsArray = (numbers) => {
    // генерация карт
    let rank = ''
    let suit = ''
    for (let i = 0; i < numbers / 2; i++) {
        // проверка на больше одной пары одинаковых карт в игре
        do {
            rank = getRank(Math.floor(Math.random() * 9) + 6)
            suit = getSuit(Math.floor(Math.random() * 4) + 1)
        } while (
            arrCards.includes(
                `<img data-value="${rank}-of-${suit}" class="game__card" src="../../assets/images/${rank}-of-${suit}.jpg" alt="card"/>`
            )
        )

        let card = `<img data-value="${rank}-of-${suit}" class="game__card" src="../../assets/images/${rank}-of-${suit}.jpg" alt="card"/>`
        arrCards.push(card)

        // добавляем пару
        let index = Math.floor(Math.random() * numbers) + 1

        // поиск случайного места для пары
        let isFindSlot = false
        while (!isFindSlot) {
            if (!arrCards[index]) {
                arrCards[index] = card
                isFindSlot = true
            } else if (index === numbers) {
                index = 1
            } else {
                index++
            }
        }
    }

    // переворачиваем карты, рубашкой вверх
    setTimeout(() => {
        const cards = document.querySelectorAll('.game__card')
        cards.forEach((card) => {
            card.setAttribute('src', '../../assets/images/dealer-shirt.jpg')
        })
    }, 5000)
}

export const Game = (app) => {
    // опции сложности
    arrCards = []
    switch (difficulty) {
        case '1':
            fillCardsArray(6)
            break
        case '2':
            fillCardsArray(12)
            break
        case '3':
            fillCardsArray(18)
            break
        default:
            break
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
                    <div class="timer__counter">
                    <span class="timer__counter--min">00</span>.<span class="timer__counter--sec">00</span></div>
                </div>
                <button class="new-game">Начать заново</button>
            </div>
            <main class="game-wrap">
                <div class="game__field">
                    ${arrCards.map((card) => card).join('')}
                </div>
            </main>
        </div>
    </div>
  `
    // Запуск игры, активность кнопок и запуск таймера после предпоказа карт
    setTimeout(startGame, 5000)
}
