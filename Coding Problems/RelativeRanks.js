/**
 Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

Example 1:
Input: [5, 4, 3, 2, 1]
Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal".
For the left two athletes, you just need to output their relative ranks according to their scores.
Note:
N is a positive integer and won't exceed 10,000.
All the scores of athletes are guaranteed to be unique.
 **/

/*** BRUTE FORCE ***/
/*
  Time complexity O(n^2)
 */
// var findRelativeRanks = function(nums) {
//     positionsArray = []
//     const podium = ["Gold Medal", "Silver Medal", "Bronze Medal"]
//     nums.forEach((self, index) => {
//       myRank = 1;
//       nums.forEach( (opp, opIndex)=> {
//         if(self < opp){
//           myRank++
//         }
//       })
//
//       if(myRank === 1){
//         positionsArray.push(podium[0])
//       }else if(myRank === 2){
//         positionsArray.push(podium[1])
//       }else if(myRank === 3){
//         positionsArray.push(podium[2])
//       }else{
//         positionsArray.push(`${myRank}`)
//       }
//
//     })
//   return positionsArray;
//
// };


// var findRelativeRanks = function(nums) {
//     positionsArray = []
//     const podium = ["Gold Medal", "Silver Medal", "Bronze Medal"]
//
//     let rankedNums = [...nums].sort((a,b)=>a-b).reverse();
//     console.log('rankedNums', rankedNums)
//
//     nums.forEach((num) => {
//       let position = rankedNums.indexOf(num);
//       console.log('pos', position)
//       positionsArray.push(podium[position] ? podium[position] : `${position+1}`)
//     })
//     return positionsArray;
//
// };


var findRelativeRanks = function(nums) {
    positionsArray = []
    const podium = ["Gold Medal", "Silver Medal", "Bronze Medal"]
    nums.forEach((num) => {

      let position = rankedNums.indexOf(num);
      console.log('pos', position)
      positionsArray.push(podium[position] ? podium[position] : `${position+1}`)
    })
    return positionsArray;

};


// console.log(findRelativeRanks([5, 4, 3, 2, 1]))
// console.log(findRelativeRanks([1, 3, 2, 5, 4]))
console.log(findRelativeRanks([10,3,8,9,4]))