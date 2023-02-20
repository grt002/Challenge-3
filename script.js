// FROM STARTER CODE - Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// FROM STARTER CODE - Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// FROM STARTER CODE - Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// NEW - Generate a password that meets the user's selected criteria
function generatePassword () {

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
  var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '{', '}', '[', ']', '|', ':', ';', '"', '<', '>', ',', '.', '?'];

  // NEW - prompt for character types to include in the password
  var includeLowercase = confirm("Include lowercase letters?");
  includeLowercase = (includeLowercase) ? true : false;
  var includeUppercase = confirm("Include uppercase letters?");
  includeUppercase = (includeUppercase) ? true : false;
  var includeNumbers = confirm("Include numbers?");
  includeNumbers = (includeNumbers) ? true : false;
  var includeSpecialChars = confirm("Include special characters?");
  includeSpecialChars = (includeSpecialChars) ? true : false;

  // NEW - Validate that at least one character type is selected
  while (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
    alert("Please select at least one character type.");
    includeLowercase = confirm("Include lowercase letters?");
    includeUppercase = confirm("Include uppercase letters?");
    includeNumbers = confirm("Include numbers?");
    includeSpecialChars = confirm("Include special characters?");
  }

  // NEW - Initialize the password string
  var password = '';

  // NEW - Combine all selected character types into one string
  var charsToUse = '';
  if (includeLowercase) {
    charsToUse += lowercaseChars;
  }
  if (includeUppercase) {
    charsToUse += uppercaseChars;
  }
  if (includeNumbers) {
    charsToUse +=numericChars;
  }
  if (includeSpecialChars) {
    charsToUse += specialChars.join('');
  }

  // NEW - Loop through the selected character types and randomly select characters to add to the password
  for (var i = 0; i < passwordLength; i++) {
    password += charsToUse.charAt(Math.floor(Math.random() * charsToUse.length));
  }

  return password;
}