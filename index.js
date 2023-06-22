import { DifficultyPage } from './components/difficulty/difficulty-component.js'
import { Game } from './components/game/game.js'

const app = document.getElementById('root')
let page = 'Difficulty'

export const goToPage = (newPage) => {
    page = newPage
    renderApp()
}

const renderApp = () => {
    switch (page) {
        case 'Difficulty':
            DifficultyPage(app)
            break
        case 'Game':
            Game(app)
            break
        default:
            console.log('404')
            break
    }
}

// start
renderApp()
