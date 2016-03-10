/**
 * Created by User on 09.03.2016.
 */
var a = 1;
var b = 6;
var c = 9;

var discriminant = calcDiscriminant(a, b, c);
console.log("Дискрименант: " + discriminant);
if (discriminant > 0) {
    var x = new Array();
    x = calcTwoResults(a, b, discriminant);
    console.log("X1=" + x[0] + ", X2=" + x[1]);
} else if (discriminant == 0) {
    var x = calcOneResult(a, b);
    console.log("X1=X2=" + x);
} else {
    console.log("Нет решений");
}


function calcDiscriminant(a, b, c) {
    return Math.pow(b, 2) - 4 * a * c;
}

function calcTwoResults(a, b, discriminant) {
    var x = new Array();
    x[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    x[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
    return x;
}
function calcOneResult(a, b) {
    return -b / (2 * a);
}
