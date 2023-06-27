import { DifficultyPage } from './components/difficulty/difficulty-component'
import { Game } from './components/game/game'
import * as _ from 'lodash'

const app: HTMLElement = document.getElementById('root')!
let page = 'Difficulty'

export const goToPage = (newPage: string) => {
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
