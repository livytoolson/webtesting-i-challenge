const { success, fail, repair } = require('./enhancer.js');

const badItem = {
    name: 'Bad Item',
    durability: 14, // 0 - 100
    enhancement: 1 // 0 - 20
}

const goodItem = {
    name: 'Good Item',
    durability: 95,
    enhancement: 20
}

describe('sanity check', () => {
    it('is working', () => {
        expect(2 + 2).toBe(4)
    })
})

describe('success()', () => {
    it('should increase enhancement by 1', () => {
        expect(success(badItem).enhancement).toEqual(2)
    })
    it('should not increase enhancement if enhancement level is 20', () => {
        expect(success(goodItem).enhancement).toBe(20)
    })
    it('should not change durability', () => {
        expect(success(goodItem).durability).toBe(95)
        expect(success(badItem).durability).toBe(14)
    }) 
})

describe('fail()', () => {
    it('should decrease durability by 5 if enhancement level is less than 15', () => {
        expect(fail(badItem).durability).toEqual(9)
    })
    it('should decrease durability by 10 if enhancement level is greater than 15', () => {
        expect(fail(goodItem).durability).toBe(85)
    })
    it('should decrease enhancement by 1 if enhancement level is greater than 16', () => {
        expect(fail(goodItem).enhancement).toBe(19)
    })
})

describe('repair()', () => {
    it('should return an item with durability of 100', () => {
        expect(repair(badItem).durability).toBe(100)
    })
})