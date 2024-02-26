function problem(x){
    return typeof x !== 'number' ? "Error" : x * 50 + 6;
}


function peopleWithAgeDrink(age) {
    if (age < 14) {
        return "drink toddy";
    } else if (age < 18) {
        return "drink coke";
    } else if (age < 21) {
        return "drink beer";
    } else {
        return "drink whisky";
    }
}