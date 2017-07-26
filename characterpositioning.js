var input = process.argv.slice(2)
var inputString = input.join('')

function positions(string) {

var newString = string.split(" ").join("").toLowerCase();
var object = {}
var lettersChecked = []
var count = []

for (var i = 0; i < newString.length; i++) {
  var letter = newString[i];
 if (lettersChecked.includes(letter)) {
    object[letter].push(i);
 }
 else {
    object[letter] = [i];
    lettersChecked.push(letter)
  }
 }
 return object;
}


console.log(positions(inputString))
