/**
 * Merge Sort
 * Time Complexity O(nLog(n))
 * Space Complexity O(n)
 * /*
  Example:
    [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]
    [10, 5, 6, 3, 2] [8, 9, 4, 7, 1]
    [10, 5] [6, 3, 2] [8, 9] [4, 7, 1]
    [10, 5] [6] [3, 2] [8, 9] [4] [7, 1]
    [10, 5] [6] [2, 3] [8, 9] [4] [1, 7]
    [10, 5] [2, 3, 6]  [8, 9] [1, 4, 7]
    [2, 3, 5, 6, 10]   [1, 4, 7, 8, 9]
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */

const { printArray } = require('../utils')

let count = 0

function merge(left, right) {
  console.log('merge', left, right)
  count++
  const sorted = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }

  const results = [...sorted, ...left, ...right]

  console.log('results', results)
  // console.log('count', count)

  return results
}

function mergeSort(array) {
  console.log('mergeSort array', array)
  count++
  const { length } = array

  if (length < 2) {
    return array
  }

  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]

mergeSort(numbers)

exports.mergeSort = mergeSort
