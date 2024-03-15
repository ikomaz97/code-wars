function apple(x){
    return Math.pow(x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ;
}

const   getSize = (width, height, depth) => {
    let area = 2 * (width * height + height * depth + width * depth);
    let volume = width * height * depth;
    let arr =[area, volume];
    return arr;
}