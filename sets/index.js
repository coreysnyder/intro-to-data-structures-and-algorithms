/*****
 *
 *  Intro to Sets
 *
 */

const animals = new Set();

animals.add('🐷');
animals.add('🐼');
animals.add('🐢');
animals.add('🐿');
console.log(animals.size); // 4
animals.add('🐼');
console.log(animals.size); // 4 - Because Sets don't allow duplicates

console.log(animals.has('🐷')); // true
animals.delete('🐷');
console.log(animals.has('🐷')); // false

animals.forEach(animal => console.log(`Hey ${animal}!`));

// Hey 🐼!
// Hey 🐢!
// Hey 🐿!

animals.clear();
console.log(animals.size); // 0


/*****
 *
 *  Destructuring Arrays
 *
 */

console.log(myAnimals.size); // 4

myAnimals.forEach(animal => {
  console.log(animal);
});


// 🐷
// 🐢
// ["🐨", "🐑"]
// Object { name: "Rud", type: "🐢" }



/*****
 *
 *  Looping Over Sets
 *
 */

let moreAnimals = new Set(['🐺', '🐴', '🐕', '🐇']);

for (let animal of moreAnimals) {
  console.log(`Howdy ${ animal }`);
}


/*****
 *
 *  Iterating over Keys and Values
 *
 */
let partyItems = new Set(['🍕', '🍾', '🎊']);
let items = partyItems.values();

console.log(items.next());
console.log(items.next());
console.log(items.next());
console.log(items.next().done);

// Object {
//   done: false,
//   value: "🍕"
// }

// Object {
//   done: false,
//   value: "🍾"
// }

// Object {
//   done: false,
//   value: "🎊"
// }

// true

