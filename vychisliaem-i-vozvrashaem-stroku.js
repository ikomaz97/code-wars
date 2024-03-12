function derive(coefficient, exponent) {
    let result = coefficient * exponent;
    let newExponent = exponent - 1;

    if (newExponent === 1) {
        return `${result}x`; // Если новый показатель степени равен 1, возвращаем только коэффициент с переменной x
    } else {
        return `${result}x^${newExponent}`; // Иначе возвращаем строку в формате "коэффициентx^показатель"
    }
}