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
    switch(lower) {
        case "yes": charValues.push("lower");
        break;
        case "no": ""
        break;
        default: window.prompt("Please enter a valid response.");
        break;
    }
    // if (lower == "yes") {
    //     charValues.push("lower");
    // } else {
    //     alert("Please enter a valid response.")

    // return generatePassword();
    // }

  var upper = prompt("Would you like to include uppercase? Type yes or no");
    if (upper == "yes") {
        charValues.push("upper");
    } else {
        alert("Please enter a valid response.")

    return generatePassword();
    }

    var numbers = prompt("Would you like to include numbers? Type yes or no");
    if (numbers == "yes") {
        charValues.push("numbers");
    } else {
        alert("Please enter a valid response.")

    return generatePassword();
    }

    var symbols = prompt("Would you like to include symbols? Type yes or no");
    if (symbols == "yes") {
        charValues.push("symbols");
    } else {
        alert("Please enter a valid response.")

    return generatePassword();
    }

    var characters = ""
    for (i = 0; i < length; i++) {
        var arrayIndex = Math.floor(Math.random() * charValues.length);
            if (charValues[arrayIndex] === "lower") { 
                // use lower
                characters += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            } else if (charValues[arrayIndex] === "upper") { 
                // use upper
                characters += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
            } else if (charValues[arrayIndex] === "numbers") {
                // use numbers
                characters += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
            } else {
                characters += String.fromCharCode(Math.floor(Math.random() * 15) + 33);
            }
        
    }

    return characters;
}

