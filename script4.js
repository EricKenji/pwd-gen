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
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

    var length = prompt("Select a password length from 8 to 128.");

    var charValues = []

    var lower = prompt("Would you like to include lowercase? Type yes or no");
    if (lower == "yes") {
        charValues.push("lower");
    }

  var upper = prompt("Would you like to include uppercase? Type yes or no");
    if (upper == "yes") {
        charValues.push("upper");
    }

    var numbers = prompt("Would you like to include numbers? Type yes or no");
    if (numbers == "yes") {
        charValues.push("numbers");
    }

    var symbols = prompt("Would you like to include symbols? Type yes or no");
    if (symbols == "yes") {
        charValues.push("symbols");
    }


 
//   var number = prompt("Would you like to include numbers? Type yes or no");
//     if (number == "yes") {
//       var number = true;
//     }
//   console.log(number);

//   var symbol = prompt("Would you like to include symbols? Type yes or no");
//     if (symbol == "yes") {
//       var symbol = true;
//     }
//   console.log(symbol);
    
    // var lower = prompt("Would you like to include lowercase? Type yes or no");
    // if (lower == "yes") {
    //   var lower = true;
    // } else if (lower == "no") {
    //     var lower = false;
    // } else {
    //     alert("Please enter a valid response.")
    // }

    var characters = ""
    for (i = 0; i < length; i++) {
        var arrayIndex = Math.floor(Math.random() * charValues.length);
            if (charValues[arrayIndex] === "lower") { 
                // use lower
                characters += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            } else { 
                // use upper
                characters += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
            }
        
    }

    return characters;
}

