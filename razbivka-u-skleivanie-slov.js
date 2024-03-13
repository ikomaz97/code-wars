const shortcut = (string) => {
    return string.split("").filter(el => !['a', 'e', 'i', 'o', 'u'].includes(el)).join("");
}

function shortcut(string){
    return string.replace(/[aeiou]/g,'')

}

function cubeChecker(volume, side){
    let  c = volume % side
    switch
        case
        (volume <= 0 && side <= 0 || volume <= 0 || side <= 0) {
            return false;
        }
        case (c === 0) {
            return true;
        }

        default "No"


};