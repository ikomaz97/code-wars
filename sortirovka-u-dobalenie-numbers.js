

// Похоже, какой-то сантехник-хулиган и его брат снова бегают и портят ваши сцены.
//
//     pipesПрежде чем вы начнете получать жалобы, необходимо исправить соединение этапов вашего уровня .
//
//     Верны pipes, когда каждое pipeследующее за первым 1больше предыдущего.
//
//     Задача
// Учитывая список уникальных объектов, numbersотсортированный в порядке возрастания, верните новый список так, чтобы значения увеличивались на 1 для каждого индекса от минимального значения до максимального значения (оба включены).
//
// Пример
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8


function pipeFix(numbers){
    numbers.sort(function(a, b) { return a - b; });
    const result = [];
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        result.push(i);
    }
    return result;

}

// Определите функцию, которая удаляет дубликаты из массива неотрицательных чисел и возвращает их в результате.
//
//     Порядок последовательности должен оставаться прежним.
//
//     Примеры:
//
// Input -> Output
//     [1, 1, 2] -> [1, 2]
//     [1, 2, 1, 1, 3, 2] -> [1, 2, 3]



function distinct(a) {
    return [...new Set(a)];
}




function multiTable(number) {
    let result = '';

    for (let i = 1; i <= 10; i++) {
        result += `${i} * ${number} = ${i * number}`;
        if (i < 10) {
            result += '\n'; // Добавляем символ перевода строки, кроме последней строки
        }
    }

    return result;
}

function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
}


const main = (verb, noun) => verb + noun;





