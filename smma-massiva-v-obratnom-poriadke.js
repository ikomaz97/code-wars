function sumOfDifferences(arr) {
    // Если массив пуст или содержит только один элемент, вернуть 0
    if (arr.length <= 1) {
        return 0;
    }

    // Сортируем массив в порядке убывания
    arr.sort((a, b) => b - a);

    let sum = 0;
    // Проходим по массиву и находим сумму разностей между последовательными парами
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i - 1] - arr[i];
    }

    return sum;
}

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}



sumOfDifferences = arr => arr.length <= 1 ? 0 : Math.max(...arr) - Math.min(...arr);
