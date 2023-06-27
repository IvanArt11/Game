import { goToPage } from '../../index'

const app: HTMLElement = document.getElementById('root')!

interface Time {
    min: string
    sec: string
}

export const EndGame = (isWin: Boolean, time: Time) => {
    app.innerHTML += `
        <div class="end">
            <div class="end__wrap">
                <img class="end__image" src="./images/${
                    isWin ? 'win' : 'lose'
                }-game.png" alt="${isWin ? 'win' : 'lose'} game">
                <p class="end__status">${
                    isWin ? 'Вы выиграли!' : 'Вы проиграли!'
                }</p>
                <p class="end__time-text">Затраченое время</p>
                <p class="end__time">${time.min}.${time.sec}</p>
                <button class="end__again">Играть снова</button>
            </div>
        </div>
    `
    const againButton = document.querySelector('.end__again')
    againButton?.addEventListener('click', () => {
        goToPage('Difficulty')
    })
}
