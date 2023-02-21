function isPalindrome(str) { // Creating a function to check the user input
  let palindrome = str.toLowerCase().replace(/[^a-z0-9]/g, ''); //Take a user input, change it to lowercase, remove all punctuations and whitespaces, then store it in a variable.
  if(str === palindrome.split('').reverse().join('')) {
     return true;
     }
  else{
    return false;
  }
}

if(isPalindrome('')) { //Enter your text here
  console.log('This is a palindrome');
}
else{
  console.log("This is not a palindrome");
}
