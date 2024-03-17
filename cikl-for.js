function sumMul(n, m) {
    if (n <= 0 || m <= 0) {
        return "INVALID";
    }

    let sum = 0;
    for (let i = n; i < m; i += n) {
        sum += i;
    }
    return sum;
}

function sumMul(n,m){
    if(m <= 0 || n <= 0 ) {return "INVALID";}
    let res = 0;
    for(let i = 0; i < m; i+= n){
        res += i;}
    return res;
}