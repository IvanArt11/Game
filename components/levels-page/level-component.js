export const levelsPage = () => {
    return `
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
                <button class="level__start">Старт</button>
            </form>
        </div>
    `;
};