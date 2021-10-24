// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// generate password function

// Write password to the #password input
function writePassword() {

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

var characterAmount = characterAmount.length
var includeLowerCase = includeLowerCase
var includeUppercase = includeUppercase
var includeNumbers = includeNumbers
var includeSymbols = includeSymbols

var password = generatePassword(characterAmount, includeLowerCase, includeUppercase, includeNumbers, includeSymbols) 





  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword(characterAmount, includeLowerCase, includeUppercase, includeNumbers, includeSymbols) {

}

function arrayLowHigh(low, high) {
    var array = []
    for (var i = low; i <= high; i++) {
      array.push(i)
    }
    return array
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


    

    function randomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    function randomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    function randomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 48);

    }

    function randomSymbol() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 33);
    }