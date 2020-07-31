# Stacks and Queues: Intro to Stacks

---

## Stack

<https://en.wikipedia.org/wiki/Stack_%28abstract_data_type%29>

An abstract data type that serves as a collection of elements with two main principle operations:

* **push**: adds an element to the bottom of the stack
* **pop**: removes the most recent element added to the stack

A Stack is considered as a Linear data structure or more abstractly, a **sequential collection**.

</br>

### LIFO Principle: Last In First Out

The last element that enters the stack will be the first one removed.

</br>

```js
/*
                                  Example 1:

                                    ⎮   ⎮
                                    ⎮ 5 ⎮  this element is removed first
                                    ⎮⎽⎽⎽⎮
                                    ⎮   ⎮
                                    ⎮ 4 ⎮
                                    ⎮⎽⎽⎽⎮
                                    ⎮   ⎮
                                    ⎮ 3 ⎮
                                    ⎮⎽⎽⎽⎮
                                    ⎮   ⎮
                                    ⎮ 2 ⎮
                                    ⎮⎽⎽⎽⎮
                                    ⎮   ⎮
                                    ⎮ 1 ⎮
                                    ⎮⎽⎽⎽⎮
*/
```

```js
/*
                                  Example 2:


                  LAST            LENGTH = 4           FIRST
                  .⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤.
                  │                                    │
                 -----       -----       -----       -----
            <-- │  1  │ <-- │  3  │ <-- │  5  │ <-- │  7  │
                 -----       -----       -----       -----
                  node        node        node        node
*/
```

</br>

### Where Are Stacks Used

There are multiple ways of implementing a stack:

* Managing function invocations
* Routing (history object)
* Undo/Redo
* etc...

Some programming languages come with their own stack data type built-in. JavaScript is not equipped with this functionality out of the box so you must use a linked-list or an array to build a stack.

---

## Creating a Stack with an Array

You can use an array to implement a stack in JavaScript. The best approach is by using `push` and `pop` to add and remove elements to and from the end of the array.

</br>

```js
const stack = [];

// add to the end and remove from the end

stack.push("google");
stack.push("github");
stack.push("linkedin");

stack.pop();               // 'linkedin'
stack.pop();               // 'github'

console.log(stack);        // 'google'

// **************************************************
// ********************* OR *************************
// **************************************************

// add to the beginning and remove from the beginning

stack.unshift("eat snacks");
stack.unshift("recline chair");
stack.unshift("turn on tv");

stack.shift();              // 'turn on tv'
stack.shift();              // 'recline chair'
stack.shift();              // 'eat snacks'

// NOTE: unshift() and shift() is not recommended by analysis of Big O
```

---

## Writing a Stack from Scratch

This implentation of a stack will be built using a **Singly Linked List**. You could also use a Doubly Linked List as well.

**NOTE**: be aware that the instance method names look familiar but their functionality is differnt from Singly Linked List section.

</br>

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let node = new Node(value);
    let current;

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      current = this.first;
      this.first = node;
      this.first.next = current;
    }
    this.size++;
    return this.size;
  }

  pop() {
    let current = this.first;
    if (this.size === 0) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return current.value;
  }
}
```

```js
const stack = new Stack();

stack.push('google');          // 1
stack.push('linkedin');        // 2
stack.push('amazon');          // 3

stack.pop();                   // 'amazon'
```

**NOTICE** that **`push`** and **`pop`** have a different functionality this time around.
