module.exports = function getZerosCount(number, base) {
    var count = 0;

    while (number > 0) {
        number = Math.floor(number / 5);
        count += number;
    }

    return count;
}