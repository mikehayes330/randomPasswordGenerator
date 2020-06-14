// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*()";



// Write password to the #password input

function writePassword(event) {
  event.preventDefault()
  var passwordLength = prompt("Please Choose Length of Password?( 8-128 )")
  if (passwordLength <= 128 && passwordLength >= 8 ) {
    var includeUpper = confirm("Would you like to include Uppercase?")
    var includeLower = confirm("Would you like to include Lowercase?")
    var includeSpecial = confirm("Would you like to include Special Characters?")
    var includeNumber = confirm("Would you like to include Numbers?")
  } else { alert("Password must be between 8-128!")
    return;
  };
  
  // console.log(passwordLength);
  
  var passwordOptions = "";

  if(includeUpper == true){
    passwordOptions += upper;
  }
  if(includeLower == true){
    passwordOptions += lower;
  }
  if(includeSpecial == true){
    passwordOptions += symbol;
  }
  if(includeNumber == true){
    passwordOptions += number;
  } 
  
  
  
  var password = "";

  for ( var i = 0; i <= passwordLength; i++){
    password = password + passwordOptions.charAt(Math.floor(Math.random() * Math.floor(passwordOptions.length - 1)))
  }
  

  
  // console.log(password)
  
 
  
  
  
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
