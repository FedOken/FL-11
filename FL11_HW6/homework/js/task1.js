let a1 = prompt('Enter the coordinates of point A (X axis), start point.');
let a2 = prompt('Enter the coordinates of point A (Y axis), start point.');
let b1 = prompt('Enter the coordinates of point B (X axis), end point.');
let b2 = prompt('Enter the coordinates of point B (Y axis), end point.');
let c1 = prompt('Enter the coordinates of point C (X axis), check point.');
let c2 = prompt('Enter the coordinates of point C (Y axis), check point.');

a1 = Number(a1);
a2 = Number(a2);
b1 = Number(b1);
b2 = Number(b2);
c1 = Number(c1);
c2 = Number(c2);

if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c2)) {
    console.log('Invalid data');
} else {
    let center_x = (a1 + b1)/2;
    let center_y = (a2 + b2)/2;

    if (center_x === c1 && center_y === c2) {
        console.log(true);
    } else {
        console.log(false);
    }
}
