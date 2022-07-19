// Assignment code here
var generateBtn = document.querySelector("#generate");
function randomSeq(min, max){
    if (!max) {
        max = min
        min = 0
    }
    var rand = Math.random()
    return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
    return list[randomSeq(list.length)]
}

function generatePassword(){
     var personInput = window.prompt("Insert length you wish")
    // console.log(personInput)
    // pasreInt turn string into number value
    var passwordLength = parseInt(personInput)
    // if NaN input is invaled exit funtion
    if (isNaN(passwordLength)) {
        window.alert("That's not a NUMBER!!!")
        return
    } 
    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password length must be between 8 and 128 characters")
        return
    }
// once pass first input will ask next prompts
var personWantsNum = window.confirm("Want to add NUMBERS in your password?")
var personWantsSym = window.confirm("Want to add SYMBOLS in your password?")
var personWantsLower = window.confirm("Want to add LOWERCASE in your password?")
var personWantsUpper = window.confirm("Want to add UPPERCASE in your password?")
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", "."]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var optionsCart = []

if (personWantsNum === true) {
    optionsCart.push(numberList)
}

if (personWantsSym === true) {
    optionsCart.push(symbolList)
}

if (personWantsLower === true) {
    optionsCart.push(lowercaseList)
}

if (personWantsUpper === true) {
    optionsCart.push(uppercaseList)
}
// console.log(optionsCart)
// if cancel everything push lowercase
if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList)
}

// random list user can select from optionCart
var generatedPassword = ""

for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar 
    // console.log(generatedPassword)
    // console.log(randomChar)
    }
    return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);