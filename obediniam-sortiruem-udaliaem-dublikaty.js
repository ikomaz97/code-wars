function mergeArrays(arr1, arr2) {
    // Объединяем оба массива и удаляем дубликаты
    let mergedArray = [...new Set([...arr1, ...arr2])];

    // Сортируем объединенный массив
    mergedArray.sort((a, b) => a - b);

    return mergedArray;
}

const warnTheSheep = (queue) => {
    const wolfIndex = queue.indexOf("wolf");
    return wolfIndex === queue.length - 1 ?
        "Pls go away and stop eating my sheep" :
        `Oi! Sheep number ${queue.length - wolfIndex - 1}! You are about to be eaten by a wolf!`;
}

var findAverage = function (nums) {
    let res = nums.length;
    let plus = nums.reduce((acc,el)=> {
        return acc+el
    })
    return plus / Math.floor(res)
}