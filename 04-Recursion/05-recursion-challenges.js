// *******************************************************************************************************************
// ******************************************          1.         ****************************************************
// *******************************************************************************************************************

/*
==========================================================
  WRITE A FUNCTION WHICH ACCEPTS A BASE AND AN EXPONENT

  THIS FUNCTION SHOULD MIMIC THE FUNCTIONALITY OF: 
  Math.pow()

  DO NOT WORRY ABOUT NEGATIVE BASES AND EXPONENTS
==========================================================
*/

function power(base, exponent) {
  if (exponent === 0) return 1;
  
  return base * power(base, exponent - 1);
}

power(5, 2);    // 25

// *******************************************************************************************************************
// ******************************************          2.         ****************************************************
// *******************************************************************************************************************

/*
===========================================================
  WRITE A FUNCTION WHICH ACCEPTS A NUMBER AND RETURNS THE
  FACTORIAL OF `n`

  NOTE: FACTORIAL ZERO (0!) IS ALWAYS 1
===========================================================
*/

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

factorial(5);   // 120

// *******************************************************************************************************************
// ******************************************          3.         ****************************************************
// *******************************************************************************************************************

/*
========================================================
  WRITE A FUNCTION WHICH ACCEPTS TAKES IN AN ARRAY OF
  NUMBERS AND RETURNS THE PRODUCT OF THEM ALL
========================================================
*/

function productOfArray(array) {
  if (array.length === 0) return 1;
  return array[0] * productOfArray(array.slice(1));
}

productOfArray([2, 4, 6, 8]);   // 384

// *******************************************************************************************************************
// ******************************************          4.         ****************************************************
// *******************************************************************************************************************

/*
=======================================================
  WRITE A FUNCTION WHICH ACCEPTS A NUMBER AND ADDS UP
  ALL THE NUMBERS FROM 0 TO THE INPUT OF `n`
=======================================================
*/

function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

recursiveRange(20);   // 210
