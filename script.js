// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var uppercaseChar = arrayLowHigh(65,90);
var lowercaseChar = arrayLowHigh(97,122);
var numberChar = arrayLowHigh(48,57);
var symbolChar = arrayLowHigh(33,47);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var characterLength = prompt("How many characters would you like your password to be? Minimum 8, Maximum 128");
  console.log(characterLength);
  
    
  var lower = prompt("Would you like to include lowercase? Type yes or no");
    if (lower == "yes") {
      var lower = true;
    }
  console.log(lower);

  var upper = prompt("Would you like to include uppercase? Type yes or no");
    if (upper == "yes") {
      var upper = true;
    }
 console.log(upper);
 
  var number = prompt("Would you like to include numbers? Type yes or no");
    if (number == "yes") {
      var number = true;
    }
  console.log(number);

  var symbol = prompt("Would you like to include symbols? Type yes or no");
    if (symbol == "yes") {
      var symbol = true;
    }
  console.log(symbol);

  var pwd = genpwd(characterLength, lower, upper, number, symbol);
}
   
  function genpwd(characterLength, lower, upper, number, symbol) {
    var charCodes = lowercaseChar
    if (upper == true) charCodes = charCodes.concat(uppercaseChar)
    if (number == true) charCodes = charcodes.concat(numberChar)
    if (symbol == true) charCodes = charCodes.concat(symbolChar)
    
    var passwordChar = []
    for (var i = 0; i < characterLength; i++) {
        var characterCode = charCodes[Math.floor(Math.random() * characterLength)]
        passwordChar.push(tring.fromCharCode(chararacterCode))
    }
    return passwordChar.join("")
  }

  function arrayLowHigh(low, high) {
    var array = []
    for (var i = low; i <= high; i++) {
      array.push(i)
    }
    return array
  }

  console.log(uppercaseChar);
  console.log(lowercaseChar);
  console.log(numberChar);
  console.log(symbolChar);



//}

function randomLower() {
  return Math.floor(Math.random() * 26) + 97;
}

function randomUpper() {
  return Math.floor(Math.random() * 26) + 65;
}

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

function randomSymbol() {
  return Math.floor(Math.random() * 10) + 33;
}
 