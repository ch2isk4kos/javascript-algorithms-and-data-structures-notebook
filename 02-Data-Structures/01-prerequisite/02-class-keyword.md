# Data Structures in JavaScript: The `class` Keyword

---

## ES2015 Class Syntax

JavaScript does not come pre-built with any of the Data Structures listed in 01-intro-to-data-structures.md. You have to build your own. The `Class` syntax - which was introduced in ES2015 - allows you to create objects with predefined properties and methods.

JavaScript has never been known for its Object-Orientated Programming. OOP based languages like Ruby or Java use classes to model objects and offer inheritance with every instance created. JavaScript doesn't offer that type of funcionality with their `Class` keyword. It's merely _syntactic sugar_ and a way to define a class-like structure using prototypal inheritance but it doesn't change anything that happens under the hood.

---

## The `class` Keyword

The **`class`** keyword syntax creates a constant so you cannot redefine it.
A **`constructor`** is a special method needed to instantiate new instances of the class.

**NOTE:** this keyword **`this`** refers to the instance - object created from the class.

</br>

```js
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
}

let user = new User("uSeRnAmE", "newuser@js.com");

/*
User { username: 'uSeRnAmE', email: 'newuser@js.com' }
*/
```

### Instance Methods

</br>

```js
class Character {
  constructor(name, catchphrase) {
    this.name = name;
    this.catchphrase = catchphrase;
    this.coins = 0;
    this.lives = 3;
    this.items = [];
  }

  greet() {
    return `Welcome ${this.name}!`
  }

  collect() {
    this.coins += 1;

    if (this.coins === 100) {
      this.coins = 0;
      this.lives += 1;
      return 'Extra Life +1';
    }
    return `You now have ${this.coins} coins!`
  }

  decrement() {
    this.lives -= 1;

    if (this.lives === 0) {
      return 'Game Over!'
    }
    return `You Have ${this.lives} Remaining.`
  }

  addItem(item) {
    this.items.push(item);
    return `You've Added An Item.`;
  }
}

let character = new Character('Mario', 'its-a-me!');
character.greet();
character.collect()
character.decrement()
character.addItem("Super Star")

/*
Character { name: 'Mario', catchphrase: 'its-a-me!', coins: 0 }
'Welcome Mario!'
'You now have 1 coins!'
'You Have 2 Remaining.'
'You Added An Item!'
*/
```

### Class Methods

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes>

The `static` keyword defines a static method for a class. It can be called without instantiating its class and cannot be called from an instance of the class. Often used to make utility functions for an application.

The `static` keyword allows you to define functionality that is pertinant to classes but not necessarily instances of the class.

</br>

#### example1

```js
class Student {
  constructor(first, last, email) {
    this.first = first;
    this.last = last;
    this.email = email;
  }

  greet() {
    return `Welcome ${this.first} ${this.last}`;
  }

  static EmailStudents(...students) {
    // create the functionality to email each student
    return 'Students Have Been Emailed.';
  }
}

let student1 = new Student('Louie', 'Anderson', 'landerson@student.edu');
let student2 = new Student('Chris', 'Griffin', 'cgriff@student.edu');
let student3 = new Student('Lisa', 'Simpson', 'leesimpson@student.edu');

Student.EmailStudents([student1, student2, student3]);
// > 'Students Have Been Emailed.'
```

</br>

#### example 2

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(10, 24);
const p2 = new Point(16, 34);

Point.distance(p1, p2);
// 11.6619037896906
```

---

## Data Structures with classes

</br>

```js
class DataStructure {
  constructor() {
    // what default properties should it have?
  }

  instanceMethod() {
    // can be called from the instance of the class
  }
}
```

---

## `class` Keyword Recap

* A **`class`** is a blueprint that create objects known as instances.
* Classes are created with the **`new`** keyword.
* The **`constructor`** function runs when a new instance of a class is instantiated.
* Instance methods can be added to classes similar to methods in objects.
* You can add class methods by using the **`static`** keyword.
