/**
 * Problem: Given a smaller string s and a bigger string b, design an algorithm to find all permutations of the shorter string
 * within the bigger string. Print the location of each permutation
 **/


const permutationSearch = (s, b) => {
  let count = 0;
  const charCountHash = {}
  for(let i = 0; i < s.length; i++){
    let char = s.charAt(i)
    if(charCountHash[char]){ charCountHash[char]++ }
    else{ charCountHash[char] = 1 }
  }

  for(let i = 0; i <= (b.length - s.length); i++){
    // Copy the characters hash
    let phc = {...{}, ...charCountHash}

    let pass = true;
    for(let j = 0; j < s.length; j++){
      count++
      let currChar = b[i+j]
      if(phc[currChar] && phc[currChar] > 0){
        phc[currChar]-- // Decrement remaining
      }else{
        pass = false;
        break;
      }
    }

    pass && console.log(`Found a permutation at ${i}`)
  }

  console.log("Iterations", count)
}

const s = 'abbc'
const b = 'cbabadcbbabbcbabaabccbabc'
permutationSearch(s, b)

