function expressionMatter(a, b, c) {
    const options = [
        a + b + c,
        a * b * c,
        a * (b + c),
        (a + b) * c,
        a + b * c,
        a * b + c
    ];

    return Math.max(...options);
}