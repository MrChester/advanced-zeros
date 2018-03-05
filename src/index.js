module.exports = function getZerosCount(number, base) {
    var count = 0,
        primeNumbers = [],
        powerOfTwo = 0,
        maxPrimeDivisor;

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

    for (let i = 2; i < 257; i++) {
        if (isPrimeNumber(i)) {
            primeNumbers.push(i);
        }
    }

    for (let i = 0; primeNumbers[i] <= base; i++) {
        if (base % primeNumbers[i] === 0) {
            maxPrimeDivisor = primeNumbers[i];
        }
    }

    for (let i = 1; i <= base; i++) {
        if (Math.pow(maxPrimeDivisor, i) <= base) {
            powerOfTwo++;
        }
    }

    for (let i = 1; i <= number; i++) {
        while (Math.pow(maxPrimeDivisor, i) < number) {
            number = Math.floor(number / Math.pow(maxPrimeDivisor, i));
            count += number;
        }

    }

    return Math.floor(count / powerOfTwo);
}