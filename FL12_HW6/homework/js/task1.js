/* eslint-disable no-magic-numbers */
// Your code goes here


let a = prompt('Enter the coefficients for the quadratic equation (ax ^ 2 + bx + c = 0)  a =');
let b = prompt('Enter the coefficients for the quadratic equation (ax ^ 2 + bx + c = 0)  b =');
let c = prompt('Enter the coefficients for the quadratic equation (ax ^ 2 + bx + c = 0)  c =');

let discr = b * b - 4 * a * c;
console.log('Discriminant has value of :' + discr);

if (a === 0 || (isNaN(a) || isNaN(b) || isNaN(c))) {
    console.log('Invalid input data');
} else if (discr >= 0) {
    let x1 = (-b + Math.sqrt(discr)) / (2 * a);
    let x2 = (-b - Math.sqrt(discr)) / (2 * a);
    console.log('first value: ' + x1);
    console.log('second value: ' + x2);
} else {
    console.log('there is no solution');
}