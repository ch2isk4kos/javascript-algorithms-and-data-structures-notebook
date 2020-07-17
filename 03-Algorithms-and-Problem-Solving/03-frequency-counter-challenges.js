// *******************************************************************************************************************
// *****************************************          #1.         ****************************************************
// *******************************************************************************************************************
/*
================================================================================
  GIVEN TWO STRINGS, WRITE A FUNCTION TO DETERMINE IF THE SECOND STRING IS
  AN ANAGRAM OF THE FIRST.

  AN ANAGRAM IS A WORD, PHRASE, OR NAME FORMED BY REARRANGING THE LETTERS OF
  ANOTHER, SUCH AS CINEMA FORMED FROM ICEMAN.
================================================================================
*/

function validAnagram(str1, str2) {
  // if the size of each string doesn't match - return false
  if (str1.length !== str2.length) {
    return false;
  }

  // set a varible to an empty object to keep track of characters in a string
  const counter = {};

  // loop over each character of the first input string
  for (let i = 0; i < str1.length; i++) {
    // set a variable to point to each element through the iteration
    let letter = str1[i];
    
    // if the current element is truthy - which in this case means the character already exists
    // increment the character count by 1
    // else set the character count to 1
    counter[letter] ? counter[letter] += 1 : counter[letter] = 1;
  }

  console.log("------------------------------------------------------");
  console.log("counter object: ", counter);
  console.log("------------------------------------------------------");

  // loop over each character of the second input string
  for (let i = 0; i < str2.length; i++) {
    // set a variable to point to each element through the iteration
    let letter = str2[i];
    
    // if the current element is not found in the counter object - return false 
    if (!counter[letter]) {
      return false;
    } else {
      // else decrement the value of the current key in the counter object by 1 - modifying the value of the key to 0. 
      counter[letter] -= 1;
    }
    console.log(`second for loop iteration ${i}:` , counter);
  }
  console.log("------------------------------------------------------");
  console.log("counter object @ end: ", counter);
  console.log("------------------------------------------------------");

  return true;
}

validAnagram("", "")            // true
validAnagram("hello", "world")  // false
validAnagram("below", "elbow")  // true
validAnagram("taste", "state")  // true
/*

-------------------------------------------------------
counter object:  { t: 2, a: 1, s: 1, e: 1 }
-------------------------------------------------------
second for loop iteration 0: { t: 2, a: 1, s: 0, e: 1 }
second for loop iteration 1: { t: 1, a: 1, s: 0, e: 1 }
second for loop iteration 2: { t: 1, a: 0, s: 0, e: 1 }
second for loop iteration 3: { t: 0, a: 0, s: 0, e: 1 }
second for loop iteration 4: { t: 0, a: 0, s: 0, e: 0 }
-------------------------------------------------------
counter object @ end:  { t: 0, a: 0, s: 0, e: 0 }
-------------------------------------------------------

> true

*/

// *******************************************************************************************************************
// *****************************************          #2.         ****************************************************
// *******************************************************************************************************************

/*
===========================================================================
  GIVEN TWO POSITIVE INTEGERS, FIND OUT IF THE TWO NUMBERS HAVE THE SAME
  FREQUENCY OF DIGITS.

  TIME COMPLEXITY: O(n) 
===========================================================================
*/

function sameFrequency(a, b) {
  // turn each input integer to a string
  let stringA = a.toString();
  let stringB = b.toString();
  
  // edge case to check if both strings have the same amount of characters
  if (stringA.length !== stringB.length) return false;

  // create a counter for both inputs
  let counterA = {};
  let counterB = {};

  // loop over the first input string
  for (let i = 0; i < stringA.length; i++) {
    // 
    counterA[stringA[i]] = (counterA[stringA[i]] || 0) + 1;
  }

  for (let j = 0; j < stringA.length; j++) {
    counterB[stringB[j]] = (counterB[stringB[j]] || 0) + 1;
  }

  for (let key in counterA) {
    if (counterA[key] !== counterB[key]) return false;
  }

  return true;
}

sameFrequency(34, 24);            // false
sameFrequency(24, 42);            // true
sameFrequency(22, 222);           // false
sameFrequency(182, 281);          // true
sameFrequency(3589578, 5835987);  // true
