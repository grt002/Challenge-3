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

// NEW - Generate a password that meets the user's selected criteria
function generatePassword {
  // Prompt for password length
  var passwordLength = prompt("Enter password length (must be between 8 and 128 characters):");
  // Validate password length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Invalid length. Please enter a length between 8 and 128 characters:");
  }
  // Other code for generating the password
}