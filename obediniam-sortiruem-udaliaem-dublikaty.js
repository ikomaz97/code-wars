function mergeArrays(arr1, arr2) {
    // Объединяем оба массива и удаляем дубликаты
    let mergedArray = [...new Set([...arr1, ...arr2])];

    // Сортируем объединенный массив
    mergedArray.sort((a, b) => a - b);

    return mergedArray;
}