function isInteger(number) {
    return ((Math.ceil(number) - number) > 0 === false);
}

console.log(isInteger(7.4));