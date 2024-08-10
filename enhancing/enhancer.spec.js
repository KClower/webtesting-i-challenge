const enhancer = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {

    describe('repair()', () => {
        it('should restore durability to 100', () => {
            const item = { name: 'Armor', durability: 50, enhancement: 10 };
            const repairedItem = enhancer.repair(item);
            expect(repairedItem.durability).toBe(100);
        });
    });

    describe('success()', () => {
        it('should increase enhancement by 1 if less than 20', () => {
            const item = { name: 'Armor', durability: 50, enhancement: 10 };
            const enhancedItem = enhancer.success(item);
            expect(enhancedItem.enhancement).toBe(11);
        });

        it('should not change enhancement if it is 20', () => {
            const item = { name: 'Armor', durability: 50, enhancement: 20 };
            const enhancedItem = enhancer.success(item);
            expect(enhancedItem.enhancement).toBe(20);
        });

        it('should not change durability on success', () => {
            const item = { name: 'Armor', durability: 50, enhancement: 10 };
            const enhancedItem = enhancer.success(item);
            expect(enhancedItem.durability).toBe(50);
        });
    });

    describe('fail()', () => {
        it('should decrease durability by 5 if enhancement is less than 15', () => {
            const item = { name: 'Armor', durability: 50, enhancement: 10 };
            const failedItem = enhancer.fail(item);
            expect(failedItem.durability).toBe(45);
        });

        it('should decrease durability by 10 if enhancement is 15 or more', () => {
            const item = { name: 'Armor', durability: 50, enhancement: 15 };
            const failedItem = enhancer.fail(item);
            expect(failedItem.durability).toBe(40);
        });

        it('should decrease enhancement by 1 if enhancement is greater than 16', () => {
            const item = { name: 'Armor', durability: 50, enhancement: 18 };
            const failedItem = enhancer.fail(item);
            expect(failedItem.enhancement).toBe(17);
        });
    });


})