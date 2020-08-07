# Data Structures: Priority Queues

---

## Priority Queue

<https://en.wikipedia.org/wiki/Priority_queue>

An abstract data type similar to regular **queue** or **stack** data structure in which each element additionally has a "priority" associated with it. In a Priority Queue, an element with high priority is served before an element with low priority.

In some implementations, if two elements have the same priority, they are served according to the order in which they were enqueued, while in other implementations, ordering of elements with the same priority is undefined.

While priority queues are often implemented with Heaps, they are conceptually distinct from Heaps. A Priority Queue is a concept like a **list** or **map**; just as a list can be implemented with a linked list or an array, a Priority Queue can be implemented with a Heap or a variety of other methods such as an unordered array.

The logic behind a Priority Queue is to retrieve one node at a time - out of the structure - and _do something_ to it. Think of an emergency room that admits  patients based on the severity of their wound, i.e.: a broken leg would have priority over someone with the common cold.

### Naive Priorty Queue

Use a list to store all nodes.

```js
// List { priority: 3, priority: 1, priority: 5, priority: 4 }
```

Iterate over each each item to find the highest priorty node.
**NOTE:** a lower priorty number denotes a higher priority.

---
