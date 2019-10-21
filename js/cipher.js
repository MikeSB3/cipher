/*
var response = function(sentence){
  return sentence;
}*/

var firstResponse = prompt("Enter any sentence: ")

var firstLetter = firstResponse.charAt(0).toUpperCase();
var lastLetter = firstResponse.charAt(firstResponse.length-1).toUpperCase();

var combined = firstLetter + lastLetter;

function reverseString(combined) {
  var splitString = combined.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
};

alert(reverseString(combined));


/*function upperLowerCase (firstResponse) {
  return firstResponse.charAt(0).toUpperCase()+firstResponse.slice(1);
}

alert(upperLowerCase (firstResponse))
*/
