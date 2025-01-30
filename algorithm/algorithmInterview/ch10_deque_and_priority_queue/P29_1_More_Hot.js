function solution(n, k) {
    return n.toString(k)
        .split('0')
        .filter(s => s && isPrimeNumber(s))
        .length;
}

function isPrimeNumber(n) {
    if (n == 1 || (n != 2 && n % 2 === 0)) {
        return false;
    }

    for (var i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}