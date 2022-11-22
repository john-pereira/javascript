arrayIntergers = [16, 25, 32, 44, 55, 62, 78, 84, 90, 104];

function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}
console.log(arrayIntergers);
console.log(calculateAverage(arrayIntergers));