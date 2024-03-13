function cubeChecker(volume, side) {
    switch (true) {
        case (volume <= 0 || side <= 0):
            return false;
        case (volume !== side * side * side):
            return false;
        default:
            return true;
    }
}