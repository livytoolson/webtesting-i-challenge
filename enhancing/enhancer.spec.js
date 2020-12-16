const { success, fail, repair } = require('./enhancer.js');

const badItem = {
    name: 'Bad Item',
    durability: 5, // 0 - 100
    enhancemnet: 0 // 0 - 20
}

const goodItem = {
    name: 'Good Item',
    durability: 95,
    enhancemnet: 20
}

describe('sanity check', () => {
    it('should perform a sanity check', () => {
        expect(true).toBe(true)
    })
})

describe('success', () => {
    it('should increase enhancement by 1', () => {
        expect(success(badItem).enhancemnet).toBe(1)
    })
    it('should not increase enhancement if enhancement level is 20', () => {
        expect(success(goodItem).enhancemnet).toBe(20)
    })
    it('should not change durability', () => {
        expect(success(goodItem).durability).toBe(95)
        expect(success(badItem).durability).toBe(5)
    }) 
})

describe('fail', () => {
    it('should decrease durability by 5 if enhancement level is less than 15', () => {
        expect(fail(badItem).durability).toBe(0)
    })
    it('should decrease durability by 10 if enhancement level is greater than 15', () => {
        expect(fail(goodItem).durability).toBe(85)
    })
    it('should decrease enhancement by 1 if enhancement level is greater than 16', () => {
        expect(fail(goodItem).durability).toBe(19)
    })
})

describe('repair', () => {
    it('should return an item with durability of 100', () => {
        expect(repair(badItem).durability).toBe(100)
    })
})
