import { levelsPage } from "./components/levels-page/level-component.js";

const app = document.getElementById("root");

const renderApp = () => {
    app.innerHTML= `
        <div class="container">
            ${levelsPage()}
        </div>
    `;
}

renderApp();