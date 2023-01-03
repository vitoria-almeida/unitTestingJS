//import function
const { sum } = require('./code')

describe('Math functions', () => {
    beforeAll(() => {
        console.log('before all')
    })
    beforeEach(() => {
        console.log('before each')
    })
    afterAll(() => {
        console.log('after all')
    })
    afterEach(() => {
        console.log('after each')
    })

    it('Sums 2 numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })
    it('Sums 2 numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })
    it('Sums 2 numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })
})
