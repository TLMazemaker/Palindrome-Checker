function isPalindrome(str) { // Creating a function to check the user input
  let palindrome = str.str.toLowerCase().replace(/[^a-z0-9]/g, ''); //Take a user input, change it to lowercase, remove all punctuations and whitespaces, then store it in a variable.
  if(str === palindrome.split('').reverse().join('') {
     return True;
     }
  else{
    return False;
  }
}

let str = prompt("Input your phrase");
if(isPalindrome(str)){
  console.log(str+" is a palindrome.");
}
else{
  console.log(str+" is not a palindrome.");
}
