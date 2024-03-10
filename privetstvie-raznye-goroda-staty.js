function sayHello(name, city, state) {
    const fullName = name.join(' '); // Объединяем элементы массива имени в одну строку с пробелами между ними
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}