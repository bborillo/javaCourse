/**
 * Created by User on 09.03.2016.
 */
var a = 1;
var b = 6;
var c = 9;

var discriminant = calcDiscriminant(a, b, c);
if (discriminant > 0) {
    var x = new Array();
    x = calcTwoResults(a, b, c);
    alert("X1=" + x[0] + ", X2=" + x[1]);
}
if (discriminant == 0) {
    var x = calcOneResult(a, b);
    alert("X1=X2=" + x);
} else {
    alert("Нет решений");
}


function calcDiscriminant(a, b, c) {
    var discriminant;
    discriminant = Math.pow(b, 2) - 4 * a * c;
    alert("Дискрименант: " + discriminant);
    return discriminant;
}

function calcTwoResults(a, b, c) {
    var x = new Array();
    x[0] = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;
    x[1] = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;
    return x;
}
function calcOneResult(a, b) {
    var x = -b / 2 * a;
    return x;
}
