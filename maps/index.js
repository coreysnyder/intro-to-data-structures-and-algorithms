/*****
 *
 *  Into to Maps
 *
 */



let things = new Map();

const myFunc = () => '🍕';

things.set('🚗', 'Car');
things.set('🏠', 'House');
things.set('✈️', 'Airplane');
things.set(myFunc, '😄 Key is a function!');

things.size; // 4

things.has('🚗'); // true

things.has(myFunc) // true
things.has(() => '🍕'); // false, not the same reference
things.get(myFunc); // '😄 Key is a function!'

things.delete('✈️');
things.has('✈️'); // false

things.clear();
things.size; // 0

// setting key-value pairs is chainable
things.set('🔧', 'Wrench')
      .set('🎸', 'Guitar')
      .set('🕹', 'Joystick');

const myMap = new Map();

// Even another map can be a key
things.set(myMap, 'Oh gosh!');
things.size; // 4
things.get(myMap); // 'Oh gosh!'

/*****
 *
 *  Initializing Maps from Arrays
 *
 */
const funArray = [
  ['🍾', 'Champagne'],
  ['🍭', 'Lollipop'],
  ['🎊', 'Confetti'],
];

let funMap = new Map(funArray);
funMap.get('🍾'); // Champagne

for(let [key, value] of funArray){
  console.log(`Key: ${key}, Value: ${value}`)
}
/*
Key: 🍾, Value: Champagne
Key: 🍭, Value: Lollipop
Key: 🎊, Value: Confetti
 */


/*****
 *
 *  Iterating Over Maps
 *
 */

let activities = new Map();

activities.set(1, '🏂');
activities.set(2, '🏎');
activities.set(3, '🚣');
activities.set(4, '🤾');

for (let [nb, activity] of activities) {
  console.log(`Activity ${nb} is ${activity}`);
}

// Activity 1 is 🏂
// Activity 2 is 🏎
// Activity 3 is 🚣
// Activity 4 is 🤾

activities.forEach((value, key) => {
  console.log(`Activity ${key} is ${value}`);
});

// Activity 1 is 🏂
// Activity 2 is 🏎
// Activity 3 is 🚣
// Activity 4 is 🤾


