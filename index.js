import { LevelsPage } from "./components/levels-page/level-component.js";
import { Game } from "./components/game/game.js";

const app = document.getElementById("root");
let page = "level";

export const goToPage = (newPage) => {
  page = newPage;
  renderApp();
};

const renderApp = () => {
  switch (page) {
        case "level":
            LevelsPage(app);
            break;
        case "Game":
            Game(app);
            break;
        default:
            console.log("Ошибка 404");
        break;
    }
};

renderApp();