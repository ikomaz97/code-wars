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