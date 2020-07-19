# Searching Algorithms: Linear Search

---

## Linear Search

iterates over each element of an array starting at the beginning - moving forward - or - beginning at the end and moving backwards.

Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value desired.

```js
let array = [ 7, 10, 3, 98, 15, 2, 10 ];

// Search for 15

//            ?
            [ 7, 10, 3, 98, 15, 2, 10 ];

//               ?
            [ 7, 10, 3, 98, 15, 2, 10 ];

//                   ?
            [ 7, 10, 3, 98, 15, 2, 10 ];

//                      ?
            [ 7, 10, 3, 98, 15, 2, 10 ];

//                          ✔︎
            [ 7, 10, 3, 98, 15, 2, 10 ];

// return `true` or the index number [4]
```

---

## JS Built-in Array Search Methods

JavaScript has some search methods that you can use out of the box:

* **indexOf**
* **includes**
* **find**
* **findIndex**

---

## Linear Search Pseudocode

```js
// a function that accepts an array and a value

// loop through the array and check if the current array element
// is equal to the value

// if it is, return the index at which element is found

// if the value is not found, return -1

```

### Linear Solution

```js
let arrayOfNumbers = [ 7, 10, 3, 98, 15, 2, 10, 15, 24, 33 ];

// a function that accepts an array and a value
function linearSearch(array, value) {
  
  // loop through the array and check if the current array element
  // is equal to the value
  for (let i = 0; i < array.length; i++) {

    // if it is, return the index at which element is found
    if (array[i] === value) {
      return i;
    }
  }
  // if the value is not found, return -1
  return -1;
}

linearSearch(arrayOfNumbers, 24);   // [8]
linearSearch(arrayOfNumbers, 16);   // -1
```

---

</br>

```js

//  =============================================
//
//  =============================================

const states = [
"Alabama",
"Alaska",
"Arizona",
"Arkansas",
"California",
"Colorado",
"Connecticut",
"Delaware",
"Florida",
"Georgia",
"Hawaii",
"Idaho",
"Illinois",
"Indiana",
"Iowa",
"Kansas",
"Kentucky",
"Louisiana",
"Maine",
"Maryland",
"Massachusetts",
"Michigan",
"Minnesota",
"Mississippi",
"Missouri",
"Montana",
"Nebraska",
"Nevada",
"New Hampshire",
"New Jersey",
"New Mexico",
"New York",
"North Carolina",
"North Dakota",
"Ohio",
"Oklahoma",
"Oregon",
"Pennsylvania",
"Rhode Island",
"South Carolina",
"South Dakota",
"Tennessee",
"Texas",
"Utah",
"Vermont",
"Virginia",
"Washington",
"West Virginia",
"Wisconsin",
"Wyoming",
]

```

```js

//  =============================================
//
//  =============================================

const usernames = [
"lebron9",
"melo7",
"westbrook0",
"harden13",
"curry30",
"greekfreak34",
"lillard0",
"mitch_robinson23",
"ad23",
"luka77",
"porzingis6",
"kawhi2",
"pg13",
"dbooker1",
"cp3",
"barrett9",
"durant7",
"kemba8",
"trae11",
"embiid21",
"dmitchell45",
"dfox0",
"shai2",
"jah12",
"zion1",
"lou_will23",
"jokic15",
"kyrie2",
"dmurray5",
"bam13",
"jbutler21",
"bingram14",
"jjj13",
"pat_bev21",
"jrandle30",
"sabonis11",
"markkanen24",
"jrichardson0",
"tatum0",
"drummond0",
"jingles2",
"capela15",
"devonte_graham4",
"klay11",
"jmurray27",
"jholiday11",
"beal3",
"kat32",
"jbrown7",
"covington33",
]

usernames.indexOf("luka77");             // 9
usernames.indexOf("devonte_graham4");    // 42
usernames.indexOf("abcdefg");            // -1 for names that aren't found

```
