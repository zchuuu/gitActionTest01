// computes a factorial of a given positive integer (양수에 대해서 팩토리얼 계산)
// version: 1 -> 2
function factorial(n) {     // 5! = 5 * 4 * 3 * 2 * 1 = 120

    // n이 음수인 경우
    if( n < 0 ) {
        throw new Error('n must be a positive integer');
    }


    // n이 0인 경우
    if( n === 0 ) {
        return 1;
    }

    // 재귀적 호출 -> 자기 자신을 호출하기 때문에
    return n * factorial(n - 1);
}

// factorial 함수를 다른 곳에서 쓸 수 있게 하기 위해서 exports를 했음.
module.exports = factorial;