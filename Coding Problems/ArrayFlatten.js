// FB Question 2

function flatten(array){
  let flattened = []

  for(let i=0; i < array.length; i++){
    if(Array.isArray(array[i])){
      flattened = [...flattened, ...flatten(array[i])]
    }else{
      flattened.push(array[i])
    }
  }
  return flattened
}

console.log(flatten([1, {a: [2, [3]]}, 4, [5, [6]], [[7], 8, 9], [[10]]]))
// Should return
// [ 1, { a: [ 2, [Array] ] }, 4, 5, 6, 7, 8, 9, 10 ]
// Any arrays should be flattened except ones inside of objects. A


