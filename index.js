function hasTargetSum(array, target) {
  // Write your algorithm here
  
 // pull the first index(add it to a let?)
//  let indexOne = array[0];
//  console.log('first:', indexOne)
 // iterate through the array from the last index inward(.forEach?)
 for(let i = 0; i < array.length; i++){
   const targetValue = target - array[i];
   for (let j = i + 1; j < array.length; j++){
      if (array[j] === targetValue){
        return true
      }
    }
    
  }  return false
 //  IF the SUM(i + j) is equal to the target, RETURN true

 //  ELSE keep iterating

 //  IF none of the pairs with the first index equal the target, iterate i to the next index (i++)

 // then repeat the iteration of the last index (j--)
}



/* 
  Write the Big O time complexity of your function here
  
*/

/* 
  Add your pseudocode here
    
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
