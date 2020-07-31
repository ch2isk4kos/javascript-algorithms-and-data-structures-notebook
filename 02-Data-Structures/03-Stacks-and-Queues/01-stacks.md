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

* Managing function invocations
* Routing (history object)
* Undo/Redo

---

## Creating a Stack with an Array
