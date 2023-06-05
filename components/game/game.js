import { level } from "../levels-page/level-component.js";

export const Game = (app) => {
  app.innerHTML = `
    <div class="container">
      <h1 style="color: yellow"> Игровой экран. Выбран уровень сложности игры: ${level}</h1>
    </div>
  `;
};