module.exports = function getZerosCount(number, base) {
    var count = 0,
        primeNumbers = [],
        maxPrimeDivisor = 0;

    function isPrimeNumber(n) {

        if (n === 1) {
            return false;
        } else if (n === 2) {
            return true;
        } else {
            for (var x = 2; x < n; x++) {
                if (n % x === 0) {
                    return false;
                }
            }
            return true;
        }
    }

    for (let i = 2; i <= base; i++) {
        if (isPrimeNumber(i)) {
            primeNumbers.push(i);
        }
    }

    for (let i = 0; i <= base; i++) {
        if (base % primeNumbers[i] === 0) {
            maxPrimeDivisor = primeNumbers[i];
        }
    }

    while (number > 0) {
        number = Math.floor(number / maxPrimeDivisor);
        count += number;
    }

    return count;
}