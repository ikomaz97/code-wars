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


function getChar(c){
    return String.fromCharCode(c);
}

function combat(health, damage) {
    return health < damage ? 0 : health - damage


}

function xor(a, b) {
    if ( a === false && b === false ) return false;
    else if ( a === true && b === false ) return true;
    else if ( a === false && b === true ) return true;
    else if  ( a === true && b === true ) return false;
}

function xor(a, b) {
    return a != b;
}
