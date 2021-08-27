var lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
​
var specialcharacters =[
  "~",
  "'",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  "/",
  ":",
  ";",
  "'",
  "<",
  ">",
  ",",
  ".",
  "?",
];

var numbers =[
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

var upperCaseCharacters =[
 "A",
 "B",
 "C",
 "D",
 "E",
 "F",
 "G",
 "H",
 "I",
 "J",
 "K",
 "L",
 "M",
 "N",
 "O",
 "P",
 "Q",
 "R",
 "S",
 "T",
 "U",
 "V",
 "W",
 "X",
 "Y",
 "Z",
];

​
// prompt How many characters would you like your password to contain
// Can't have less than 8 or more than 128
// If the characters are less than 8 or more than 128, you need to start all over
// var hasSpecialCharacters  prompt, do you want special characters
// prompt, do you want numbers
​
function getOptions() {
  var passwordLength = prompt(
    "How many characters would you like your password, pick a number between 8 and 128"
  );
  if (Number.isNaN(passwordLength)) {
    alert("Please input a number for password length");
  return (1);
  }
  if (passwordLength < 8) {
    alert("Password length has to be at least 8 characters");
  }
  if (passwordLength > 128) {
    alert("Password lengthcan be no more than 128 characters");
  }
​
  var hasSpecialCharacters = confirm(
    "Click ok to include special characters as part of your password!"
  );
  var hasNumbers = confirm(
    "Click ok to include numbers as part of your password!"
  );
  var hasLowerCase = confirm(
    "Click ok to include lower case characters as part of your password!"
  );
  var hasUpperCase = confirm(
    "Click ok to include uppercase characters as part of your password!"
  );
​
  if (!hasSpecialCharacters && !hasNumbers && !hasLowerCase && !hasUpperCase) {
    alert("Please select at least one character type");
    return options;
  }
​
  var options = {
    length: passwordLength,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumbers: hasNumbers,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
  };
​
  return options;
}
​
function getRandomChar(array) {
  return array[Math.floor(Math.random() * array.length)];
}
​
function generatePassword() {
  //const possibleCharacters = ["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"];
  // guarantee at least one of each character that is selected for the password option
  // You need an array for the final password
  // you need an array for the guarantee characters
  // you need an array for the possible characters
  var options = getOptions();
​
  var final = [];
  var possibleCharacters = [];
  var guaranteeCharacters = [];
​
  // For every character type selected, you need to concat the existing character arrays into the possible characters array.
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialcharacters);
    guaranteeCharacters.push(getRandomChar(specialcharacters));
  }
  
  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteeCharacters.push(getRandomChar(numbers));
  }
  if (options.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
    guaranteeCharacters.push(getRandomChar(lowerCaseCharacters));
  }
  if (options.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
    guaranteeCharacters.push(getRandomChar(upperCaseCharacters));
  }

  //Array method that will merge all the elements of an array.
for (var i=0; i<options.length; i++) {
var possibleCharacters = getRandomChar(possibleCharacters);
final.push(possibleCharacters);
}
for (var i = 0; i < guaranteeCharacters.length; i++) {
  final[i] = guaranteeCharacters[i];
  }
  return final.join(' ');
}
​
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
​
  passwordText.value = password;
}
// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Collapse


//function getOptions();
//function generatePassword();
//function writePassword ();
//function getRandomChar ();

