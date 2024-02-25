function nameShuffler(str) {
    let arr = str.split(" "); // Разбиваем строку на массив слов
    arr = arr.reverse(); // Меняем порядок элементов массива
    return arr.join(" "); // Объединяем элементы массива обратно в строку
}