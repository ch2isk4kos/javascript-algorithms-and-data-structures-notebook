// *******************************************************************************************************************
// *****************************************          #1.         ****************************************************
// *******************************************************************************************************************

/*
=====================================================
  IMPLEMENT A FUNCTION WHICH ACCEPTS A SORTED ARRAY 
  AND COUNTS THE UNIQUE VALUES IN THE ARRAY.

  THERE CAN BE NEGATIVE NUMBERS IN THE ARRAY BUT
  IT WILL ALWAYS BE SORTED.
=====================================================
*/

function countUniqueValues(array) {
  if (array.length === 0) return 0;

  // set first pointer variable to 0 which will be used to compare the value of the first index at start
  var i = 0;
  // loop over input array with second pointer variable set to 1
  for (let j = 1; j < array.length; j++) {
    // if the index of the first pointer DOES NOT match the index of the second pointer...
    if (array[ i ] !== array[ j ]) {
      // move first pointer one position in
      i++;
      // set the current index of the first pointer to the index value of the second pointer
      array[ i ] = array[ j ];
    }
    // log each value of the current iteration
    console.log("i, j: ", i, j);
  }
  return `${i + 1} unique values`;
}

countUniqueValues([])                                      // 0 unique values
countUniqueValues([1, 1, 1, 1, 2, 2])                      // 2 unique values
countUniqueValues([-2, -1, -1, 0, 1])                      // 4 unique values

// Time Complexity: O(n)
// Space Complexity: O(n)

//                 *************************************************
//                                CONCEPTUALIZATION
//                 *************************************************

//    indices:     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10        
countUniqueValues([1, 2, 3, 4, 4, 6, 7, 7, 7, 9, 9])       // 7 unique values

