export default function ErrorHandlingMiddleware(req, res, next){

/**



 */  



const {firstName, lastName, password, email, phoneNumber} = req.body;
function doesPasswordContainsAtLeastOneNumericLetter(password){
  const numbers = new Set ([
    '0','1','2','3','4','5','6','7','8','9'
  ]);
  
  for(let letter of password){
    if(numbers.has(letter)){
      return true;
    }    
  }

  // default is 
    return false;

}
console.log(doesPasswordContainsAtLeastOneNumericLetter(password))
function doesPasswordContainsAtLeastOneUppercaseLetter(password){
  const upperCaseLetters = new Set ([
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
  ]);
  
  for(let letter of password){
    if(upperCaseLetters.has(letter)){
      return true;
    }    
  }

  // default is 
    return false;

}
function doesPasswordHavingSpecialChars(password){
  const specialChars = new Set([
    ' ', '\t', '\n', // whitespace characters
    '.', ',', ';', ':', '!', '?', '(', ')', '{', '}', '[', ']', '"', "'", '<', '>', // punctuation characters
    '+', '-', '*', '/', '%', '==', '!=', '>', '<', '>=', '<=', '&&', '||', '!', // operators
    '@', '#', '$', '&', '|', '^', '~', // special symbols
    '\\n', '\\t', '\\\\', '\\"', "\\'" // escape characters
  ]);

  for(let letter of password){
    if(specialChars.has(letter)){
      return true;
    }    
  }

  // default is false;
    return false;

}


// ### Validate First Name and Last Name:
// + Ensure that the first letter of both the first name and last name is capitalized.
// + If the names do not meet this criteria, respond with an error message indicating the issue.
    if(firstName.at(0) !== firstName.at(0).toUpperCase() || 
      lastName.at(0) !== lastName.at(0).toUpperCase()){
        res.status(400).json({
          success: false,
          message: "First Letter of First and Last Name should be Capital"
        });      
    }
  // ### Validate Password:
  // + Check if the password contains at least one special character, one uppercase letter, and one numeric character.
  // + Ensure that the password has a minimum length of 8 characters.
  // + If the password does not meet these criteria, respond with an error message indicating the issue.  
    else if(password.length <8 || !doesPasswordHavingSpecialChars(password) || 
            !doesPasswordContainsAtLeastOneUppercaseLetter(password) ||
            !doesPasswordContainsAtLeastOneNumericLetter(password)
    ){
      res.status(400).json({
        success: false,
        message: "Password should have a minimum length of 8 characters, and is required to contain at least one special character, one uppercase letter, and one numeric character"
      });      
    }
  // ### Validate Email Address:
  // + Verify that the email address provided contains the "@" symbol.
  // + If the email address is invalid, respond with an error message indicating the issue.  
    else if(!email.includes('@') ){
      res.status(400).json({
        success: false,
        message: "Invalid e-mail address"
      });     
    }  
   //  ### Validate Phone Number:
   //  + Check if the phone number has a minimum length of 10 digits.
   //  + If the phone number is too short, respond with an error message indicating the issue.  
    else if(phoneNumber.length < 10){
      res.status(400).json({
        success: false,
        message: "phone number shoud have a minimum length of 10 digits"
      });     
    }  
   else{    
      next();
    }

}