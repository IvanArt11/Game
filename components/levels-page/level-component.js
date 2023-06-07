import { goToPage } from "/index.js";

export let level = 0;

export const LevelsPage = (app) => {
  app.innerHTML += `
        <div class="container">
            <div class="level">
                <h2 class="level__text">Выбери сложность</h2>
                <form class="level__form">
                    <div class="level__choosing">
                        <label class="level__value">
                            <input class="level__input" type="radio" name="level" value="1">
                            <span>1</span>
                        </label>

                        <label class="level__value">
                            <input class="level__input" type="radio" name="level" value="2">
                            <span>2</span>
                        </label>

                        <label class="level__value">
                            <input class="level__input" type="radio" name="level" value="3">
                            <span>3</span>
                        </label>
                    </div>
                    <button type="submit" class="level__start">Старт</button>
                </form>
            </div>
        </div>
    `;

  // Перехват события отправки формы
  document.querySelector(".level__form").addEventListener("submit", (event) => {
    //Отмена действия браузера
    event.preventDefault();

    const levelButtons = document.querySelectorAll(".level__input");
    for (let levelButton of levelButtons) {
      if (levelButton.checked) {
        level = levelButton.value;
        goToPage("Game");
        break;
      }
    }
    if (!level) {
      alert("Выбери сначала уровень сложности игры");
    }
  });
};
