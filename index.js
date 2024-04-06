function hasTargetSum(array, target) {
  // Write your algorithm here
  function hasTargetSum(nums, target) {
    // Loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // Loop through the rest of the numbers in the array
        for (let j = i + 1; j < nums.length; j++) {
            // If the sum of current pair equals the target, return true
            if (nums[i] + nums[j] === target) {
                return true;
            }
        }
    }
    // If no pair adds up to the target, return false
    return false;
}

}

/* 
  Write the Big O time complexity of your function here
  The time complexity of the hasTargetSum function is O(n^2), where n is the number of elements in the input array. This is because the function iterates through each element of the array once, and for each element, it iterates through the rest of the array to find a pair that adds up to the target. Therefore, the total number of comparisons made by the nested loops is proportional to the square of the number of elements in the array, resulting in a quadratic time complexity.

*/

/* 
  Add your pseudocode here
  function hasTargetSum(nums, target):
    for i from 0 to length of nums - 1:
        for j from i + 1 to length of nums:
            if nums[i] + nums[j] equals target:
                return true
    return false

*/

/*
  Add written explanation of your solution here
  The hasTargetSum function takes an array of integers nums and a target integer target as input.

Nested Loop Iteration: The function uses two nested loops to iterate through each pair of numbers in the array. The outer loop iterates through each number in the array, and the inner loop iterates through the rest of the numbers in the array, starting from the next position after the current number.

Pair Sum Comparison: For each pair of numbers (nums[i], nums[j]), where i is the index of the outer loop and j is the index of the inner loop, the function checks if their sum equals the target. This is done by adding nums[i] and nums[j] and comparing the result to target.

Return: If the sum of any pair equals the target, the function immediately returns true, indicating that there exists at least one pair of numbers in the array that adds up to the target.

False Return: If the nested loops complete without finding any pair that adds up to the target, the function returns false, indicating that no such pair exists in the array.

Time Complexity: The time complexity of this solution is O(n^2), where n is the number of elements in the input array. This is because the function iterates through each pair of numbers in the array, resulting in quadratic time complexity due to the nested loops.
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
