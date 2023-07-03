import { goToPage } from '../../index'

export let difficulty = 0

export const DifficultyPage = (app: HTMLElement) => {
    difficulty = 0
    if (app)
        app.innerHTML = `
  <div class="container">
    <div class="difficulty">
      <h2 class="difficulty__text">Выбери сложность</h2>
      <form class="difficulty__form">
        <div class="difficulty__value-wrap">
          <label class="difficulty__value">
            <input type="radio" name="difficulty" value="1">
            <span>1</span>
          </label>
          <label class="difficulty__value">
            <input type="radio" name="difficulty" value="2">
            <span>2</span>
          </label>
          <label class="difficulty__value">
            <input type="radio" name="difficulty" value="3">
            <span>3</span>
          </label>
        </div>
        <button type="submit" class="difficulty__start">Старт</button>
      </form>
      </div>
  </div>
`

    // Перехватываем событие отправки формы
    const formElement = document.querySelector(
        '.difficulty__form'
    ) as HTMLElement
    if (formElement)
        formElement.addEventListener('submit', (event) => {
            // Отменяем стандартное поведение формы
            event.preventDefault()

            const radioButtons: HTMLInputElement[] = Array.from(
                document.querySelectorAll(
                    '.difficulty__value input[type="radio"]'
                )
            )
            for (let radioButton of radioButtons) {
                if (radioButton.checked) {
                    difficulty = Number(radioButton.value)
                    goToPage('Game')
                    break
                }
            }
            if (!difficulty) {
                alert('выберите сложность')
            }
        })

    // Рисуем видимость выбраного компонента
    const difValues = document.querySelectorAll('.difficulty__value')
    const startButton = document.querySelector('.difficulty__start')
    difValues.forEach((difValue) => {
        difValue.addEventListener('click', () => {
            startButton?.classList.add('new-game--active')
            document
                .querySelector('.difficulty__value--active')
                ?.classList.remove('difficulty__value--active')
            difValue.classList.add('difficulty__value--active')
        })
    })
}
