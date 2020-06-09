# Permutations
- write a function that take in an array of unique integers and return an array of all permutations of those integers, which no specify order
- if the input array is empty, the function should return an empty array
#Solution:
- create an variable to hold all permutation posible
- start as the first index, call the pemutation helper with 3 parameter index, array, permutation
- if idex is last index add to permutation
- if not process as each one, swap the index with current index in loop, 
- then call recursive for the permutation helper with index increase by one;
- and return the array back to normal by swap it back
- by doing that when in the fisrt call it will be call when reach to the end of the fisrt time recursive it will push in the first premuation same as the array order,
- when loop is increase by one it will swap the second index with the  fisrt index and continue to the end, push it to the permutation
- exit and swap it back
- as it loop call it will process a permutation of array



