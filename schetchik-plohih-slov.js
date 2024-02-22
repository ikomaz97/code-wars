function well(x) {
    let goodCount = 0;

    for (let idea of x) { // Changed variable name from x to idea
        if (idea === 'good') {
            goodCount++;
        }
    }

    if (goodCount === 0) {
        return 'Fail!';
    } else if (goodCount === 1 || goodCount === 2) {
        return 'Publish!';
    } else {
        return 'I smell a series!';
    }
}


const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' :
        good_count < 3 ? 'Publish!' : 'I smell a series!';
}