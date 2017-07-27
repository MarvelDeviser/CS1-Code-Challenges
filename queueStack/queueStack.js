/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */

class PhatStack {
  constructor() {
    this.storage = [];
  }
  get size() { return this.storage.length }
  set add(anItem) { this.storage.push(anItem) }
  remove() { return this.storage.pop() }
  get show() { return this.storage }
}

// TEST SUITE
const test = new PhatStack(); // a new instance of the class
console.log(test);            // ---> PhatStack { storage: [] }
console.log(test.size);       // ---> 0 ...or, without "get" ---> [Function: size]
// console.log(test.size());     // ---> TypeError ...or, without "get" ---> 0
// test.add('stuff');            // add an item without setter
test.add = 'stuff';           //
console.log(test.size);       // ---> 1
console.log(test.show);       // ---> [ 'stuff' ]
console.log(test.storage);    // ---> [ 'stuff' ] SAME
console.log(test.remove());   // ---> stuff (returns the removed item)
console.log(test.size);       // ---> 0
console.log(test.storage);    // ---> []
console.log(test.remove());   // ---> undefined (nothing to remove from an empty storage array)
console.log(test.size);       // ---> 0
console.log(test.storage);    // ---> []
test.add = 'more stuff'
test.add = 'even more stuff'
test.add = 'some more AMAZING stuff'
console.log(test.show);       // ---> [ 'more stuff', 'even more stuff', 'some more AMAZING stuff' ]
