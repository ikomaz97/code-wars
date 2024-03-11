function sayHello(name, city, state) {
    const fullName = name.join(' '); // Объединяем элементы массива имени в одну строку с пробелами между ними
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}

const rainAmount = (mm) =>{
    if (rainAmount === 40) {
        return "You need to give your plant " + {rainAmount: 40} + " mm of water"
    }
    else   {
        return "Your plant has had more than enough water for today!"
    };
}