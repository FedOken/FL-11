function addOne(x) {
    return x * 2;
}

function pipe() {
    let result = arguments[0];
    for (let index = 1; index < arguments.length; index++) {
        result = arguments[index](result);
    }

    return result;
}

console.log(pipe(1, addOne, addOne, addOne));

