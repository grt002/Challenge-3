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

  // NEW - Prompt for the password length
  var passwordLength = prompt("Enter password length (must be between 8 and 128 characters):");

  // NEW - Validate the password length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Invalid length. Please enter a length between 8 and 128 characters:");
  }

  // NEW - Array definitions for each character type
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*'. '('. ')'. '-', '_', '+', '+', '+', '{', '}', '[', ']', '|', ':', ';', '"', '<', '>', ',', '.', '?'];

  // NEW - prompt for character types to include in the password
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters>");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");

  // NEW - Validate that at least one character type is selected
  while (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
    alert("Please select at least one character type.");
    includeLowercase = confirm("Include lowercase letters?");
    includeUppercase = confirm("Include uppercase letters?");
    includeNumbers = confirm("Include numbers?");
    includeSpecialChars = confirm("Include special characters?");
  }

  //NEW - Initialize the password string
  var password = '';

  // Other code for generating the password

  return password;
}