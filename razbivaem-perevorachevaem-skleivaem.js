function nameShuffler(str) {
    let arr = str.split(" "); // Разбиваем строку на массив слов
    arr = arr.reverse(); // Меняем порядок элементов массива
    return arr.join(" "); // Объединяем элементы массива обратно в строку
}

function reverse(string){
    return string.split(' ').reverse().join(' ');
}

function addFive(num) {
    var total = num + 5
    return total
}

function replace(s) {
    return s.replace(/[aeiouAEIOU]/g, "!");
}

function hello(name) {
    if (name && name !== "") {
        // Преобразуем первую букву в верхний регистр, а остальные в нижний
        name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        return "Hello, " + name + "!";
    } else {
        return "Hello, World!";
    }
}