/*

******************************************
           START OF INTERATION
******************************************
    
    i
   ---------------------------------
  [ 1, 2, 3, 4, 4, 6, 7, 7, 7, 9, 9 ]
   ---------------------------------
       j

  var i = 0;                                // used as the current index

  for (let j = 1; j < array.length; j++) {
  
    if (array[ i ] !== array[ j ]) {        // ( array[ 0 ] = 1 ) !== ( array[ 1 ] = 2 )
      i++;
      array[ i ] = array[ j ];              // array[ 1 ] = 2
      console.log("i, j: ", i, j);
    }
  }

  Since i (1) and j (2) don't match
  i moves one position in and the value of its current index gets set to the value of j 
  before it moves to the next interation of the for loop.

       i
   ---------------------------------
  [ 1, 2, 3, 4, 4, 6, 7, 7, 7, 9, 9 ]
   ---------------------------------
          j

******************************************
              NEXT ITERATION
******************************************

  var i = 1;

  for (let j = 1; j < array.length; j++) {

    if (array[ i ] !== array[ j ]) {        // ( array[ 1 ] = 2 ) !== ( array[ 2 ] = 3 )
      i++;
      array[ i ] = array[ j ];              // array[ 2 ] = 3
      console.log("i, j: ", i, j);
    }
  }
          
          i
   ---------------------------------
  [ 1, 2, 3, 4, 4, 6, 7, 7, 7, 9, 9 ]
   ---------------------------------
             j

******************************************
              NEXT ITERATION
******************************************
 
  var i = 2;

  for (let j = 1; j < array.length; j++) {

    if (array[ i ] !== array[ j ]) {        // ( array[ 2 ] = 3 ) !== ( array[ 3 ] = 4 )
      i++;
      array[ i ] = array[ j ];              // array[ 3 ] = 4
      console.log("i, j: ", i, j);
    }
  }

             i
   ---------------------------------
  [ 1, 2, 3, 4, 4, 6, 7, 7, 7, 9, 9 ]
   ---------------------------------
                j
      
******************************************
              NEXT ITERATION
******************************************

  var i = 3;

  for (let j = 1; j < array.length; j++) {

    if (array[ i ] !== array[ j ]) {        // ( array[ 3 ] = 4 ) !== ( array[ 4 ] = 4 )
      i++;
      array[ i ] = array[ j ];              // array[ 3 ] = 4
      console.log("i, j: ", i, j);
    }
  }

  Since i (4) and j (4) both match
  i stays at its current index and the j variable...
  - inside of the for loop - continues to the next index.

             i
   ---------------------------------
  [ 1, 2, 3, 4, 4, 6, 7, 7, 7, 9, 9 ]
   ---------------------------------
                   j

******************************************
              NEXT ITERATION
******************************************

  var i = 3;                                // stays the same index

  for (let j = 1; j < array.length; j++) {

    if (array[ i ] !== array[ j ]) {        // ( array[ 3 ] = 4 ) !== ( array[ 5 ] = 6 )
      i++;
      array[ i ] = array[ j ];              // array[ 4 ] = 6
      console.log("i, j: ", i, j);
    }
  }

  ::::::::::::::::::::::::::::::::::::
    THIS IS WHERE IT GET INTERESTING
  ::::::::::::::::::::::::::::::::::::

  Since i (4) and j (6) don't match
  i moves one position in and the value of its current index (4)
  gets set to the value of the current index of j (6)
  before the next interation of the for loop.

                i 
   ---------------------------------
  [ 1, 2, 3, 4, 6, 6, 7, 7, 7, 9, 9 ]
   ---------------------------------
                      j

******************************************
              NEXT ITERATION
******************************************

  var i = 4;  

  for (let j = 1; j < array.length; j++) {

    if (array[ i ] !== array[ j ]) {        // ( array[ 4 ] = 6 ) !== ( array[ 6 ] = 7 )
      i++;
      array[ i ] = array[ j ];              // array[ 5 ] = 7
      console.log("i, j: ", i, j);
    }

  }
                   i
   ---------------------------------
  [ 1, 2, 3, 4, 6, 7, 7, 7, 7, 9, 9 ]
   ---------------------------------
                         j

******************************************
              NEXT ITERATION
******************************************

  var i = 5;

  for (let j = 1; j < array.length; j++) {

    if (array[ i ] !== array[ j ]) {        // ( array[ 5 ] = 7 ) !== ( array[ 7 ] = 7 )
      i++;
      array[ i ] = array[ j ];              // array[ 5 ] = 7
      console.log("i, j: ", i, j);
    }
  }

  Since i (7) and j (7) both match
  i stays at its current index and the j variable...
  - inside of the for loop - continues to the next index.

                   i
   ---------------------------------
  [ 1, 2, 3, 4, 6, 7, 7, 7, 7, 9, 9 ]
   ---------------------------------
                            j

******************************************
              NEXT ITERATION
******************************************

  var i = 5;                                // stays the same index

  for (let j = 1; j < array.length; j++) {

    if (array[ i ] !== array[ j ]) {        // ( array[ 5 ] = 7 ) !== ( array[ 8 ] = 7 )
      i++;
      array[ i ] = array[ j ];              // array[ 5 ] = 7
      console.log("i, j: ", i, j);
    }
  }

  Since i (7) and j (7) both match AGAIN
  i stays at its current index and the j variable...
  - inside of the for loop - continues to the next index.

                   i
   ---------------------------------
  [ 1, 2, 3, 4, 6, 7, 7, 7, 7, 9, 9 ]
   ---------------------------------
                               j

******************************************
              NEXT ITERATION
******************************************

  var i = 5; // stays the same index

  for (let j = 1; j < array.length; j++) {

    if (array[ i ] !== array[ j ]) {        // ( array[ 5 ] = 7 ) !== ( array[ 9 ] = 9 )
      i++;
      array[ i ] = array[ j ];              // array[ 6 ] = 9
      console.log("i, j: ", i, j);
    }
  }

  Since i (7) and j (9) don't match
  i moves one position in and the value of its current index (6)
  gets set to the value of the current index of j (9)
  before the next interation of the for loop.

                      i
   ---------------------------------
  [ 1, 2, 3, 4, 6, 7, 9, 7, 7, 9, 9 ]
   ---------------------------------
                               j

******************************************
              NEXT ITERATION
******************************************

  var i = 6; 

  for (let j = 1; j < array.length; j++) {

    if (array[ i ] !== array[ j ]) {        // ( array[ 6 ] = 9 ) !== ( array[ 10 ] = 9 )
      i++;
      array[ i ] = array[ j ];              // array[ 6 ] = 9
      console.log("i, j: ", i, j);
    }
    return `${i + 1} unique values`;        // '7 unique values'
  }
                      i
   ---------------------------------
  [ 1, 2, 3, 4, 6, 7, 9, 7, 7, 9, 9 ]
   ---------------------------------
                                  j
                                  
  NOTE: 
  i is sitting atop of the 7th value but the 6th index
  so we add 1 to i in the return statement

*/

// *******************************************************************************************************************
// *****************************************          #2.         ****************************************************
// *******************************************************************************************************************

/*
=========================================================================
  GIVEN A SORTED ARRAY OF INTEGERS AND A TARGET AVERAGE, 
  DETERMINE IF THERE IS A PAIR OF VALUES IN THE ARRAY WHERE THE AVERAGE 
  OF THE PAIR EQUALS THE TARGET PAIR.

  THERE MAY BE MORE THAN ONE PAIR THAT MATCHES THE TARGET PAIR.

  TIME COMPLEXITY: O(n)
  SPACE COMPLEXITY: O(1)
=========================================================================
*/

function averagePair(array, target) {
  let start = 0;
  let end = array.length - 1;
  
  while (start < end) {
    let avg = (array[start] + array[end]) / 2;
    if (avg === target) return true;
    else if (avg < target) start++;
    else end--;
  }
  return false;
}

averagePair([1, 2, 3], 1.5);                         // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);      // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1);               // false
averagePair([], 4);                                  // false

