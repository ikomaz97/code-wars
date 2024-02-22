const shortcut = (string) => {
    return string.split("").filter(el => !['a', 'e', 'i', 'o', 'u'].includes(el)).join("");
}