// 팩토리얼 함수가 잘 동작하는지 '테스트 하기 위한 코드'임
const factorial = require('../src/index');

// describe는 jest를 이용하기 위해서..
describe('factorial function', () => {
    it('correctly computes factorial of a positive integer number', () => {
        expect(factorial(3)).toEqual(6);
        expect(factorial(5)).toEqual(120);
    });


    it('throws an error if a negative input is provided', () => {
        expect(() => { 
            factorial(-1);
        }).toThrow('n must be a positive integer');
    });
});