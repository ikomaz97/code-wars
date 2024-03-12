function correct(string) {
    return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');
}

function stringClean(s){
    return s.replace(/[0123456789]/g,'')
}