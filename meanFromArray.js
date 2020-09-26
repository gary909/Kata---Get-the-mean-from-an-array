/* 
Get the mean of an array
https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
}

Test.assertEquals(getAverage([2,2,2,2]),2);
Test.assertEquals(getAverage([1,2,3,4,5,]),3);
Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);
*/

function getAverage(marks) {
    var total = 0;
    for (var i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    var avg = total / marks.length;
    return Math.floor(avg);
}

console.log(getAverage([2, 2, 2, 2]));