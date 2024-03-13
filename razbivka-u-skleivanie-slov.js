const shortcut = (string) => {
    return string.split("").filter(el => !['a', 'e', 'i', 'o', 'u'].includes(el)).join("");
}

function shortcut(string){
    return string.replace(/[aeiou]/g,'')

}

function include(arr, item) {
    return arr.includes(item);
}