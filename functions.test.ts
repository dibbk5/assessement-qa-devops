const {shuffleArray} = require('./utils')

let testArray = ['Bob', 'Ted', 'Joe']

describe('shuffleArray should', () => {
    test("shuffleArray is an array", () => {
        expect(Array.isArray(shuffleArray(testArray))).toBe(true)
    })
    test("the same length of array is returned as passed in", () => {
        expect(shuffleArray(testArray).length).toBe(testArray.length)
    })
})