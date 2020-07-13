# Big O: Recap

Big O notation is used to analyze the performance of an algorithm.

Big O notation gives a high level understanding of 
the time or space complexity of an algorithm.

Big O notation doesn't care about precision, only general trends:

| base | exponent |
| :----: | ---- |
| linear | O( n ) |
| constant | O( 1 ) |
| quadratic | O( n<sup>2</sup> ) |

The time and space complexity - as measured by Big O notation -
depends ONLY on the algorithm, NOT the hardware that runs it.

The runtime of a super computer compared to my laptop would
be drastically different in speed but the general trend will be the same.

The general trend Big O notation measures the number of operations
that happen whether an operation takes 10ms on one computer or 1ms on another.
