# Data Structures: Doubly Linked Lists

---

## Doubly Linked List

<https://en.wikipedia.org/wiki/Doubly_linked_list>

Same functionality of a singly linked list with an additional pointer on each node which directs to it's previous node making it possible to traverse the list in the opposite direction as well.

```js
/*
                         Doubly Linked List


              HEAD            LENGTH = 4           TAIL
              .⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤.
              │                                    │
            -----        -----       -----       -----
  null <-- │  1  │ -->  │  3  │ --> │  5  │ --> │  7  │ --> null
            -----  <--   -----  <--  -----  <--  -----  
             node         node        node        node
*/
```
