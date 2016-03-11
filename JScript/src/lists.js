/**
 * Created by User on 10.03.2016.
 */
var listNumbers = [1, 5, 7, 4, 2, 7, 7, 3, 2];
listNumbers.reverse(listNumbers.sort(listNumbers));
console.log(listNumbers);
var subListFirst5 = listNumbers.slice(0, 5);
console.log("First 5 elements: " + subListFirst5);
var subListLast5 = listNumbers.slice(listNumbers.length - 5);
console.log("Last 5 elements: " + subListLast5);

var evenNumbersSumm = 0;
for (var i = 0; i < listNumbers.length; i++) {
    if (listNumbers[i] % 2 == 0) {
        evenNumbersSumm += listNumbers[i];
    }
}
console.log("Сумма четных чисел " + evenNumbersSumm);

var sortListOneHundred = new Array();
for (var i = 0; i < 100; i++) {
    sortListOneHundred[i] = i + 1;
}
console.log(sortListOneHundred);




