// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

function generatePassword() {
    var characterAmount = prompt("How many characters would you like your password to be? Minimum 8, Maximum 128");
    console.log(characterAmount);
    
      
    var includeLowerCase = prompt("Would you like to include lowercase? Type yes or no");
        if (includeLowerCase == "yes") {
        var includeLowerCase = true;
      } else {
          var includeLowerCase = false;
      }
    console.log(includeLowerCase);
  
    var includeUppercase = prompt("Would you like to include uppercase? Type yes or no");
        if (includeUppercase == "yes") {
        var includeUppercase = true;
      } else {
          var includeUppercase = false;
      }
   console.log(includeUppercase);
   
    var includeNumbers = prompt("Would you like to include numbers? Type yes or no");
        if (includeNumbers == "yes") {
        var includeNumbers = true;
      } else {
          var includeNumbers = false;
      }
    console.log(includeNumbers);
  
    var includeSymbols = prompt("Would you like to include symbols? Type yes or no");
        if (includeSymbols == "yes") {
        var includeSymbols = true;
      } else {
          var includeSymbols = false;
      }
    console.log(includeSymbols);

    var characterAmount = characterAmount.value;
    var includeLowerCase = (includeLowerCase = true);
    var includeUppercase = (includeUppercase = true);
    var includeNumbers = (includeNumbers = true);
    var includeSymbols = (includeSymbols = true);
    passwordText = genPwd(includeLowerCase, includeUppercase, includeNumbers, includeSymbols)

    function genPwd(includeLowerCase, includeUppercase, includeNumbers, includeSymbols) {
    var charCodes = lowercaseChar
    if (includeUppercase) charCodes = charCodes.concat(uppercaseChar)
    if (includeNumbers) charCodes = charCodes.concat(numberChar)
    if (includeSymbols) charCodes = charCodes.concat(symbolChar)

    var passwordCharacters = []
    for(var i = 0; i < characterAmount; i++) {
        var characterCode = charCodes[Math.floor(Math.random() * characterAmount)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    console.log(passwordCharacters);
}

var uppercaseChar = arrayLowHigh(65,90);
var lowercaseChar = arrayLowHigh(97,122);
var numberChar = arrayLowHigh(48,57);
var symbolChar = arrayLowHigh(33,47);

function arrayLowHigh(low, high) {
    var array = []
    for (var i = low; i <= high; i++) {
      array.push(i)
    }
    return array
  }
  
}

