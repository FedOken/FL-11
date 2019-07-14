function reverseNumber(number) {
    let category = 10;
    let remainder ;
    let remainder_clear;
    let reverse = 0;

    //Variable for eslint
    let loop_continue = true;

    while (loop_continue) {
        remainder = number % category;
        remainder_clear = remainder / (category / 10);

        //For last number
        if(remainder === number) {
            reverse += remainder_clear;
            break;
        }

        //Update number
        number -= remainder ;
        //Set reverse value
        reverse = (reverse + remainder_clear) * 10;

        //Increment category
        category *= 10;
    }
    return reverse;
}

console.log(reverseNumber(-123));
