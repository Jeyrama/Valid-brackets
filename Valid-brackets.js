/*
Write a function that takes a string of braces, 
and determines if the order of the braces is valid. 
It should return true if the string is valid, and false if it's invalid.

All input strings will be nonempty, and will only consist of parentheses, 
brackets and curly braces: ()[]{}.
What is considered Valid?

A string of braces is considered valid if all braces are matched with the correct brace.

Examples:
  "(){}[]"   =>  True
  "([{}])"   =>  True
  "(}"       =>  False
  "[(])"     =>  False
  "[({})](]" =>  False
*/


// Solution

function validBraces(braces){
  let matches = { '(':')', '{':'}', '[':']' };
  let stack = [];
  let currentChar;

  for (let i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

// or

function validBraces(braces){
  for (let i = 0, depth = []; i < braces.length; i++) {
    switch (braces[i]) {
      case '(': case '[': case '{': depth.push(braces[i]); break;
      case ')': if (depth.pop() != '(') return false; break;
      case ']': if (depth.pop() != '[') return false; break;
      case '}': if (depth.pop() != '{') return false; break;
    }
  }
  return depth.length == 0;
}