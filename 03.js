function findDifference(a, b) {
    let akyb = a.reduce((accumulator, currentValue) => accumulator * currentValue);
    let bkyb = b.reduce((accumulator, currentValue) => accumulator * currentValue);
    let c = Math.abs(akyb - bkyb);
    return c;
}