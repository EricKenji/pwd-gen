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


// Password generate function
function generatePassword() {

    // prompt for password length
    var length = prompt("Select a password length from 8 to 128.");
    if (length < 8 || length > 128) {
        window.alert("Please enter a value between 8 and 128.")
        return generatePassword();
    }

    // empty array to store parameters
    var charValues = []

    // lowercase prompt
    var lower = prompt("Would you like to include lowercase? Type yes or no");
    if (lower.toLowerCase() == "yes") {
        charValues.push("lower");
    } else if (lower.toLowerCase != "no") {
        window.alert("Please enter a valid response");
        return generatePassword();
    } 

    // uppercase prompt
    var upper = prompt("Would you like to include uppercase? Type yes or no");
    if (upper.toLowerCase() == "yes") {
        charValues.push("upper");
    } else if (upper.toLowerCase != "no") {
        window.alert("Please enter a valid response");
        return generatePassword();
    } 

    // numbers prompt
    var numbers = prompt("Would you like to include numbers? Type yes or no");
    if (numbers.toLowerCase() == "yes") {
        charValues.push("numbers");
    } else if (numbers.toLowerCase != "no") {
        window.alert("Please enter a valid response");
        return generatePassword();
    } 

    // symbols prompt
    var symbols = prompt("Would you like to include symbols? Type yes or no");
    if (symbols.toLowerCase() == "yes") {
        charValues.push("symbols");
    } else if (symbols.toLowerCase != "no") {
        window.alert("Please enter a valid response");
        return generatePassword();
    } 

    // if no answers to all, restart function
    if (charValues.length === 0) {
        window.alert("Must enter yes to at least one parameter.");
        return generatePassword();
    }

    // picks random Character codes
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

