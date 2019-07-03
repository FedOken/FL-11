let a = prompt('First triangle side.');
let b = prompt('Second triangle side.');
let c = prompt('Third triangle side.');

a = Number(a);
b = Number(b);
c = Number(c);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid data');
} else {
    if (a + b > c && b + c > a && a + c > b) {
        if(a === b && a === c && b===c) {
            console.log('Eequivalent triangle');
        } else if (a === b || b === c || a === c) {
            console.log('Isosceles triangle');
        } else {
            console.log('Normal triangle');
        }
    } else {
        console.log('Triangle doesn’t exist');
    }
}
