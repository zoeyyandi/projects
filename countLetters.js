var input = process.argv.slice(2)
var inputString = input.join('')

function countLetters(string) {
var newString = string.split(" ").join("").toLowerCase();
var object = {}
var lettersChecked = []

for (var letter of newString) {
 if (lettersChecked.includes(letter)) {
    object[letter] += 1
 }
 else {
    object[letter] = 1
    lettersChecked.push(letter)
  }
 }
 return object
}

console.log(countLetters(inputString))

