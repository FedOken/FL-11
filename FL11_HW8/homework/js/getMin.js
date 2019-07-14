function getMin() {
    let minValue = arguments[0];
    for (let index = 1; index < arguments.length; index++) {
        if (minValue > arguments[index]) {
            minValue = arguments[index];
        }
    }
    return minValue;

}

console.log(getMin(-100, -50, 0 , 5, 2345, 123456));