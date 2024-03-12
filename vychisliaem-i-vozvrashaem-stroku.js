function derive(coefficient, exponent) {
    let result = coefficient * exponent;
    let newExponent = exponent - 1;

    if (newExponent === 0) {
        return `${result}`;
    } else if (newExponent === 1) {
        return `${result}x^1`;
    } else {
        return `${result}x^${newExponent}`;
    }
}

function derive(coefficient,exponent) {
    return `${coefficient*exponent}x^${exponent-1}`
}