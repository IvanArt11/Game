import { it, expect, describe } from '@jest/globals'
import { getSuit, getRank, fillCardsArray } from '../components/game/game'

describe('getSuit', () => {
    it('should return "spades" when the input is 1', () => {
        const result = getSuit(1)
        expect(result).toBe('spades')
    })

    it('should return "hearts" when the input is 2', () => {
        const result = getSuit(2)
        expect(result).toBe('hearts')
    })

    it('should return "diamonds" when the input is 3', () => {
        const result = getSuit(3)
        expect(result).toBe('diamonds')
    })

    it('should return "clubs" when the input is 4', () => {
        const result = getSuit(4)
        expect(result).toBe('clubs')
    })

    it('should return "error" when the input is not 1, 2, 3, or 4', () => {
        const result = getSuit(5)
        expect(result).toBe('error')
    })
})

describe('getRank', () => {
    it('should return "six" when the input is 6', () => {
        const result = getRank(6)
        expect(result).toBe('six')
    })

    it('should return "seven" when the input is 7', () => {
        const result = getRank(7)
        expect(result).toBe('seven')
    })

    it('should return "eight" when the input is 8', () => {
        const result = getRank(8)
        expect(result).toBe('eight')
    })

    it('should return "nine" when the input is 9', () => {
        const result = getRank(9)
        expect(result).toBe('nine')
    })

    it('should return "ten" when the input is 10', () => {
        const result = getRank(10)
        expect(result).toBe('ten')
    })

    it('should return "jack" when the input is 11', () => {
        const result = getRank(11)
        expect(result).toBe('jack')
    })

    it('should return "queen" when the input is 12', () => {
        const result = getRank(12)
        expect(result).toBe('queen')
    })

    it('should return "king" when the input is 13', () => {
        const result = getRank(13)
        expect(result).toBe('king')
    })

    it('should return "ace" when the input is 14', () => {
        const result = getRank(14)
        expect(result).toBe('ace')
    })

    it('should return "error" when the input is not between 6 and 14', () => {
        const result = getRank(5)
        expect(result).toBe('error')
    })
})

describe('fillCardsArray', () => {
    it('should generate the level easy of unique cards', () => {
        const numbers = 6
        const arrCards: Array<string> = []
        fillCardsArray(numbers, arrCards)

        expect(arrCards.length).toBe(numbers)
        expect(new Set(arrCards).size).toBe(numbers / 2)
    })

    it('should generate the level medium of unique cards', () => {
        const numbers = 12
        const arrCards: Array<string> = []
        fillCardsArray(numbers, arrCards)

        expect(arrCards.length).toBe(numbers)
        expect(new Set(arrCards).size).toBe(numbers / 2)
    })

    it('should generate the level hard of unique cards', () => {
        const numbers = 18
        const arrCards: Array<string> = []
        fillCardsArray(numbers, arrCards)

        expect(arrCards.length).toBe(numbers)
        expect(new Set(arrCards).size).toBe(numbers / 2)
    })

    it('should generate the specified number of unique cards', () => {
        const numbers = 8
        const arrCards: Array<string> = []
        fillCardsArray(numbers, arrCards)

        expect(arrCards.length).toBe(numbers)
        expect(new Set(arrCards).size).toBe(numbers / 2)
    })

    it('should generate 72 unique cards when numbers is greater than 72', () => {
        const numbers = 100 // Choose a value greater than 72
        const arrCards: string[] = []
        fillCardsArray(numbers, arrCards)

        expect(arrCards.length).toBe(72)
        expect(new Set(arrCards).size).toBe(72 / 2)
    })

    it('should not generate any cards when numbers is 0', () => {
        const numbers = 0
        const arrCards: string[] = []
        fillCardsArray(numbers, arrCards)

        expect(arrCards.length).toBe(0)
    })

    it('should not generate any cards when numbers is negative', () => {
        const numbers = -10 // Choose a negative value
        const arrCards: string[] = []
        fillCardsArray(numbers, arrCards)

        expect(arrCards.length).toBe(0)
    })
})
